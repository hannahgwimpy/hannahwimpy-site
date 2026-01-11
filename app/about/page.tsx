export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl text-accent-primary tracking-tight">about</h1>
      <div className="grid md:grid-cols-[220px,1fr] gap-6 items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/headshot.jpeg"
          alt="hannah wimpy"
          className="w-48 h-48 md:w-56 md:h-56 rounded-md object-cover border"
          style={{ filter: 'saturate(0.9) contrast(1.1) hue-rotate(-8deg)' }}
        />
        <div className="space-y-4 text-sm text-text-secondary">
          <p>Grew up in Franklin, TN. Now based in Boston, MA.</p>
          <p>Got a microscope at five. Had a lab position at Lipscomb by ten. The throughline has always been the same: build something, watch it hit the real world, learn from the feedback loop.</p>
          <p>That loop led me to self-design my major at Northeastern—CS, biochemistry, and physics mashed together. Full-ride Stamps Scholar, plus a dozen other awards.</p>
          <p>Started in research at Harvard Med and Northeastern: ion channels, molecular dynamics simulations. Then I noticed how much of science was bottlenecked by manual iteration, not ideas. So I built a drug discovery automation startup—lab-in-the-loop, end-to-end bioinformatics, real-time inference. It got acquired!</p>
          <p>Somewhere in there: scaled a consulting practice to six figures, built the life sciences vertical at an AWS Premier Partner, and started running rev—Northeastern's builder community (5+ YC-backed founders, $75M+ ARR across alumni).</p>
          <p>Now I'm at Lila Sciences building the orchestration layer for scientific superintelligence—the systems glue between hardware, robotics, and platform.</p>
          <p>My goal is continuing to build in physical AI—systems where software actually interacts with and learns from the real world. I lean towards techbio, but I'm starting venture beyond.</p>
          <p>Also into: Paris Texas, Odd Future, Patrick Ness, Matisse, Toulouse-Lautrec, UTK Vols, Dallas Cowboys.</p>
          <p>Always down to talk. Reach out.</p>
        </div>
      </div>
    </div>
  )
}
