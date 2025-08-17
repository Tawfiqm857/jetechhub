import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Smartphone, 
  Laptop, 
  Tablet,
  Watch,
  Headphones,
  Camera,
  Search,
  MessageCircle,
  Phone,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";
import gadgetsHeroImage from "@/assets/gadgets-hero.jpg";

const Gadgets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const gadgets = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      description: "Latest iPhone with A16 Bionic chip, Pro camera system, and Dynamic Island",
      price: "₦850,000",
      condition: "New",
      status: "Available",
      category: "smartphones",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400"
    },
    {
      id: 2,
      name: "MacBook Pro M2",
      description: "13-inch MacBook Pro with M2 chip, 8GB RAM, 256GB SSD",
      price: "₦1,200,000",
      condition: "New",
      status: "Available",
      category: "laptops",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
    },
    {
      id: 3,
      name: "iPad Air",
      description: "10.9-inch iPad Air with M1 chip, perfect for creativity and productivity",
      price: "₦450,000",
      condition: "Used",
      status: "Available",
      category: "tablets",
      icon: Tablet,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
    },
    {
      id: 4,
      name: "Apple Watch Series 8",
      description: "Advanced health monitoring, fitness tracking, and connectivity",
      price: "₦320,000",
      condition: "New",
      status: "Sold",
      category: "wearables",
      icon: Watch,
      image: "https://images.unsplash.com/photo-1510017107467-6aeeb27b7eb2?w=400"
    },
    {
      id: 5,
      name: "AirPods Pro 2nd Gen",
      description: "Active noise cancellation, spatial audio, and improved battery life",
      price: "₦180,000",
      condition: "New",
      status: "Available",
      category: "audio",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400"
    },
    {
      id: 6,
      name: "Canon EOS R5",
      description: "Professional mirrorless camera with 45MP sensor and 8K video",
      price: "₦2,800,000",
      condition: "Used",
      status: "Available",
      category: "cameras",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "smartphones", label: "Smartphones" },
    { value: "laptops", label: "Laptops" },
    { value: "tablets", label: "Tablets" },
    { value: "wearables", label: "Wearables" },
    { value: "audio", label: "Audio" },
    { value: "cameras", label: "Cameras" }
  ];

  const filteredGadgets = gadgets.filter(gadget => {
    const matchesSearch = gadget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gadget.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || gadget.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleContactUs = (gadgetName: string) => {
    const message = `Hi, I'm interested in the ${gadgetName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gadgetsHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              📱 Premium Tech Gadgets
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 animate-text-reveal">
              Explore Our
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Premium Gadgets Collection</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in-up animate-stagger-1">
              Discover the latest tech gadgets from top brands. Quality assured, competitive prices, 
              and excellent customer service for all your technology needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search gadgets..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Gadgets Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGadgets.map((gadget, index) => (
              <Card key={gadget.id} className="group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={gadget.image} 
                      alt={gadget.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3 space-y-2">
                      <Badge 
                        variant={gadget.condition === "New" ? "default" : "secondary"}
                        className="bg-white/90 backdrop-blur"
                      >
                        {gadget.condition}
                      </Badge>
                      <Badge 
                        variant={gadget.status === "Available" ? "default" : "destructive"}
                        className="bg-white/90 backdrop-blur block"
                      >
                        {gadget.status}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3 w-12 h-12 tech-gradient rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <gadget.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white">
                        <div className="text-2xl font-bold">{gadget.price}</div>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {gadget.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {gadget.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 tech-gradient hover:shadow-glow transition-all duration-300"
                      onClick={() => handleContactUs(gadget.name)}
                      disabled={gadget.status === "Sold"}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {gadget.status === "Sold" ? "Sold Out" : "Contact Us"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center space-x-2"
                      onClick={() => window.open("tel:+2348000000000", "_self")}
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGadgets.length === 0 && (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No gadgets found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 tech-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us for special requests, bulk orders, or if you're looking for specific gadgets. 
            We're here to help you find the perfect tech solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:shadow-glow transition-all duration-300"
              onClick={() => window.open("https://wa.me/2348000000000", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-colors"
              onClick={() => window.open("tel:+2348000000000", "_self")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gadgets;