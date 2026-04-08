## Inspiration

HireTune was inspired by the frustration of applying to jobs during the **Fall 2024** and **Spring 2025** hiring seasons. Across hundreds of applications, one problem kept repeating itself: tailoring a resume for each role took an enormous amount of time. We wanted to build a tool that helps applicants stand out by rewriting and refining resumes for specific job descriptions, while keeping the product **free and open-source** so more students can benefit from it.

## What It Does

HireTune is an **AI-powered resume tailoring platform** that helps users optimize their resumes for specific job openings. By using AI, the app rewrites and fine-tunes resume content to match the keywords, language, and expectations of a job description. It also supports direct editing prompts, letting users make targeted updates with natural language commands.

Beyond resume generation, HireTune also works as an **application tracker**. Users can sign in with **Discord**, track where they applied, associate specific resume versions with each role, and save notes like location, compensation, or reminders for follow-up.

## How We Built It

We built HireTune with a **React frontend** and a **Django backend**, using the **OpenAI API** to generate ATS-aligned resume drafts and content suggestions. To make output clean and consistent, we combined AI-generated content with a **LaTeX-based PDF pipeline** for one-click resume export. The project was containerized with **Docker** to speed up local development, testing, and demo setup, and the overall UI and UX direction was shaped in **Figma**.

## Challenges We Ran Into

One of the hardest parts of the project was rendering **LaTeX** into clean, properly formatted PDFs while still keeping the editing workflow fast and flexible. We also had to connect and merge the backend with the frontend, manage API communication and token constraints, and get the database integrated under hackathon time pressure. Hosting turned into an especially difficult challenge during the event, so rather than spending too much time forcing deployment, we chose to focus on the local experience and use that time to build out stronger application-tracking features.

## Accomplishments We're Proud Of

We were proud to ship a fully functional full-stack product with a polished frontend and a solid backend in just **36 hours**. The AI-driven editing flow worked quickly, producing ATS-aware drafts in under **10 seconds**, and the LaTeX export system made it possible to generate consistent, professional PDFs with a single click. On top of that, we successfully integrated **Discord OAuth**, added a **job tracker**, and delivered a production-shaped MVP that felt practical and immediately useful.

## What We Learned

Through HireTune, we gained hands-on experience with **full-stack development** using **Django** and **React**, and learned how to use the **OpenAI API** inside a real application workflow instead of in isolated experiments. We also learned more about LaTeX rendering, Docker-based development, and the realities of merging frontend and backend systems under real delivery pressure. Just as importantly, we improved our team collaboration, GitHub workflow, and debugging process in a fast-paced hackathon environment.

## What's Next For HireTune

We want HireTune to become more than just a weekend project. The next big step is a real deployment, ideally in collaboration with **SHPE at UCF**, so students can actually use it during hiring season. We also want to expand the AI feedback system, support **cover letter generation**, improve the UI/UX, and add stronger mobile responsiveness. The long-term goal is to turn HireTune into an accessible, student-friendly platform for managing and improving applications at scale.

## Built With

- Django
- React
- TypeScript
- Python
- OpenAI API
- Docker
- Figma
- Tailwind CSS
- LaTeX

## Links

- [GitHub Repo](https://github.com/ThomasT-GitHub/HireTune.git)
