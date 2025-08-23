import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface DashboardRedirectProps {
  children: React.ReactNode;
}

const DashboardRedirect = ({ children }: DashboardRedirectProps) => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && profile) {
      const currentPath = window.location.pathname;
      
      // Don't redirect if already on appropriate dashboard or other specific pages
      const protectedPaths = ['/admin', '/student-dashboard', '/member-dashboard'];
      if (protectedPaths.includes(currentPath)) {
        return;
      }

      // Only redirect from home page to dashboard
      if (currentPath === '/') {
        switch (profile.user_type) {
          case 'admin':
            navigate('/admin', { replace: true });
            break;
          case 'student':
            navigate('/student-dashboard', { replace: true });
            break;
          case 'member':
            navigate('/member-dashboard', { replace: true });
            break;
        }
      }
    }
  }, [user, profile, loading, navigate]);

  return <>{children}</>;
};

export default DashboardRedirect;