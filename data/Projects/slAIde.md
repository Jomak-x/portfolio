## Inspiration

With our team's recent experience at hackathons like **ShellHacks** and **SASE Hack**, we felt motivated to build something using **Google's ADK** and **A2A**. AI had such a strong presence in many of the challenge tracks at those events, and we wanted to push ourselves to experiment with those technologies directly. As we discussed possible applications, we landed on the idea of **PDF and presentation generation**, agreeing that a tool like this could save students and professionals hours of work.

## What It Does

Users can input a paragraph, story, summary, or other block of text and ask the agent to generate either a **presentation** or a **PDF**. With the click of a button, and a short wait, **slAIde** produces a polished result for the user. The platform can generate full **HTML5 slide decks** with navigation and styling, as well as **LaTeX-based PDF summaries**, all from a single prompt.

## How We Built It

We used **Python** to build a **sequential multi-agent pipeline**, where a set of agents worked together to transform user input into a finished deliverable. The system included a **Host Router**, a **Presentation Agent** for HTML slide generation, and a **Summary Agent** for LaTeX-to-PDF output. The presentation flow translated text into slide topics, chose a theme, generated slide content, and then rendered a complete navigable **HTML5 slideshow**. Alongside the backend, we also built a polished frontend using **Next.js**, **React**, and **Tailwind CSS**.

## Challenges We Ran Into

Most of our challenges came from the time pressure of the hackathon, combined with our decision to experiment with several new technologies at once. One of the biggest hurdles was implementing **A2A** and **ADK** effectively in the app. Since these tools were still relatively new, documentation was limited, and getting them working together cost our team well over **24 hours** of experimentation and debugging. We also had to add output validation, health checks, and timeout/retry guardrails to make the multi-agent flow reliable enough for demos.

## Accomplishments We're Proud Of

The biggest accomplishment is simple: **it works**. More specifically, we're proud that we successfully implemented not just **ADK**, but also **A2A** into the generation pipeline and built a backend-driven system that can turn a single prompt into either a slide deck or a PDF. We're also proud of how we incorporated **microphone input**, allowing users to speak what they want to generate rather than only typing it manually.

## What We Learned

Through building slAIde, we learned how **ADK** and **A2A** work and how multiple agents can collaborate cohesively to complete a task. We also learned how to integrate **speech recognition** into a practical workflow for content generation. On the frontend side, we became much more comfortable with **React** and **Tailwind CSS**, and by the end of the project we were able to build a UI we were genuinely happy with.

## What's Next For slAIde

We have several ideas we would love to add in the future but couldn't fully implement during the hackathon. One of the biggest next steps is support for **drag-and-drop audio and video files**, such as **mp3** and **mp4**, so the app can transcribe and parse spoken content before generating the requested output.

## Built With

- A2A
- ADK
- CSS
- Gemini 2.5 Flash
- HTML
- JavaScript
- LaTeX
- Next.js
- Python
- React
- RPC
- Tailwind CSS
- TypeScript

## Links

- [GitHub Repo](https://github.com/Jomak-x/slAIde.git)
