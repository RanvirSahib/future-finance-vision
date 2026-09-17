# Future Finance Vision

You are the lead product designer and frontend engineer for a hackathon project called MONEY LENS.

============================================================

1. PRODUCT IDENTITY

============================================================

PRODUCT NAME:

Money Lens

PRODUCT CATEGORY:

AI-powered personal finance / financial future simulation / fintech.

TAGLINE:

"See your financial future before you make today's decision."

CORE IDEA:

Most financial applications primarily tell users what happened to their money.

Money Lens is different.

Money Lens allows a user to explore how a financial decision could affect their future.

The core product loop is:

ANALYZE

    ↓

SIMULATE

    ↓

UNDERSTAND

    ↓

ADJUST

    ↓

ACHIEVE

The product should help users answer questions such as:

- "What happens if I buy this now?"

- "What happens if I take EMI?"

- "What happens if I wait and save?"

- "When can I afford this without a loan?"

- "How much do I need to save every month?"

- "What happens if my salary increases?"

- "What happens if I receive a bonus?"

- "What happens if my expenses increase?"

- "Which future scenario gives me more financial flexibility?"

- "What upcoming expenses could affect my cash flow?"

IMPORTANT:

Money Lens is NOT a generic chatbot.

It is a visual financial simulation and decision-support application.

AI is an intelligence layer inside the product.

The main product experience is:

financial data → simulation → visualization → comparison → understanding.

============================================================

2. HACKATHON CONTEXT

============================================================

This project is being developed for the AWS First Commit hackathon.

The final application will use AWS services.

Expected AWS architecture:

- Amazon Bedrock → AI/Natural Language layer

- Amazon RDS for PostgreSQL → production database

- Amazon S3 → statement/file storage where required

- AWS Lambda/API services → backend/background workloads where appropriate

- AWS hosting services → deployment

- Amazon CloudWatch → monitoring/logging

The frontend should be designed so that it can communicate with a separate Python backend.

============================================================

3. TEAM RESPONSIBILITIES

============================================================

There are two developers working on the project.

MY RESPONSIBILITY:

- Frontend

- Frontend architecture

- Database integration

- UI/UX

- API integration

MY FRIEND'S RESPONSIBILITY:

- Python backend

- Financial backend logic

- Amazon Bedrock

- AI/Natural Language Processing

- AI explanations

- Backend/database APIs

Therefore:

THE FRONTEND MUST NOT IMPLEMENT AUTHORITATIVE FINANCIAL CALCULATIONS.

The backend is the source of truth.

The frontend should:

- collect user input

- call APIs

- display backend results

- visualize financial projections

- provide navigation

- provide loading states

- provide error states

- provide empty states

- provide responsive UX

The backend should:

- calculate financial projections

- calculate goals

- calculate reverse planning

- process transactions

- access PostgreSQL

- communicate with Bedrock

- return structured JSON

============================================================

4. CRITICAL ARCHITECTURAL RULE

============================================================

NEVER put authoritative financial calculations inside React components.

DO NOT calculate:

income - expenses

EMI

savings

projected balance

goal completion

goal delay

financial risk

inside UI components.

Instead:

USER

 ↓

FRONTEND

 ↓

API

 ↓

PYTHON BACKEND

 ↓

DATABASE / FINANCIAL ENGINE / BEDROCK

 ↓

STRUCTURED JSON

 ↓

FRONTEND

 ↓

VISUALIZATION

The frontend is a presentation and interaction layer.

============================================================

5. PRIMARY PRODUCT EXPERIENCE

============================================================

The primary experience is the FINANCIAL TIME MACHINE.

Example user:

Monthly income:

₹55,000

Monthly expenses:

₹25,000

Current savings:

₹40,000

User says:

"I want to buy an ₹80,000 phone."

Money Lens should allow the user to explore:

1. Buy Now

2. EMI

3. Save First

4. Custom Scenario

The application then shows a projected financial trajectory.

Example:

MONTH 1

MONTH 2

MONTH 3

...

MONTH 12

For each scenario, the backend may return:

- income

- expenses

- additional payment

- savings

- projected balance

- lowest projected balance

- goal impact

- other relevant metrics

The frontend visualizes this information.

Use cautious language:

"Projected"

"Estimated"

"Potential"

"Possible impact"

"Scenario"

Do NOT present simulations as guaranteed future outcomes.

