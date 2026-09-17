import { Progress } from "@/components/ui/progress";

export function GoalProgressChart({ value, label }: { value: number; label: string }) {
  return (
    <div aria-label={label} className="space-y-2">
      <Progress value={value} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
    </div>
  );
}
