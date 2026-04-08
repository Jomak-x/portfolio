## Inspiration

We built CrisisLens after seeing how often response teams have to work across scattered spreadsheets, delayed situation reports, and disconnected dashboards. In humanitarian response, that fragmentation slows prioritization when timing matters most. We wanted to create one operational surface where **geography**, **risk**, and **funding context** stay aligned so analysts can make faster, more informed decisions.

## What It Does

CrisisLens is an **AI-assisted crisis intelligence platform** designed for country-level prioritization. It gives analysts a live command center built around an interactive **3D globe**, allowing them to inspect humanitarian risk and funding gaps in a single interface. Users can navigate by pointer, pinch, hand-tracking gestures, or voice commands, then switch between two focused workflows:

- **Genie Mode** for natural-language analytics and structured country insights
- **ML Mode** for scenario simulations, projected movements, and impact visualization

The platform can answer country-specific and cross-country questions, generate narrative summaries, surface comparative tables, and visualize modeled changes directly on the globe.

## How We Built It

We built CrisisLens as a **monorepo** that keeps product, data, and modeling workflows in one typed codebase with clear boundaries. The frontend uses **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Three.js** to power a full-screen command center and hardware-accelerated geospatial rendering. On the analytics side, we integrated **Databricks SQL Warehouse** and **Databricks Genie** so natural-language questions could be translated into useful query-backed insights. For modeling, we used a Python-based ML workspace with tools like **PyTorch**, **Pandas**, and **NumPy** to support impact simulation and quarter-by-quarter projections.

## Challenges We Ran Into

One of the biggest challenges was finding data that was both operationally useful and structurally consistent enough for country-level modeling. We also had to prevent schema drift between generated data artifacts and the frontend's typed interfaces, while keeping interaction behavior consistent across pointer, gesture, hand-tracking, and voice inputs. On top of that, we had to work around preview-rate and throughput issues on the Genie side while still keeping the interface responsive and reliable for users.

## Accomplishments We're Proud Of

We were proud to build a platform that felt genuinely operational instead of just visually impressive. We embedded **Databricks Genie** directly into the dashboard workflow, built a custom simulation engine with multi-quarter projections, and rendered impact arrows directly on the globe so users could connect model output to geography immediately. We also delivered multimodal navigation and backed unstable surfaces with both unit and end-to-end testing. Most importantly, the project earned **1st place out of 234 teams** in the **Databricks Geo-Insight Challenge** at **Hacklytics 2026**.

## What We Learned

Through CrisisLens, we learned that in crisis-tech products, contracts between **data**, **models**, and **UI** matter just as much as model quality. Typed interfaces and route-level boundaries helped us move faster with fewer integration breaks. We also learned that interaction design is critical for trust: if pointer, gesture, voice, and touch controls are inconsistent, the product feels unreliable no matter how strong the analytics are. Finally, we learned how important fallback design is when working with preview APIs and asynchronous model outputs.

## What's Next For CrisisLens

There are several directions we would love to take CrisisLens next. We want to expand voice controls beyond country targeting into full dashboard command workflows, improve observability and telemetry around Databricks and Genie integrations, and add automated model artifact validation and drift checks. Beyond that, collaboration features like shared scenarios, saved views, and annotation layers would make the platform more useful for real teams working through crisis decisions together.

## Built With

- Databricks
- Docker
- Next.js
- NumPy
- Pandas
- PyTorch
- Python
- React
- Tailwind CSS
- Three.js
- TypeScript

## Links

- [Live Demo](https://crisislens.paolini.dev)