============================================================

6. CORE FEATURES

============================================================

The frontend must support these five major features.

FEATURE 1:

FINANCIAL TIME MACHINE

FEATURE 2:

GOAL ENGINE

FEATURE 3:

REVERSE TIME MACHINE

FEATURE 4:

EXPERIMENT LAB

FEATURE 5:

FINANCIAL RADAR

============================================================

7. APPLICATION ROUTES

============================================================

Create/maintain these routes:

/

Landing / introduction

/dashboard

Main financial dashboard

/simulator

Financial Time Machine

/goals

Goal Engine

/reverse

Reverse Time Machine

/experiments

Experiment Lab

/radar

Financial Radar

============================================================

8. LANDING PAGE

============================================================

The landing page should communicate the product immediately.

Hero:

MONEY LENS

"See your financial future before you make today's decision."

Supporting text:

"Explore how today's financial decisions could change your financial future."

Primary CTA:

"Explore Your Future"

Secondary CTA:

"See How It Works"

Visual concept:

A subtle financial trajectory moving from:

TODAY

to

POSSIBLE FUTURE

Do NOT make this a generic AI landing page.

Do NOT put a giant chatbot in the hero.

Do NOT use stock photos of money, wallets, coins, businessmen, etc.

Use product UI and financial visualization as the visual language.

Below the hero, show the five core capabilities:

Financial Time Machine

Goal Engine

Reverse Time Machine

Experiment Lab

Financial Radar

============================================================

9. MAIN APPLICATION SHELL

============================================================

Once inside the application, use a professional dashboard shell.

Desktop:

LEFT SIDEBAR

+

TOP HEADER

+

MAIN CONTENT

Sidebar navigation:

MONEY LENS

Overview

Time Machine

Goals

Reverse

Experiments

Radar

Optional lower navigation:

Settings

The active page must be visually obvious.

Sidebar should be:

- dark

- compact

- professional

- minimal

- responsive

Mobile:

Use a drawer or bottom navigation.

============================================================

10. VISUAL DESIGN DIRECTION

============================================================

IMPORTANT:

The current light theme is NOT desired.

Use a DARK-FIRST PREMIUM FINTECH DESIGN.

The product should feel like:

- premium fintech

- financial intelligence terminal

- modern data analytics

- futuristic but trustworthy

- professional financial software

Think:

"financial command center"

NOT:

- generic SaaS template

- generic AI dashboard

- crypto exchange

- gaming interface

- cyberpunk interface

- children's finance application

- overly colorful banking application

============================================================

11. COLOR SYSTEM

============================================================

Use a deep navy / near-black foundation.

Suggested design tokens:

BACKGROUND:

#050B14

SECONDARY BACKGROUND:

#07101D

CARD:

#0B1422

ELEVATED CARD:

#101B2D

BORDER:

#1B2A3D

PRIMARY:

#38BDF8

SECONDARY:

#22D3EE

PRIMARY TEXT:

#F8FAFC

SECONDARY TEXT:

#94A3B8

MUTED TEXT:

#64748B

SUCCESS:

#34D399

WARNING:

#FBBF24

DANGER:

#F87171

Do not use bright colors everywhere.

Use blue/cyan primarily for:

- primary CTA

- selected navigation

- interactive elements

- chart emphasis

- important controls

Use green for:

- positive financial outcomes

- expected income

- healthy progress

Use amber for:

- warnings

- upcoming financial pressure

- attention states

Use red for:

- serious negative scenarios

- critical warnings

Most of the interface should remain dark and restrained.

============================================================

12. BACKGROUND

============================================================

Use a deep navy/black background.

A very subtle radial blue glow or grid may be used.

However:

DO NOT use:

- huge gradients

- animated backgrounds

- excessive blur

- neon cyberpunk effects

- particles

- distracting motion

The financial data must remain the visual focus.

============================================================

13. TYPOGRAPHY

============================================================

Use a modern professional sans-serif font.

Suggested hierarchy:

Hero:

48–64px

Page title:

32–40px

Section title:

20–24px

Metric:

28–36px

Body:

14–16px

Metadata:

12–13px

Use semibold typography for important metrics.

Avoid excessive bold text.

Use uppercase small labels where appropriate:

CURRENT SAVINGS

MONTHLY INCOME

PROJECTED BALANCE

LOWEST BALANCE

