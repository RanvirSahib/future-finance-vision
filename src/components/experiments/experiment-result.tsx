import { ComparisonChart } from "@/components/charts/comparison-chart";
import { SectionPanel } from "@/components/common/finance-ui";
import type { ExperimentResult as ExperimentResultType } from "@/types/finance";
import { ScenarioComparison } from "@/components/simulator/scenario-comparison";

export function ExperimentResult({ result }: { result: ExperimentResultType }) {
  return (
    <div className="space-y-6">
      <SectionPanel title="Combined Projection Chart" description="Projected balances across compared scenarios.">
        <ComparisonChart data={result.comparison} height={340} />
      </SectionPanel>
      <ScenarioComparison scenarios={result.scenarios} />
      <SectionPanel title="Scenario Differences" description="Trade-offs returned in the experiment result.">
        <div className="grid gap-3 md:grid-cols-3">
          {result.differences.map((difference) => (
            <div key={difference} className="rounded-md border border-border bg-panel p-4 text-sm leading-6 text-muted-foreground">
              {difference}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{result.note}</p>
      </SectionPanel>
    </div>
  );
}
