slAIde was built around a very simple goal: turn one block of input into a polished deliverable with as little friction as possible. We wanted a system that could take a paragraph, story, or rough concept and turn it into either a full **HTML5 slide deck** or a **LaTeX-compiled PDF** from a single prompt. For students, hackathon teams, and professionals, it was a way to go from idea to presentation-ready output in one click.

The interesting part was not just the output, but the architecture behind it. We built a backend-driven multi-agent workflow in **Python** using **Google ADK**, **A2A**, and **Gemini 2.5 Flash**, with a Host Router coordinating a sequential pipeline of specialized agents. Each stage had a distinct responsibility, and we added validation, end-to-end health checks, and timeout-plus-retry guardrails so the system would behave reliably instead of feeling like a brittle demo.

On the frontend, we used **Next.js**, **React**, and **Tailwind CSS** to wrap the system in a clean interface that made the underlying complexity feel simple. slAIde ended up being one of those projects where the final UX looked straightforward, but getting there required a lot of careful orchestration behind the scenes.

## Highlights

- **Single-prompt generation** for either HTML5 slide decks or LaTeX-compiled PDFs
- **Sequential multi-agent pipeline** built with Google ADK, A2A, and Gemini 2.5 Flash
- **Reliability guardrails** including validation, health checks, timeouts, and retries
- **Backend-first architecture** that turns raw input into polished presentation assets

## Links

- [GitHub Repo](https://github.com/Jomak-x/slAIde.git)