============================================================

14. CARDS

============================================================

Cards should feel like professional financial analytics panels.

Use:

- dark surface

- subtle border

- moderate radius

- subtle shadow

- clear spacing

Suggested radius:

8–14px.

Do not use excessively rounded "bubble" cards.

Avoid making every component look like a floating pill.

============================================================

15. BUTTONS

============================================================

Primary button:

Blue/cyan.

Example:

[ SIMULATE FUTURE ]

Secondary:

Dark surface with subtle border.

Example:

[ COMPARE SCENARIOS ]

Ghost:

Transparent with muted text.

Buttons should have moderate corner radius.

Avoid excessive pill-shaped buttons.

Use subtle hover/focus transitions.

============================================================

16. DASHBOARD

============================================================

Route:

/dashboard

This is the user's financial command center.

Top:

Good evening.

"Here's how your financial future is looking."

Then financial summary cards:

CURRENT SAVINGS

₹40,000

MONTHLY INCOME

₹55,000

MONTHLY EXPENSES

₹25,000

ACTIVE GOALS

2

These values must come from API/mock data.

Do not hardcode business logic inside UI.

============================================================

17. FINANCIAL TRAJECTORY

============================================================

The dashboard should contain a large:

FINANCIAL TRAJECTORY

chart.

The chart should show projected balance over time.

Requirements:

- dark chart panel

- subtle grid

- clean axes

- blue/cyan line

- hover tooltip

- month labels

- responsive

- milestone markers where useful

Do not use unnecessary chart decoration.

The chart should communicate:

"Where could my financial balance go?"

============================================================

18. QUICK ACTIONS

============================================================

Create four prominent actions:

SIMULATE A DECISION

PLAN A GOAL

WORK BACKWARDS

COMPARE SCENARIOS

Each should include:

- icon

- title

- one-line explanation

- hover interaction

Example:

SIMULATE A DECISION

"See how today's choice could affect your future."

============================================================

19. DASHBOARD RADAR PREVIEW

============================================================

Show a small preview of upcoming financial events.

Example:

FINANCIAL RADAR

Salary expected

+₹55,000

8 days

Rent

-₹15,000

5 days

Subscriptions

-₹1,899

8 days

Click:

"View full radar"

→ /radar

============================================================

20. GOALS PREVIEW

============================================================

Show active goals.

Example:

EMERGENCY FUND

₹40,000 / ₹1,00,000

Progress bar

40%

Target:

June 2027

Use elegant progress indicators.

============================================================

21. FINANCIAL TIME MACHINE

============================================================

Route:

/simulator

This is the most important feature.

Header:

FINANCIAL TIME MACHINE

"Explore how today's decision could change your financial future."

Main input:

WHAT ARE YOU CONSIDERING?

Example:

"I want to buy an ₹80,000 phone."

Primary CTA:

[ SIMULATE FUTURE ]

Scenario choices:

BUY NOW

EMI

SAVE FIRST

CUSTOM

============================================================

22. SIMULATION INPUT

============================================================

Support structured parameters when required:

Purchase amount

Financing type

Duration

Interest rate if provided by backend

Additional income

Additional expense

Optional event

Do not independently calculate EMI in frontend.

The backend returns authoritative values.

============================================================

23. SIMULATION RESULTS

============================================================

After simulation, show:

PROJECTED FINANCIAL FUTURE

Key metrics:

MONTHLY IMPACT

LOWEST PROJECTED BALANCE

PROJECTED SAVINGS

POTENTIAL GOAL IMPACT

Then a large trajectory chart.

Then scenario comparison.

============================================================

24. SCENARIO COMPARISON

============================================================

Show:

BUY NOW

EMI

SAVE FIRST

Each scenario card should show:

Projected balance

Monthly impact

Goal impact

Relevant timeline information

Example:

BUY NOW

Immediate purchase

Projected lowest balance:

₹40,000

EMI

Monthly payment:

₹6,667

SAVE FIRST

Delayed purchase

Higher projected balance

Do not label a scenario as universally "best."

The application should inform the user about trade-offs.

============================================================

25. GOAL ENGINE

============================================================

Route:

/goals

Users should be able to:

- view goals

- create goals

- update goals

- track progress

- view target date

- view required contributions

- inspect goal impact from scenarios

Goal creation form:

Goal name

Target amount

Current amount

Target date

