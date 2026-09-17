import { useState } from "react";
import { FlaskConical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldLabel, SectionPanel } from "@/components/common/finance-ui";
import type { ExperimentRequest, ExperimentScenario, ScenarioType } from "@/types/finance";

const initialScenarios: ExperimentScenario[] = [
  { id: "a", name: "Scenario A", scenarioType: "buy_now", summary: "Buy Now", inputs: ["₹80,000 phone", "Immediate purchase"] },
  { id: "b", name: "Scenario B", scenarioType: "emi", summary: "EMI", inputs: ["12 months", "Recurring payment"] },
  { id: "c", name: "Scenario C", scenarioType: "save_first", summary: "Save First", inputs: ["Wait and save", "No loan"] },
];

export function ExperimentForm({ onRun, isPending }: { onRun: (request: ExperimentRequest) => void; isPending: boolean }) {
  const [scenarios, setScenarios] = useState<ExperimentScenario[]>(initialScenarios);

  function updateScenario(id: string, key: "name" | "summary", value: string) {
    setScenarios((current) => current.map((scenario) => (scenario.id === id ? { ...scenario, [key]: value } : scenario)));
  }

  function addScenario() {
    const nextNumber = scenarios.length + 1;
    setScenarios((current) => [
      ...current,
      { id: `scenario-${nextNumber}`, name: `Scenario ${String.fromCharCode(64 + nextNumber)}`, scenarioType: "custom" as ScenarioType, summary: "Custom", inputs: ["Future event"] },
    ]);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onRun({ scenarios });
  }

  return (
    <SectionPanel title="Experiment Setup" description="Compare multiple backend-generated possibilities without ranking them.">
      <form className="space-y-4" onSubmit={submit}>
        <div className="grid gap-4 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="rounded-lg border border-border bg-panel p-4">
              <p className="data-label">{scenario.name}</p>
              <div className="mt-3 space-y-3">
                <div className="space-y-2">
                  <FieldLabel htmlFor={`${scenario.id}-name`}>Name</FieldLabel>
                  <Input id={`${scenario.id}-name`} value={scenario.name} onChange={(event) => updateScenario(scenario.id, "name", event.target.value)} />
                </div>
                <div className="space-y-2">
                  <FieldLabel htmlFor={`${scenario.id}-summary`}>Scenario</FieldLabel>
                  <Input id={`${scenario.id}-summary`} value={scenario.summary} onChange={(event) => updateScenario(scenario.id, "summary", event.target.value)} />
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {scenario.inputs.map((input) => <li key={input}>• {input}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="button" variant="secondary" onClick={addScenario}>
            <Plus className="size-4" aria-hidden="true" />
            Add Scenario
          </Button>
          <Button type="submit" disabled={isPending}>
            <FlaskConical className="size-4" aria-hidden="true" />
            {isPending ? "Running Experiment..." : "Run Experiment"}
          </Button>
        </div>
      </form>
    </SectionPanel>
  );
}
