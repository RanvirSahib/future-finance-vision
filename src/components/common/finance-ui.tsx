import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ImpactTone } from "@/types/finance";

export function SectionPanel({
  title,
  description,
  children,
  action,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("panel-gradient", className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 p-5">
        <div>
          <CardTitle className="text-base font-semibold text-foreground">{title}</CardTitle>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </CardHeader>
      <CardContent className="p-5 pt-0">{children}</CardContent>
    </Card>
  );
}

export function MetricCard({
  label,
  value,
  helper,
  tone = "neutral",
  icon,
}: {
  label: string;
  value: string;
  helper: string;
  tone?: ImpactTone;
  icon?: ReactNode;
}) {
  const toneClass = {
    positive: "text-success",
    warning: "text-warning",
    danger: "text-danger",
    neutral: "text-primary",
  }[tone];

  return (
    <Card className="panel-gradient transition-all duration-200 hover:border-primary/50">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="data-label">{label}</p>
            <p className={cn("mt-3 font-display text-3xl font-semibold", toneClass)}>{value}</p>
          </div>
          {icon ? <div className="rounded-md border border-border bg-panel p-2 text-muted-foreground">{icon}</div> : null}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{helper}</p>
      </CardContent>
    </Card>
  );
}

export function ToneBadge({ tone, children }: { tone: ImpactTone; children: ReactNode }) {
  if (tone === "positive") return <Badge variant="success">{children}</Badge>;
  if (tone === "warning") return <Badge variant="warning">{children}</Badge>;
  if (tone === "danger") return <Badge variant="danger">{children}</Badge>;
  return <Badge variant="outline">{children}</Badge>;
}

export function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="data-label block">
      {children}
    </label>
  );
}
