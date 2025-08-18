import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requiredUserType?: 'admin' | 'student' | 'member';
}

const ProtectedRoute = ({ 
  children, 
  requireAuth = true, 
  requiredUserType 
}: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        navigate('/auth', { replace: true });
        return;
      }

      if (requiredUserType && profile?.user_type !== requiredUserType) {
        navigate('/', { replace: true });
        return;
      }
    }
  }, [user, profile, loading, requireAuth, requiredUserType, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (requireAuth && !user) {
    return null;
  }

  if (requiredUserType && profile?.user_type !== requiredUserType) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;