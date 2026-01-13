import type { BlogPost, WorkItem } from '@/lib/types'

export const social = {
  twitter: 'https://x.com/hannahgwimpy',
  github: 'https://github.com/hannahgwimpy',
  linkedin: 'https://linkedin.com/in/hannahgwimpy',
  email: 'mailto:hannahgwimpy@icloud.com',
}

export const workData: Record<'founding'|'operating'|'research'|'projects'|'leadership'|'education'|'awards', WorkItem[]> = {
  founding: [
    {
      title: 'Founder @ Drug Discovery Automation Startup (Acquired)',
      date: 'Jun 2025 – Nov 2025',
      location: 'Boston, MA',
      description: 'Built lab-in-the-loop patch clamp software with real-time inference and an end-to-end bioinformatics pipeline. Scaled to acquisition by an enterprise pharma company.',
      tags: ['pytorch', 'aws', 'bioinformatics', 'ml'],
    },
    {
      title: 'Founder @ Hannah Wimpy Consulting',
      date: 'Aug 2021 – Nov 2025',
      location: 'Remote',
      description: 'Scaled to six figures across biotech, quant finance, and productivity. Clients included Structured (top App Store). Shipped iOS apps, ML frameworks, and EHR systems. Managed 13 contractors.',
      tags: ['full-stack', 'ml', 'ios', 'cloud'],
    },
  ],
  operating: [
    {
      title: 'Next Generation Product Co-op @ Lila Sciences',
      date: 'Jan 2026 – Present',
      location: 'Cambridge, MA',
      description: 'Building the orchestration layer between robotics and platform to enable autonomous science.',
      tags: ['physical ai', 'robotics', 'ml'],
      link: 'https://lila.science',
    },
    {
      title: 'Life Sciences Lead Consultant @ Cloud303',
      date: 'Jul 2025 – Oct 2025',
      location: 'Boston, MA',
      description: "Established the life sciences vertical with a 900+ prospect pipeline ($100k+ avg deals). Contributed to a client's $300M+ Series C through cloud transformation advisory.",
      tags: ['aws', 'biotech', 'sales'],
    },
    {
      title: 'Certified Pharmacy Technician & Immunizer @ CVS Pharmacy',
      date: 'Aug 2022 – Jun 2025',
      location: 'Franklin, TN',
      description: 'Became the first minor employed at this location by driving policy and compliance changes. Filled prescriptions, administered vaccines, processed insurance claims, and provided multilingual patient support in a high‑volume healthcare setting.',
      tags: ['healthcare', 'pharmacy', 'vaccines', 'operations'],
    },
  ],
  research: [
    {
      title: 'Computational Electrophysiology Co-op @ Harvard Medical School',
      date: 'Jan 2025 – Jun 2025',
      location: 'Boston, MA',
      description: 'Pioneered a novel CTBN approach to model voltage-gated ion channels. First undergraduate researcher in Bean Lab in decades. Achieved perfect accuracy with improved computational efficiency.',
      tags: ['ctbns', 'electrophysiology', 'python', 'bayesian'],
    },
    {
      title: 'Research Fellow @ Northeastern Plant Lab',
      date: 'May 2024 – Dec 2024',
      location: 'Boston, MA',
      description: 'Led funded research on Nav1.2/SCN2A ion channel dysregulation in autism and epilepsy. Built predictive models and MD simulations. Contributed to AlphaFold2 open source.',
      tags: ['gromacs', 'alphafold', 'ml', 'md simulations'],
    },
  ],
  projects: [
    {
      title: 'CTBN Ion Channel Modeling',
      date: '2025',
      description: 'Novel Continuous Time Bayesian Network framework for modeling voltage-gated ion channel dynamics. Perfect accuracy, dramatically improved computational efficiency. Preparing for publication.',
      tags: ['ctbns', 'electrophysiology', 'python'],
    },
    {
      title: 'SCN2A + PIP2 models for ASD and Epilepsy',
      date: '2024',
      description: 'Cohesive set of studies combining MD simulations, electrophysiology with PIP2 perturbation, and ML classification to investigate SCN2A/Nav1.2 dysfunction in ASD and epilepsy.',
      tags: ['gromacs', 'electrophysiology', 'ml', 'drug discovery'],
    },
    {
      title: 'ADHD Diagnosis via Movement Data',
      date: '2024',
      description: 'Analyzed the HyperActiv dataset to objectively diagnose ADHD. Found significant movement pattern differences in males but not females.',
      tags: ['ml', 'data analysis', 'healthcare'],
    },
    {
      title: 'Cardiac Rehabilitation Volunteer Program',
      date: '2022',
      description: 'Created and implemented a pioneering volunteer program for minors to assist clinical physiologists in cardiac rehabilitation, including designing a complementary weightlifting program to support patients recovering from COVID-related cardiac events.',
      tags: ['ml', 'data analysis', 'healthcare'],
    },
    {
      title: 'Drug Discovery Automation Platform',
      date: '2025',
      description: 'Lab-in-the-loop system with real-time inference for patch clamp electrophysiology. End-to-end bioinformatics. Acquired.',
      tags: ['pytorch', 'aws', 'automation'],
    },
    {
      title: 'AlphaFold2 Contributions',
      date: '2024',
      description: 'Contributed to ongoing AlphaFold2 open source development.',
      tags: ['alphafold', 'open source'],
      link: 'https://github.com/deepmind/alphafold',
    },
    {
      title: 'Minor Employment Policy Change',
      date: '2022',
      description: 'Advocated before the Tennessee Board of Pharmacy and CVS executives to change policies restricting minors from working as licensed pharmacy technicians.',
      tags: ['policy', 'healthcare', 'advocacy'],
    },
  ],
  leadership: [
    { title: 'Executive Director @ REV', date: 'Jan 2025 – Present', location: 'Boston, MA', description: 'Run Northeastern’s startup community (40 companies/semester). Results: $3M+ ARR, >2M users, 4 YC startups, 6 founding engineers @ YC startups, 1 Shark Tank deal. Partnerships with Anthropic, Genesis Fund, Dorm Room Fund, Smithery.ai, and several dozen other companies.', tags: ['startups', 'community', 'vc'] },
    { title: 'Web & Software Team Member, NU Sci Magazine', date: '—', tags: ['software', 'community'] },
    { title: 'Industry Analyst, Emerging Markets Club', date: '—', tags: ['finance', 'analysis'] },
    { title: 'Quantitative Finance Analyst, Northeastern Investment Banking Group', date: '—', tags: ['quant', 'finance'] },
    { title: 'Project Manager, Disability in Business Society', date: '—', tags: ['project management', 'community'] },
    { title: 'Growth & Development Associate, Forge', date: '—', tags: ['growth', 'startups'] },
    { title: 'Executive Director of Mentorship Program, Computer Science Mentoring Organization', date: '—', tags: ['mentorship', 'cs'] },
    { title: 'Quantitative Finance Analyst, Disrupt', date: '—', tags: ['quant', 'finance'] },
    { title: 'Vice President of WeBuild, Women\'s Interdisciplinary Society of Entrepreneurship', date: '—', tags: ['leadership', 'entrepreneurship'] },
    { title: 'Accelerator Associate, Evolve', date: '—', tags: ['accelerator', 'startups'] },
  ],
  education: [
    { title: 'Northeastern University · BS Computational Biophysics (Self-Designed)', date: '2023 – 2027', description: "Summa cum laude, John Martinson Honors; Dean's List all semesters; Sigma Xi; Sigma Pi Sigma.", tags: ['stamps scholar', 'honors'] },
    { title: 'Franklin High School · Valedictorian', date: '2019 – 2023', description: '4.55 GPA; ACT 36; 11 AP exams; 4 IB exams.', tags: ['academic'] },
  ],
  awards: [
    { title: 'Lime Connect Fellow', date: '2025', tags: ['fellowship'] },
    { title: 'Women Who Empower Innovator Award (Special Recognition)', date: '2025', tags: ['award'] },
    { title: 'GEICO Changemaker Scholar', date: '2025', tags: ['scholarship'] },
    { title: 'Deborah and James Nolan Scholar', date: '2025', tags: ['scholarship'] },
    { title: 'Motorola Solutions Foundation Scholar', date: '2024', tags: ['scholarship'] },
    { title: 'William H. Nelson STEM Scholar', date: '2023', tags: ['scholarship'] },
    { title: 'Stamps Scholar (Full-Ride Merit)', date: '2023', tags: ['scholarship'] },
    { title: 'Williamson Health Scholar', date: '2023, 2024', tags: ['scholarship'] },
    { title: 'U.S. Presidential Scholar Nominee', date: '2022', tags: ['academic'] },
    { title: 'National Merit Scholar, Commended', date: '2022', tags: ['academic'] },
    { title: 'AP Scholar with Distinction', date: '2022', tags: ['academic'] },
  ],
}

export const blogPosts: BlogPost[] = []