Monthly contribution if applicable

CTA:

[ CREATE GOAL ]

============================================================

26. REVERSE TIME MACHINE

============================================================

Route:

/reverse

Concept:

Instead of starting with today's decision, start with the desired future.

Example:

TARGET

₹1,00,000

BY

March 2027

Current savings:

₹40,000

CTA:

[ CALCULATE PATH ]

Result:

REMAINING

₹60,000

REQUIRED MONTHLY SAVING

₹10,000

Then show backend-provided possible financial levers.

Example:

Expense reduction

Additional income

Savings contribution

Do not invent recommendations on the frontend.

Display what the backend provides.

Visual flow:

TARGET

↓

REQUIRED CHANGE

↓

POSSIBLE PATH

============================================================

27. EXPERIMENT LAB

============================================================

Route:

/experiments

This is the scenario comparison laboratory.

Allow users to compare multiple scenarios.

Example:

SCENARIO A

Buy Now

SCENARIO B

EMI

SCENARIO C

Save First

Each scenario may contain:

Purchase

Income

Expenses

Bonus

EMI

Additional savings

Future event

CTA:

[ ADD SCENARIO ]

Then:

[ RUN EXPERIMENT ]

Display:

- comparison cards

- metrics

- combined projection chart

- scenario differences

Do not rank scenarios as "best."

Show trade-offs.

============================================================

28. FINANCIAL RADAR

============================================================

Route:

/radar

Show upcoming events:

UPCOMING EXPENSES

EXPECTED INCOME

RECURRING PAYMENTS

POTENTIAL CASH-FLOW PRESSURE

Each event:

Date

Description

Amount

Category

Status/severity

Example:

Rent

₹15,000

Due in 5 days

Potential cash-flow pressure

Use cautious language.

Never claim that an uncertain projection is guaranteed.

============================================================

29. TRANSACTIONS

============================================================

The frontend should be designed so transaction data can later be displayed.

A transaction table can include:

Date

Description

Merchant

Category

Amount

Type

Use:

INCOME

EXPENSE

with appropriate visual distinction.

This can initially be a dashboard component or future route.

Do not create unnecessary navigation if the backend is not ready.

============================================================

30. COMPONENT ARCHITECTURE

============================================================

Use reusable components.

Recommended:

components/

├── ui/

├── layout/

├── dashboard/

├── simulator/

├── goals/

├── reverse/

├── experiments/

├── radar/

└── charts/

Generic UI:

Button

Card

Badge

Input

Select

Progress

Skeleton

Modal

Tooltip

EmptyState

ErrorState

Layout:

AppShell

Sidebar

Header

MobileNav

PageContainer

Dashboard:

FinancialSummary

FinancialTrajectory

QuickActions

RadarPreview

GoalsPreview

Simulator:

ScenarioInput

ScenarioTypeSelector

ScenarioParameters

SimulationSummary

SimulationChart

ScenarioComparison

SimulationInsight

Goals:

GoalCard

GoalList

GoalForm

GoalProgress

Reverse:

ReverseGoalForm

RequiredSavingsCard

ActionBreakdown

Experiments:

ExperimentCard

ExperimentForm

ScenarioSelector

ComparisonChart

ExperimentResult

Radar:

RadarCard

UpcomingEvent

CashFlowAlert

RadarTimeline

============================================================

31. CHART ARCHITECTURE

============================================================

Centralize charts.

Create:

components/charts/

FinancialTrajectoryChart

SimulationChart

ComparisonChart

GoalProgressChart

CashFlowChart

Charts receive data as props.

Charts do not fetch API data directly.

Example:

<SimulationChart data={projection} />

The hook/API layer provides the data.

============================================================

32. API ARCHITECTURE

============================================================

Create a centralized API layer.

Recommended:

lib/api/

├── client.ts

├── dashboard.ts

├── simulations.ts

├── goals.ts

├── radar.ts

└── experiments.ts

Do not scatter fetch() calls throughout page components.

Use:

NEXT_PUBLIC_API_URL

Example development:

NEXT_PUBLIC_API_URL=http://localhost:8000

Production will point to the deployed backend.

============================================================

33. API CONTRACT

============================================================

Expected API endpoints:

GET /api/v1/dashboard

GET /api/v1/transactions

POST /api/v1/simulations

GET /api/v1/simulations/{id}

GET /api/v1/goals

