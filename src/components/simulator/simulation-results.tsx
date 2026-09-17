import { ComparisonChart } from "@/components/charts/comparison-chart";
import { FinancialTrajectoryChart } from "@/components/charts/financial-trajectory-chart";
import { SectionPanel } from "@/components/common/finance-ui";
import type { SimulationResult } from "@/types/finance";
import { ScenarioComparison } from "./scenario-comparison";
import { SimulationSummary } from "./simulation-summary";

export function SimulationResults({ result }: { result: SimulationResult }) {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-primary/25 bg-primary/10 p-5">
        <p className="data-label">Projected financial future</p>
        <h2 className="mt-2 text-xl font-semibold text-foreground">{result.inputSummary}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{result.insight}</p>
      </section>
      <SimulationSummary result={result} />
      <SectionPanel title="Financial Trajectory" description="Projected balance in the selected scenario.">
        <FinancialTrajectoryChart data={result.projection} height={360} />
      </SectionPanel>
      <SectionPanel title="Combined Projection" description="Buy Now, EMI, and Save First shown together for comparison.">
        <ComparisonChart data={result.comparison} />
      </SectionPanel>
      <ScenarioComparison scenarios={result.scenarios} />
    </div>
  );
}
