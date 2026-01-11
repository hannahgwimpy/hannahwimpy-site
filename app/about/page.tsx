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
          <p>Bought my first microscope at five. Had a lab position at Lipscomb by ten. I've always wanted to understand how things work, then make them work better.</p>
          <p>In high school, I did drug research at Vanderbilt (horseradish peroxidase, NSAID inflammation) and built a cardiac rehab program at Vanderbilt Medical Center. Around the same time, I started working as a pharmacy technician. That's when I started thinking about computational approaches to drug discovery.</p>
          <p>I also started a consulting practice around this time, working with everyone from biotech to quant finance clients. Scaled it to six figures, managed 13 contractors over the years. That work reinforced something: I wanted to apply computational approaches to science, not just build tools for other people doing it.</p>
          <p>That led me to self-design my major at Northeastern: CS, biochemistry, and physics mashed together. Full-ride Stamps Scholar, plus a dozen other awards.</p>
          <p>Then: research at Harvard Med and Northeastern (ion channels, molecular dynamics simulations) I noticed how much of science was bottlenecked by manual iteration, not ideas. So I built a drug discovery automation startup: lab-in-the-loop, end-to-end bioinformatics, real-time inference. It got acquired!</p>
          <p>Somewhere in between: built the life sciences vertical at an AWS Premier Partner, and started running rev (Northeastern's builder community).</p>
          <p>Now I'm at Lila Sciences building the orchestration layer for scientific superintelligence, the systems glue between hardware, robotics, and platform.</p>
          <p>My goal is continuing to build in physical AI: systems where software actually interacts with and learns from the real world. I lean towards techbio, but I'm starting to venture beyond...</p>
          <p>Also into: Paris Texas, Odd Future, Patrick Ness, Matisse, Toulouse-Lautrec, UTK Vols, Dallas Cowboys.</p>
          <p>Always down to talk. Reach out!</p>
        </div>
      </div>
    </div>
  )
}
