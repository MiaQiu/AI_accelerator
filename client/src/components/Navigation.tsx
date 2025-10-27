import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/">
              <span className="text-xl font-bold cursor-pointer" data-testid="text-logo">
                <span style={{ color: "#4A90E2" }}>C</span>
                <span style={{ color: "#32F1B8" }}>h</span>
                <span style={{ color: "#7ED321" }}>r</span>
                <span style={{ color: "#F8E71C" }}>o</span>
                <span style={{ color: "#F5A623" }}>m</span>
                <span style={{ color: "#FF6F61" }}>a</span>
                <span className="text-foreground">Mind</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/">
                <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
                  Home
                </a>
              </Link>
              <Link href="/program">
                <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/program') ? 'text-primary' : 'text-muted-foreground'}`}>
                  Program
                </a>
              </Link>
              <Link href="/about">
                <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-muted-foreground'}`}>
                  Our Team
                </a>
              </Link>
            </div>
          </div>
          <div>
            <Button
              onClick={scrollToWebinar}
              data-testid="button-nav-register"
              className="bg-primary hover:bg-primary/90"
            >
              Register for Free Webinar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
