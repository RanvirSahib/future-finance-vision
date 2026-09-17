import { ArrowDown, Route as RouteIcon } from "lucide-react";
import { FinancialTrajectoryChart } from "@/components/charts/financial-trajectory-chart";
import { MetricCard, SectionPanel, ToneBadge } from "@/components/common/finance-ui";
import { formatINR } from "@/lib/formatters";
import type { ReverseResult as ReverseResultType } from "@/types/finance";

export function ReverseResult({ result }: { result: ReverseResultType }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-panel p-5 text-center">
          <p className="data-label">Target</p>
          <p className="mt-3 text-xl font-semibold text-foreground">{result.targetLabel}</p>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <ArrowDown className="size-6 rotate-[-90deg] text-primary" aria-hidden="true" />
        </div>
        <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 text-center">
          <p className="data-label">Possible path</p>
          <p className="mt-3 text-xl font-semibold text-foreground">{result.timeline}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <MetricCard label="Remaining" value={formatINR(result.remainingAmount)} helper="Backend-provided target gap" tone="warning" icon={<RouteIcon className="size-5" aria-hidden="true" />} />
        <MetricCard label="Required monthly saving" value={formatINR(result.requiredMonthlySaving)} helper="Estimated monthly contribution" tone="neutral" icon={<RouteIcon className="size-5" aria-hidden="true" />} />
      </div>
      <SectionPanel title="Possible Financial Levers" description="Displayed from backend response, not frontend advice.">
        <div className="grid gap-4 md:grid-cols-3">
          {result.levers.map((lever) => (
            <article key={lever.id} className="rounded-lg border border-border bg-panel p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">{lever.title}</h3>
                <ToneBadge tone={lever.tone}>{lever.monthlyEffect}</ToneBadge>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{lever.description}</p>
            </article>
          ))}
        </div>
      </SectionPanel>
      <SectionPanel title="Path Projection" description="Potential balance movement toward the target.">
        <FinancialTrajectoryChart data={result.projection} height={320} />
      </SectionPanel>
    </div>
  );
}
