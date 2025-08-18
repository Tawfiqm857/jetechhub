import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { 
  Users, 
  GraduationCap, 
  ShoppingCart, 
  Plus,
  Edit,
  Trash2,
  Eye,
  UserX,
  UserCheck
} from 'lucide-react';
import Layout from '@/components/Layout';

interface User {
  id: string;
  email: string;
  full_name?: string;
  user_type: 'member' | 'student' | 'admin';
  phone?: string;
  created_at: string;
}

interface Gadget {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  condition: 'new' | 'refurbished' | 'used';
  status: 'available' | 'sold' | 'reserved';
  image_url?: string;
  created_at: string;
}

const AdminDashboard = () => {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // User management state
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);
  
  // Gadget management state
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [gadgetsLoading, setGadgetsLoading] = useState(true);
  const [showAddGadget, setShowAddGadget] = useState(false);
  const [editingGadget, setEditingGadget] = useState<Gadget | null>(null);
  
  const [newGadget, setNewGadget] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    condition: 'new' as 'new' | 'refurbished' | 'used',
    status: 'available' as 'available' | 'sold' | 'reserved',
    image_url: ''
  });

  // Check admin access
  if (profile?.user_type !== 'admin') {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="p-8 text-center">
            <CardHeader>
              <CardTitle className="text-red-500">Access Denied</CardTitle>
              <CardDescription>
                You need admin privileges to access this dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contact an administrator if you believe this is an error.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  useEffect(() => {
    fetchUsers();
    fetchGadgets();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers((data || []) as User[]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    } finally {
      setUsersLoading(false);
    }
  };

  const fetchGadgets = async () => {
    try {
      const { data, error } = await supabase
        .from('gadgets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGadgets((data || []) as Gadget[]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch gadgets",
        variant: "destructive",
      });
    } finally {
      setGadgetsLoading(false);
    }
  };

  const updateUserType = async (userId: string, newType: 'member' | 'student' | 'admin') => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('profiles')
        .update({ user_type: newType })
        .eq('user_id', userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User type updated successfully",
      });

      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update user type",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addGadget = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('gadgets')
        .insert([newGadget]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Gadget added successfully",
      });

      setNewGadget({
        name: '',
        description: '',
        price: 0,
        category: '',
        condition: 'new',
        status: 'available',
        image_url: ''
      });
      setShowAddGadget(false);
      fetchGadgets();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to add gadget",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateGadgetStatus = async (gadgetId: string, newStatus: 'available' | 'sold' | 'reserved') => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('gadgets')
        .update({ status: newStatus })
        .eq('id', gadgetId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Gadget status updated successfully",
      });

      fetchGadgets();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update gadget status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteGadget = async (gadgetId: string) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('gadgets')
        .delete()
        .eq('id', gadgetId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Gadget deleted successfully",
      });

      fetchGadgets();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete gadget",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, students, and gadgets</p>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="gadgets" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Gadget Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {usersLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div>
                              <h3 className="font-semibold">{user.full_name || 'No name'}</h3>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                            <Badge variant={
                              user.user_type === 'admin' ? 'default' :
                              user.user_type === 'student' ? 'secondary' : 'outline'
                            }>
                              {user.user_type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Joined {new Date(user.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Select
                            value={user.user_type}
                            onValueChange={(value) => updateUserType(user.id, value as 'member' | 'student' | 'admin')}
                            disabled={loading}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="member">Member</SelectItem>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gadgets">
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Gadget Management</CardTitle>
                    <CardDescription>
                      Add, edit, and manage gadgets for sale
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => setShowAddGadget(true)}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Gadget
                  </Button>
                </CardHeader>
              </Card>

              {showAddGadget && (
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Gadget</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={newGadget.name}
                          onChange={(e) => setNewGadget(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Gadget name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price">Price (₦)</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newGadget.price}
                          onChange={(e) => setNewGadget(prev => ({ ...prev, price: Number(e.target.value) }))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          value={newGadget.category}
                          onChange={(e) => setNewGadget(prev => ({ ...prev, category: e.target.value }))}
                          placeholder="e.g., Smartphone, Laptop"
                        />
                      </div>
                      <div>
                        <Label htmlFor="condition">Condition</Label>
                        <Select
                          value={newGadget.condition}
                          onValueChange={(value) => setNewGadget(prev => ({ ...prev, condition: value as 'new' | 'refurbished' | 'used' }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="refurbished">Refurbished</SelectItem>
                            <SelectItem value="used">Used</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newGadget.description}
                        onChange={(e) => setNewGadget(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Gadget description..."
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        value={newGadget.image_url}
                        onChange={(e) => setNewGadget(prev => ({ ...prev, image_url: e.target.value }))}
                        placeholder="https://..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={addGadget} disabled={loading || !newGadget.name}>
                        {loading ? "Adding..." : "Add Gadget"}
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddGadget(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-6">
                  {gadgetsLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {gadgets.map((gadget) => (
                        <div key={gadget.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div>
                                <h3 className="font-semibold">{gadget.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  ₦{gadget.price.toLocaleString()} • {gadget.category} • {gadget.condition}
                                </p>
                              </div>
                              <Badge variant={
                                gadget.status === 'available' ? 'default' :
                                gadget.status === 'sold' ? 'secondary' : 'outline'
                              }>
                                {gadget.status}
                              </Badge>
                            </div>
                            {gadget.description && (
                              <p className="text-sm text-muted-foreground mt-1 max-w-md">
                                {gadget.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={gadget.status}
                              onValueChange={(value) => updateGadgetStatus(gadget.id, value as 'available' | 'sold' | 'reserved')}
                              disabled={loading}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="available">Available</SelectItem>
                                <SelectItem value="reserved">Reserved</SelectItem>
                                <SelectItem value="sold">Sold</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteGadget(gadget.id)}
                              disabled={loading}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;