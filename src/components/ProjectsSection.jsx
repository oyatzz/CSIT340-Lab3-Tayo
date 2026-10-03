import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="CIT ReviewTayo"
          description="An AI-powered flashcard app for students. Make flashcards from an uploaded PDF, or create them by hand offline."
          tech="Android · Java"
          link="https://github.com/oyatzz"
        />
        <ProjectCard
          year="2026"
          title="GymTrack Tayo"
          description="An Android app that tracks gym attendance, built with the MVP architecture for my mobile development class."
          tech="Android · Java"
          link="https://github.com/oyatzz"
        />
        <ProjectCard
          year="2026"
          title="YU - TAYO"
          description="A static landing page for Nexa Tech, a fictional company, with animations and a full responsive layout."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/oyatzz"
        />
        <ProjectCard
          year="2026"
          title="Portfolio in React"
          description="This site, rebuilt from a plain HTML page into reusable React components."
          tech="React · Tailwind CSS"
          link="https://github.com/oyatzz/CSIT340-Lab3-Tayo"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
