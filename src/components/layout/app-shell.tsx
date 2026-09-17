import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Beaker,
  Crosshair,
  Goal,
  Home,
  Menu,
  Settings,
  Sparkles,
  Telescope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Overview", to: "/dashboard", icon: Home },
  { label: "Time Machine", to: "/simulator", icon: Activity },
  { label: "Goals", to: "/goals", icon: Goal },
  { label: "Reverse", to: "/reverse", icon: ArrowLeftRight },
  { label: "Experiments", to: "/experiments", icon: Beaker },
  { label: "Radar", to: "/radar", icon: Crosshair },
] as const;

interface AppShellProps {
  children: ReactNode;
}

function BrandMark() {
  return (
    <Link to="/dashboard" className="flex items-center gap-3" aria-label="Money Lens dashboard">
      <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
        <Telescope className="size-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block font-display text-sm font-semibold text-foreground">MONEY LENS</span>
        <span className="block text-xs text-muted-foreground">Future simulator</span>
      </span>
    </Link>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="border-b border-sidebar-border p-5">
        <BrandMark />
      </div>
      <nav className="flex-1 space-y-1 p-3" aria-label="Primary navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                isActive
                  ? "border border-primary/25 bg-sidebar-accent text-primary shadow-panel"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground">
          <Settings className="size-4" aria-hidden="true" />
          Settings
        </div>
      </div>
    </div>
  );
}

function TopHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="Open navigation">
                <Menu className="size-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
          <BrandMark />
        </div>
        <div className="hidden lg:block">
          <p className="data-label">AWS First Commit Hackathon</p>
          <p className="mt-1 text-sm text-muted-foreground">Frontend connected to mock-ready API contracts.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-md border border-success/25 bg-success/10 px-3 py-1.5 text-xs font-medium text-success sm:inline-flex">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Sample mode
          </span>
          <Button asChild size="sm">
            <Link to="/simulator">Simulate Future</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function MobileBottomNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const compactItems = navigationItems.slice(0, 5);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-2 py-2 backdrop-blur lg:hidden" aria-label="Mobile navigation">
      <div className="grid grid-cols-5 gap-1">
        {compactItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex flex-col items-center gap-1 rounded-md px-1 py-2 text-[0.68rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="truncate">{item.label.replace("Time Machine", "Simulate")}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-page-grid pb-20 lg:pb-0">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-sidebar-border shadow-nav lg:block">
        <SidebarContent />
      </aside>
      <div className="lg:pl-72">
        <TopHeader />
        {children}
      </div>
      <MobileBottomNav />
    </div>
  );
}