POST /api/v1/goals

PATCH /api/v1/goals/{id}

DELETE /api/v1/goals/{id}

POST /api/v1/reverse

GET /api/v1/radar

POST /api/v1/experiments

POST /api/v1/ai/parse

These contracts may evolve as the Python backend is developed.

Do not invent incompatible APIs.

============================================================

34. AI INTEGRATION

============================================================

The friend is implementing:

Python backend

+

Amazon Bedrock

The frontend should NOT directly call Bedrock.

Correct architecture:

USER

 ↓

NEXT.JS

 ↓

PYTHON BACKEND

 ↓

BEDROCK

 ↓

STRUCTURED RESPONSE

 ↓

PYTHON BACKEND

 ↓

NEXT.JS

 ↓

UI

Example:

User:

"I want to buy an 80000 rupee phone on EMI for 12 months."

Backend/AI may return:

{

  "scenario_type": "purchase",

  "purchase_amount": 80000,

  "financing_type": "emi",

  "duration_months": 12

}

The frontend then uses the structured response.

Do not expose AWS credentials in the frontend.

Never place:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_SESSION_TOKEN

in client-side code.

============================================================

35. TYPESCRIPT TYPES

============================================================

Create strict types for:

FinancialSummary

ProjectionPoint

Transaction

Goal

SimulationRequest

SimulationResult

Scenario

RadarEvent

RadarAlert

Experiment

API response

Example:

interface FinancialSummary {

  currentSavings: number;

  monthlyIncome: number;

  monthlyExpenses: number;

  activeGoals: number;

}

Example:

interface ProjectionPoint {

  month: string;

  income: number;

  expenses: number;

  savings: number;

  balance: number;

}

Do not use 'any' unless absolutely unavoidable.

============================================================

36. HOOKS

============================================================

Use hooks for API/server state.

Recommended:

useDashboard()

useSimulation()

useGoals()

useRadar()

useExperiments()

The hooks should expose:

data

loading

error

actions/mutations

Pages should remain primarily compositional.

============================================================

37. SERVER STATE

============================================================

If appropriate, use TanStack Query for:

- fetching

- caching

- mutations

- loading

- errors

- refetching

Do not introduce Redux unless there is a genuine need.

Use React state for local UI state.

============================================================

38. MOCK MODE

============================================================

Because the Python backend is being developed separately, support mock mode.

Environment:

NEXT_PUBLIC_USE_MOCK_DATA=true

When true:

Frontend uses realistic mock financial data.

When false:

Frontend calls the real API.

Mock data should resemble realistic Indian personal-finance data.

Example:

Monthly income:

₹55,000

Monthly expenses:

₹25,000

Current savings:

₹40,000

Goal:

₹1,00,000

Do not present mock data as a real user's financial data.

Label demo/sample data appropriately if necessary.

============================================================

39. LOADING STATES

============================================================

Every API-driven feature must have a loading state.

Examples:

"Loading your financial overview..."

"Simulating your future..."

"Calculating your goal path..."

Use skeleton loaders where appropriate.

Do not leave blank areas during loading.

============================================================

40. ERROR STATES

============================================================

Errors must be human-readable.

Example:

"Something went wrong while simulating this scenario."

[ Try Again ]

Do not expose raw:

500 Internal Server Error

to the user.

============================================================

41. EMPTY STATES

============================================================

Example:

NO GOALS YET

"Create your first financial goal and start planning your future."

[ CREATE GOAL ]

============================================================

42. CURRENCY

============================================================

The application targets Indian users.

Use INR.

All currency should be formatted consistently:

₹40,000

₹1,00,000

₹5,50,000

Create/use a centralized currency formatter.

Do not manually format currency differently across components.

============================================================

43. DATE FORMATTING

============================================================

Use centralized date formatting.

Examples:

17 Sep 2026

1 Oct 2026

December 2026

Avoid inconsistent date formatting.

============================================================

44. RESPONSIVE DESIGN

============================================================

Must work on:

Desktop

Laptop

Tablet

Mobile

Desktop:

persistent sidebar.

Tablet:

compact navigation.

Mobile:

drawer or bottom navigation.

Charts must remain readable.

Cards must stack properly.

Forms must remain usable.

Do not simply shrink the desktop layout.

============================================================

45. ACCESSIBILITY

============================================================

Use:

semantic HTML

