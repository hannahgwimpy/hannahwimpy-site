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
          <p>I grew up in Franklin, Tennessee. I’m now based in Boston.</p>
          <p>I got a microscope at five and had a lab position at Lipscomb University by ten. The throughline has always been the same: build something, watch it hit the real world, learn from the feedback loop.</p>
          <p>That loop led me to self‑design my major at Northeastern—sitting at the intersection of computer science, biochemistry, and physics. I’m a full‑ride Stamps Scholar, with a dozen additional awards along the way.</p>
          <p>I started in research at Harvard Medical School and Northeastern, modeling ion channels and running molecular dynamics simulations. That work led me to lab automation: I saw how much of science was bottlenecked by manual iteration, not ideas. So I built a drug discovery automation startup—a lab‑in‑the‑loop system with end‑to‑end bioinformatics and a real‑time inference pipeline. It got acquired.</p>
          <p>In between: I scaled a consulting practice to six figures, built out the life sciences vertical at an AWS Premier Partner, and now run rev—Northeastern’s community of students who build cool things (an understatement: 5+ YC‑backed founders, $75M+ ARR across alumni).</p>
          <p>Now I’m at Lila Sciences building the orchestration layer for scientific superintelligence: the systems glue between hardware, robotics, and platform. Physical AI—systems where software actually interacts with and learns from the real world—is what I care most about.</p>
          <p>Always down to talk about physical AI and beyond. Reach out!</p>
        </div>
      </div>
    </div>
  )
}
