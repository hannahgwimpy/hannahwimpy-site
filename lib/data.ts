import type { BlogPost } from '@/components/BlogCard'
import type { WorkItem } from '@/components/WorkCard'

export const social = {
  twitter: 'https://x.com/hannahgwimpy',
  github: 'https://github.com/hannahgwimpy',
  linkedin: 'https://linkedin.com/in/hannahgwimpy',
  email: 'mailto:hannahgwimpy@icloud.com',
}

export const workData: Record<'founding'|'operating'|'research'|'projects'|'leadership'|'education'|'awards', WorkItem[]> = {
  founding: [
    {
      title: 'founder @ drug discovery automation startup (acquired)',
      date: 'jun 2025 - nov 2025',
      location: 'boston, ma',
      description: 'built lab-in-the-loop patch clamp software with real-time inference and end-to-end bioinformatics pipeline. scaled to acquisition by enterprise pharma company.',
      tags: ['pytorch', 'aws', 'bioinformatics', 'ml'],
    },
    {
      title: 'founder @ hannah wimpy consulting',
      date: 'aug 2021 - nov 2025',
      location: 'remote',
      description: 'scaled to 6 figures across biotech, quant finance, productivity. clients included structured (top app store). shipped ios apps, ml frameworks, ehr systems. managed 13 contractors.',
      tags: ['full-stack', 'ml', 'ios', 'cloud'],
    },
  ],
  operating: [
    {
      title: 'next gen ai product co-op @ lila sciences',
      date: 'jan 2026 - present',
      location: 'cambridge, ma',
      description: 'building the orchestration layer for scientific superintelligence. closed-loop systems: ai designs experiments, robots run them, system learns from results.',
      tags: ['physical ai', 'robotics', 'ml'],
      link: 'https://lila.science',
    },
    {
      title: 'life sciences lead consultant @ cloud303',
      date: 'jul 2025 - oct 2025',
      location: 'boston, ma',
      description: "established life sciences vertical with 900+ prospect pipeline ($100k+ avg deals). contributed to client's $300m+ series c through cloud transformation advisory.",
      tags: ['aws', 'biotech', 'sales'],
    },
  ],
  research: [
    {
      title: 'computational electrophysiology co-op @ harvard medical school',
      date: 'jan 2025 - jun 2025',
      location: 'boston, ma',
      description: 'pioneered novel ctbn approach to model voltage-gated ion channels. first undergraduate researcher in bean lab in decades. achieved perfect accuracy with improved computational efficiency.',
      tags: ['ctbns', 'electrophysiology', 'python', 'bayesian'],
    },
    {
      title: 'research fellow @ northeastern plant lab',
      date: 'may 2024 - dec 2024',
      location: 'boston, ma',
      description: 'led funded research on nav1.2/scn2a ion channel dysregulation in autism and epilepsy. built predictive models and md simulations. contributed to alphafold2 open source.',
      tags: ['gromacs', 'alphafold', 'ml', 'md simulations'],
    },
  ],
  projects: [
    {
      title: 'ctbn ion channel modeling',
      date: '2025',
      description: 'novel continuous time bayesian network framework for modeling voltage-gated ion channel dynamics. perfect accuracy, dramatically improved computational efficiency. preparing for publication.',
      tags: ['ctbns', 'electrophysiology', 'python'],
    },
    {
      title: 'scn2a + pip2 series',
      date: '2024',
      description: 'integrated line of work: md simulations, electrophysiology with pip2 modulation, and ml classification to study scn2a/nav1.2 dysfunction in autism/epilepsy.',
      tags: ['gromacs', 'electrophysiology', 'ml', 'drug discovery'],
    },
    {
      title: 'adhd diagnosis via movement data',
      date: '2024',
      description: 'analyzed hyperactiv dataset to objectively diagnose adhd. found significant movement pattern differences in males but not females.',
      tags: ['ml', 'data analysis', 'healthcare'],
    },
    {
      title: 'drug discovery automation platform',
      date: '2025',
      description: 'lab-in-the-loop system with real-time inference for patch clamp electrophysiology. end-to-end bioinformatics. acquired.',
      tags: ['pytorch', 'aws', 'automation'],
    },
    {
      title: 'alphafold2 contributions',
      date: '2024',
      description: 'contributed to ongoing alphafold2 open source development.',
      tags: ['alphafold', 'open source'],
      link: 'https://github.com/deepmind/alphafold',
    },
    {
      title: 'minor employment policy change',
      date: '2022',
      description: 'advocated before tennessee board of pharmacy and cvs executives to change policies restricting minors from working as licensed pharmacy technicians.',
      tags: ['policy', 'healthcare', 'advocacy'],
    },
  ],
  leadership: [
    { title: 'executive director @ rev', date: 'jan 2025 - present', location: 'boston, ma', description: "run the premier startup incubator at northeastern (40 companies/semester). alumni: 5+ yc-backed founders, 75m+ arr across founders.", tags: ['startups', 'community', 'vc'] },
    { title: 'lime connect fellow', date: 'may 2025', location: 'new york, ny', description: 'prestigious leadership program for accomplished students with disabilities. professional coaching, nyc symposium, corporate partner access.', tags: ['leadership', 'fellowship'], link: 'https://limeconnect.com' },
    { title: 'mentor @ society of physics students', date: 'jan - apr 2025', tags: ['mentorship', 'physics'] },
    { title: 'mentor @ northeastern investment banking group', date: 'jan - apr 2025', tags: ['quant finance', 'mentorship'] },
    { title: 'internal mentor @ wren', date: 'sep 2024 - apr 2025', description: 'mentored college women in research, experimental design, and career development.', tags: ['research', 'women in stem'] },
    { title: 'cardiac rehabilitation volunteer @ vanderbilt health', date: 'mar 2022 - aug 2023', description: '100+ hours supporting cardiac rehab patients. designed weightlifting program for covid cardiac recovery.', tags: ['healthcare', 'volunteering'] },
  ],
  education: [
    { title: 'northeastern university · bs computational biophysics (self-designed)', date: '2023 - 2027', description: "summa cum laude, john martinson honors; dean's list all semesters; sigma xi; sigma pi sigma.", tags: ['stamps scholar', 'honors'] },
    { title: 'franklin high school · valedictorian', date: '2019 - 2023', description: '4.55 gpa; act 36; 11 ap exams; 4 ib exams.', tags: ['academic'] },
  ],
  awards: [
    { title: 'lime connect fellow', date: '2025', tags: ['fellowship'] },
    { title: 'women who empower innovator award (special recognition)', date: '2025', tags: ['award'] },
    { title: 'geico changemaker scholar', date: '2025', tags: ['scholarship'] },
    { title: 'deborah and james nolan scholar', date: '2025', tags: ['scholarship'] },
    { title: 'motorola solutions foundation scholar', date: '2024', tags: ['scholarship'] },
    { title: 'william h. nelson stem scholar', date: '2023', tags: ['scholarship'] },
    { title: 'stamps scholar (full-ride merit)', date: '2023', tags: ['scholarship'] },
    { title: 'williamson health scholar', date: '2023, 2024', tags: ['scholarship'] },
    { title: 'u.s. presidential scholar nominee', date: '2022', tags: ['academic'] },
    { title: 'national merit scholar, commended', date: '2022', tags: ['academic'] },
    { title: 'ap scholar with distinction', date: '2022', tags: ['academic'] },
  ],
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'hello world',
    description: 'first post on the new site',
    date: '2026-01-01',
    tags: ['intro'],
  },
]