keyboard navigation

visible focus states

accessible labels

aria attributes where appropriate

sufficient color contrast

Do not communicate important information through color alone.

============================================================

46. MICRO-INTERACTIONS

============================================================

Use subtle animation.

Hover:

slight border highlight

slight elevation

subtle background transition

Buttons:

150–250ms transitions

Charts:

smooth tooltip transitions

Navigation:

subtle active state transition

Avoid:

bouncing

spinning

excessive animation

large scaling effects

background particle animations

This is a financial product.

The interface should communicate precision.

============================================================

47. FINANCIAL LANGUAGE

============================================================

Use careful language.

Prefer:

Projected

Estimated

Potential

Possible

Expected

Scenario

Forecast

Avoid:

Guaranteed

Certain

You WILL

Definitely

This is especially important for future simulations.

============================================================

48. USER AGENCY

============================================================

Money Lens should INFORM users rather than make decisions for them.

Do not write:

"YOU SHOULD BUY THIS."

Instead:

"Under this scenario, your projected balance decreases by X."

Or:

"This scenario results in a projected goal delay of X months."

The application presents trade-offs.

The user makes the decision.

============================================================

49. DATA VISUALIZATION PRINCIPLES

============================================================

Every chart must communicate something useful.

Avoid decorative charts.

Prioritize:

Projected balance

Monthly cash flow

Savings trajectory

Goal progress

Scenario comparison

Upcoming financial events

Use:

clean grid

clear labels

meaningful tooltips

restrained colors

responsive design

============================================================

50. SECURITY

============================================================

Never expose secrets.

Never put AWS credentials in frontend code.

Never put database credentials in frontend code.

Never hardcode production API keys.

Use environment variables.

Client-side variables must only contain values safe to expose publicly.

============================================================

51. PERFORMANCE

============================================================

Avoid unnecessary dependencies.

Use lazy loading where appropriate.

Optimize large components.

Do not fetch the same data repeatedly.

Cache server data where appropriate.

Charts should not cause unnecessary re-renders.

============================================================

52. CODE QUALITY

============================================================

Use:

TypeScript

strict typing

reusable components

clear file names

small components

feature-based organization

centralized API layer

centralized formatters

centralized design tokens

No duplicated business logic.

No financial calculations in UI.

No random fetch calls.

No hardcoded production URLs.

No secrets.

============================================================

53. PROJECT STRUCTURE

============================================================

Target structure:

frontend/

│

├── public/

│

├── src/

│   │

│   ├── app/

│   │   ├── layout.tsx

│   │   ├── page.tsx

│   │   ├── globals.css

│   │   │

│   │   ├── dashboard/

│   │   ├── simulator/

│   │   ├── goals/

│   │   ├── reverse/

│   │   ├── experiments/

│   │   └── radar/

│   │

│   ├── components/

│   │   ├── ui/

│   │   ├── layout/

│   │   ├── dashboard/

│   │   ├── simulator/

│   │   ├── goals/

│   │   ├── reverse/

│   │   ├── experiments/

│   │   ├── radar/

│   │   └── charts/

│   │

│   ├── hooks/

│   │

│   ├── lib/

│   │   ├── api/

│   │   ├── mock/

│   │   ├── formatters/

│   │   ├── constants/

│   │   └── utils/

│   │

│   ├── types/

│   │

│   └── config/

│

├── .env.example

├── .env.local

├── package.json

├── tsconfig.json

└── next.config.ts

Preserve the existing project structure where possible.

Do not reorganize the entire project unnecessarily.

============================================================

54. IMPORTANT: DO NOT OVERBUILD

============================================================

Do not build unnecessary features.

Do not add:

- cryptocurrency

- stock trading

- investment marketplace

- insurance marketplace

- loans marketplace

- social network

- financial news

- generic chatbot

- unnecessary authentication flows

- unnecessary settings

- unnecessary admin dashboard

Focus on Money Lens.

============================================================

55. DEMO-FIRST DESIGN

============================================================

The application must work extremely well for this demo:

USER PROFILE:

Monthly income:

₹55,000

Monthly expenses:

₹25,000

Current savings:

₹40,000

USER:

"I want to buy an ₹80,000 phone."

FLOW:

Dashboard

 ↓

Financial Time Machine

 ↓

Enter purchase

 ↓

Compare:

Buy Now

EMI

Save First

 ↓

