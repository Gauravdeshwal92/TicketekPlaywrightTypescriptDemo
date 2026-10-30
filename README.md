# Playwright TypeScript Tests

End-to-end tests for the Ticketek checkout flow.

## System requirements

-Node.js: v18.x or higher (LTS recommended)
-npm: v9.x or higher

## Setup

- npm install
- npx playwright install --with-deps chromium

Create a `.env` file in the project root:

```dotenv
SHOW_URL=https://your-test-environment/show
LOGIN_API_URL=https://your-test-environment/login
username=your-test-account-email
password=your-test-account-password
```

## Running Tests

`Run checkout test suite (uses tests/checkoutFlow.spec.ts)`:
- npm run checkout

`Run smoke tests:`
- npm run test:smoke

`Run checkout suite and automatically open Allure report`:
- npm run test:checkout:allure

## Viewing Reports

The `allure-results` folder is cleared automatically once before each Playwright run.

`Serve Allure report directly:`
- npm run allure:serve


`Generate and view static Allure report:`
- npm run allure:generate
- npm run allure:open

`Open built-in Playwright HTML report:`
- npx playwright show-report

## Folder structure:-

PlaywrightTypescript/
├── allure-results/                # Generated Allure raw test metrics & artifacts
├── config/
│   └── environment.ts             # Centralized environment configs & URL mapping
├── fixtures/
│   └── testFixture.ts             # Custom test fixtures & POManager dependency injection
├── pages/                         # Page Object Model 
│   ├── checkoutPage.ts            # Basket item verification, delivery selection, terms agreement
│   ├── confirmPage.ts             # Order confirmation, reference IDs, status assertions
│   ├── loginPage.ts               # User authentication & session state capture
│   ├── POManager.ts               # Centralized Page Object orchestrator
│   ├── seatMapPage.ts             # section & seat picker if any
│   ├── selectTicketCategories.ts  # Ticket type isolation, pricing rows, quantity steppers
│   └── showPage.ts                # Event details, date picker, performance selection
├── playwright-report/             # Static HTML report artifacts
├── test-results/                  # Traces, failure screenshots, and execution videos
├── tests/
│   └── checkoutFlow.spec.ts       # End-to-end checkout & booking journey test specs
├── .env                           # Local environment variables & secrets
├── .gitignore                     # Git exclusion rules
├── package.json                   # Project scripts and dependencies
├── package-lock.json              # Pinned dependency tree
├── playwright.config.ts           # Central Playwright engine configuration
├── README.md                      # Framework architecture & technical documentation
└── tsconfig.json                  # TypeScript compiler configuration


## Architecture Defense & Design Decisions

1. Page Object Model (POM) & Fixture Injection

`Separation of Concerns: `

Test specifications in tests/checkoutFlow.spec.ts contain purely declarative scenario steps and business logic. DOM interactions, selector logic, and component synchronization are encapsulated across distinct page models in pages/.

`Dependency Injection via fixtures/testFixture.ts: `

Instead of instantiating individual page objects in every test file (new ShowPage(page), new CheckoutPage(page)), custom fixtures extend Playwright's base test. The POManager (Page Object Manager) is injected directly into test scopes, enabling lazy-loaded, single-instance page access throughout the test lifecycle. 

`Granular Component Boundaries:`

 Pages are split by functional context (showPage.ts, selectTicketCategories.ts, seatMapPage.ts, checkoutPage.ts, confirmPage.ts, and loginPage.ts), ensuring high maintainability when individual stages of the purchase funnel undergo UI refactoring.  

2. Zero Arbitrary Sleeps 


## Locator strategy

1) getByRole (Highest Priority): Targets semantic HTML and ARIA roles (button, combobox, heading, listitem). Handles text normalization and reflects how assistive tech and real users perceive the interface.

Example: Form submit inputs (<input type="submit" value="Go to checkout">) are targeted via getByRole('button', { name: 'Go to checkout' }).

2) getByLabel / getByPlaceholder: Used for accessible form inputs and standard form controls.

3) getByText / Scoped Filters: Used when semantic roles are absent (e.g., custom category labels, chip selectors). Scoped strictly within parent semantic boundaries (e.g., .filter({ has: ... })) to avoid strict-mode collisions.

4) Clean Semantic CSS / Data Attributes: Reserved for container boundaries (ul.seatArea, .selectTktBlock) when structural layout containers lack native ARIA roles.