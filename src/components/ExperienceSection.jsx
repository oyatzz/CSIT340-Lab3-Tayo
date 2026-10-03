import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2026"
          title="Applications Development and Emerging Technology"
          place="Cebu Institute of Technology – University"
          description="Proposing a mobile learning app, from the pain point to the functional requirements."
        />
        <TimelineItem
          period="2026"
          title="Android Mobile Application Development"
          place="Cebu Institute of Technology – University"
          description="Building Android apps in Android Studio, including GymTrack Tayo and CIT ReviewTayo."
        />
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, mobile development, and data analytics."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
