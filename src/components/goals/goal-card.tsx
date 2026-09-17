import { CalendarDays } from "lucide-react";
import { GoalProgressChart } from "@/components/charts/goal-progress-chart";
import { ToneBadge } from "@/components/common/finance-ui";
import { formatINR, formatMonthYear } from "@/lib/formatters";
import type { Goal } from "@/types/finance";

export function GoalCard({ goal }: { goal: Goal }) {
  const tone = goal.status === "on_track" ? "positive" : goal.status === "attention" ? "warning" : "danger";
  return (
    <article className="rounded-lg border border-border bg-card p-5 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{goal.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{formatINR(goal.currentAmount)} / {formatINR(goal.targetAmount)}</p>
        </div>
        <ToneBadge tone={tone}>{goal.status.replace("_", " ")}</ToneBadge>
      </div>
      <div className="mt-5">
        <GoalProgressChart value={goal.progressPercent} label={`${goal.name} progress`} />
      </div>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-md border border-border bg-panel p-3">
          <p className="text-muted-foreground">Target</p>
          <p className="mt-1 flex items-center gap-2 font-medium text-foreground"><CalendarDays className="size-4 text-primary" aria-hidden="true" />{formatMonthYear(goal.targetDate)}</p>
        </div>
        <div className="rounded-md border border-border bg-panel p-3">
          <p className="text-muted-foreground">Required contribution</p>
          <p className="mt-1 font-medium text-foreground">{formatINR(goal.requiredMonthlyContribution)} / month</p>
        </div>
      </div>
      {goal.possibleImpact ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{goal.possibleImpact}</p> : null}
    </article>
  );
}
