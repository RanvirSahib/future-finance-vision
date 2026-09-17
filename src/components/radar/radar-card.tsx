import { CalendarClock } from "lucide-react";
import { ToneBadge } from "@/components/common/finance-ui";
import { formatINR, formatShortDate } from "@/lib/formatters";
import type { RadarEvent } from "@/types/finance";

export function RadarCard({ event }: { event: RadarEvent }) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">{event.description}</h2>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><CalendarClock className="size-4 text-primary" aria-hidden="true" />{formatShortDate(event.date)} • Due in {event.daysAway} days</p>
        </div>
        <ToneBadge tone={event.severity}>{event.status}</ToneBadge>
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="data-label">{event.category}</p>
          <p className="mt-2 text-sm text-muted-foreground">{event.type === "income" ? "Expected income" : "Upcoming expense"}</p>
        </div>
        <p className={event.type === "income" ? "font-display text-2xl font-semibold text-success" : "font-display text-2xl font-semibold text-warning"}>{event.type === "income" ? "+" : "-"}{formatINR(event.amount)}</p>
      </div>
    </article>
  );
}
