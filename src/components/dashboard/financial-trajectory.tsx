import { FinancialTrajectoryChart } from "@/components/charts/financial-trajectory-chart";
import { SectionPanel } from "@/components/common/finance-ui";
import type { ProjectionPoint } from "@/types/finance";

export function FinancialTrajectory({ projection }: { projection: ProjectionPoint[] }) {
  return (
    <SectionPanel title="Financial Trajectory" description="Projected balance over the next 12 months.">
      <FinancialTrajectoryChart data={projection} />
    </SectionPanel>
  );
}
