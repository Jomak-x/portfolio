## Inspiration

FocusForge started with a simple question: **what am I really doing with my time?** Inspired by time-audit and accountability methods, the goal was to build something that did more than just run a timer. We wanted a tool that could make work sessions visible, encourage honest reflection, and help users improve intentionally over time.

## What It Does

FocusForge is an **AI-powered Chrome extension** for focused work and study sessions. Users can create a custom session, work for a chosen time interval, and log what they actually did at the end of each block. Once the session ends, the extension generates a final report, asks reflection questions, and uses **Gemini** to provide personalized productivity feedback and improvement suggestions.

## How We Built It

We built FocusForge as a **Chrome extension** using **JavaScript, HTML, and CSS**, with background scripts, alarms, storage, and notifications handling the session flow. Users can choose timer lengths between **1 and 60 minutes**, and each interval prompt is logged using the **Chrome Storage API**. On top of that workflow, we integrated the **Gemini API** to analyze user reflections and generate actionable advice after multiple session iterations. The overall interface was designed in **Figma** and translated into a polished extension UI with consistent theming.

## Challenges We Ran Into

One of the biggest challenges was learning Chrome extension development quickly. We had to understand how **background scripts**, **messaging**, **popups**, **storage**, and **timing** work together in a very short period of time. We also had to strike the right balance between being useful and being disruptive, since session prompts need to be noticeable without becoming annoying. On top of that, we spent time refining the UI to match our Figma vision and tuning AI prompts so the feedback felt genuinely useful instead of generic.

## Accomplishments We're Proud Of

We were proud to ship a complete productivity loop: **log -> review -> reflect -> improve**. The extension successfully tracked session activity, generated a final report, and incorporated **Gemini-powered advice** as a stretch feature. We were also happy with the polish of the UI, the consistency of the theming, and the fact that the app felt like a real, usable productivity tool despite being built under hackathon time pressure.

## What We Learned

Through FocusForge, we learned the fundamentals of **Chrome extension development**, including background processes, storage, notifications, and popup-based interfaces. We also learned more about designing accountability tools that feel lightweight and helpful rather than frustrating. On the AI side, we improved our understanding of **prompt engineering** and how to use large language models to deliver practical feedback to users.

## What's Next For FocusForge

There are several features we would love to add next, including a **session history dashboard**, **CSV export**, and analytics for spotting long-term productivity patterns. We also want to support **custom reflection prompts**, **cloud sync**, and possible collaboration features like team or accountability modes. The long-term vision is to turn FocusForge into a smarter reflection system that helps users improve their study and work habits over time.

## Built With

- Chrome Extension APIs
- CSS
- Figma
- Gemini API
- HTML
- JavaScript
- JSON

## Team

- Jakob Laise
- Daniel Ocampo
- Dylan Moo Hernandez
- Peter Petro

## Links

- [GitHub Repo](https://github.com/Jomak-x/GeminKnights-FocusForge.git)
