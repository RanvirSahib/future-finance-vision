import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { GoalProgressChart } from "@/components/charts/goal-progress-chart";
import { SectionPanel, ToneBadge } from "@/components/common/finance-ui";
import { formatINR, formatMonthYear } from "@/lib/formatters";
import type { Goal } from "@/types/finance";

export function GoalsPreview({ goals }: { goals: Goal[] }) {
  return (
    <SectionPanel title="Goals Preview" description="Active targets from the sample profile." action={<Button asChild variant="secondary" size="sm"><Link to="/goals">Open goals</Link></Button>}>
      <div className="space-y-4">
        {goals.slice(0, 2).map((goal) => (
          <div key={goal.id} className="rounded-md border border-border bg-panel p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{goal.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{formatINR(goal.currentAmount)} / {formatINR(goal.targetAmount)}</p>
              </div>
              <ToneBadge tone={goal.status === "on_track" ? "positive" : goal.status === "attention" ? "warning" : "danger"}>{goal.status.replace("_", " ")}</ToneBadge>
            </div>
            <div className="mt-4">
              <GoalProgressChart value={goal.progressPercent} label={`${goal.name} progress`} />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Target: {formatMonthYear(goal.targetDate)}</p>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
