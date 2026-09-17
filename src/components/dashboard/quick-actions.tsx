import { Link } from "@tanstack/react-router";
import { ArrowLeftRight, Beaker, ChevronRight, Telescope, Target } from "lucide-react";
import { SectionPanel } from "@/components/common/finance-ui";

const actions = [
  { title: "Simulate a Decision", text: "See how today's choice could affect your future.", to: "/simulator", icon: Telescope },
  { title: "Plan a Goal", text: "Track a target and inspect possible timing shifts.", to: "/goals", icon: Target },
  { title: "Work Backwards", text: "Start from a target and view possible paths.", to: "/reverse", icon: ArrowLeftRight },
  { title: "Compare Scenarios", text: "Place future choices side by side.", to: "/experiments", icon: Beaker },
] as const;

export function QuickActions() {
  return (
    <SectionPanel title="Quick Actions" description="Move from analysis to simulation fast.">
      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.to} to={action.to} className="group rounded-lg border border-border bg-panel p-4 transition-all duration-200 hover:border-primary/60 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-md border border-primary/25 bg-primary/10 p-2 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{action.title}</h3>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">{action.text}</p>
            </Link>
          );
        })}
      </div>
    </SectionPanel>
  );
}
