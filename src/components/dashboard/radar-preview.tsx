import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionPanel, ToneBadge } from "@/components/common/finance-ui";
import { formatINR } from "@/lib/formatters";
import type { RadarEvent } from "@/types/finance";

export function RadarPreview({ events }: { events: RadarEvent[] }) {
  return (
    <SectionPanel title="Financial Radar" description="Upcoming events that may affect cash flow." action={<Button asChild variant="secondary" size="sm"><Link to="/radar">View full radar</Link></Button>}>
      <div className="space-y-3">
        {events.slice(0, 3).map((event) => (
          <div key={event.id} className="flex items-center justify-between gap-3 rounded-md border border-border bg-panel p-3">
            <div>
              <p className="text-sm font-medium text-foreground">{event.description}</p>
              <p className="text-xs text-muted-foreground">{event.daysAway} days • {event.category}</p>
            </div>
            <div className="text-right">
              <p className={event.type === "income" ? "text-sm font-semibold text-success" : "text-sm font-semibold text-warning"}>{event.type === "income" ? "+" : "-"}{formatINR(event.amount)}</p>
              <ToneBadge tone={event.severity}>{event.status}</ToneBadge>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
