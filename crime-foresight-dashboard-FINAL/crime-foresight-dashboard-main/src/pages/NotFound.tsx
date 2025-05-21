
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-5 max-w-md px-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-amber-500" />
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <a href="/">Return to Dashboard</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