12-month financial projection

 ↓

Show projected balance

 ↓

Show monthly impact

 ↓

Show potential goal impact

 ↓

Go to Goal Engine

 ↓

Set target

 ↓

Reverse Time Machine

 ↓

Experiment with salary/bonus/expenses

 ↓

Financial Radar

This complete flow should feel cohesive.

============================================================

56. DESIGN QUALITY BAR

============================================================

The application should look like a professional fintech startup product.

Do not produce a generic AI-generated dashboard.

Avoid:

- excessive rounded cards

- random gradients

- random icons

- huge empty spaces

- excessive glassmorphism

- inconsistent colors

- inconsistent spacing

- inconsistent typography

- decorative charts

- giant hero sections inside every page

Prioritize:

- hierarchy

- information density

- readability

- financial context

- data visualization

- consistency

- trust

- responsiveness

============================================================

57. IMPLEMENTATION PROCESS

============================================================

DO NOT generate everything blindly in one step.

First inspect the existing project.

Then implement in this order:

PHASE 1:

Global design system

AppShell

Sidebar

Header

Typography

Colors

UI primitives

PHASE 2:

Dashboard

Financial summary

Financial trajectory

Quick actions

Goals preview

Radar preview

PHASE 3:

Financial Time Machine

Scenario input

Scenario selector

Simulation results

Projection chart

Scenario comparison

PHASE 4:

Goal Engine

PHASE 5:

Reverse Time Machine

PHASE 6:

Experiment Lab

PHASE 7:

Financial Radar

PHASE 8:

API integration

PHASE 9:

Responsive polish

PHASE 10:

Accessibility

Performance

Build verification

============================================================

58. BEFORE MODIFYING ANYTHING

============================================================

Inspect the current project.

Identify:

- current framework

- current package.json

- current routes

- current components

- current API layer

- current mock layer

- current types

- current styling system

DO NOT overwrite working architecture.

Reuse existing code where appropriate.

============================================================

59. GIT SAFETY

============================================================

This project is connected to GitHub.

Do not delete the repository.

Do not create another repository.

Do not remove existing working files unless necessary.

Before major architectural changes, explain what will change.

Keep changes organized by feature.

============================================================

60. FINAL ACCEPTANCE CRITERIA

============================================================

The frontend is considered successful when:

1. The application has a premium dark fintech visual identity.

2. The landing page clearly communicates Money Lens.

3. Dashboard works with mock data.

4. Financial Time Machine is visually complete.

5. Goals page works with mock data.

6. Reverse Time Machine is visually complete.

7. Experiment Lab is visually complete.

8. Financial Radar is visually complete.

9. All pages are responsive.

10. API integration is centralized.

11. Mock mode works.

12. TypeScript is strongly typed.

13. No financial calculations are performed authoritatively in UI.

14. No secrets exist in frontend code.

15. Loading states exist.

16. Error states exist.

17. Empty states exist.

18. Charts are responsive.

19. Accessibility basics are implemented.

20. Production build succeeds.

Run:

npm run build

There must be:

ZERO TypeScript errors.

ZERO build errors.

============================================================

61. FINAL PRODUCT EXPERIENCE

============================================================

The final experience should communicate:

"I can see what might happen to my finances before I make a decision."

The user should be able to move naturally through:

DASHBOARD

   ↓

SIMULATE

   ↓

COMPARE

   ↓

UNDERSTAND

   ↓

SET GOAL

   ↓

WORK BACKWARDS

   ↓

EXPERIMENT

   ↓

MONITOR

The product should feel cohesive rather than like six unrelated pages.

============================================================

62. FINAL INSTRUCTION

============================================================

Build Money Lens as a polished, production-quality hackathon frontend.

Preserve the existing architecture.

Do not replace working functionality unnecessarily.

Do not make financial decisions for the user.

Do not calculate authoritative financial results in the frontend.

Do not expose secrets.

Do not turn the product into a generic chatbot.

Make the product feel like a premium financial future simulation platform.

The most important screen is the Financial Time Machine.

The most important visual element is the financial trajectory.

The most important design principle is:

"Show the user possible futures, not generic financial advice."

Start by inspecting the existing project, then implement the design systematically.

Build the frontend against the following architecture and API contracts.

you can also do the modifications if you want

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d93213e9-1deb-4ac8-9f1f-36572de4596f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
