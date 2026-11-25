// Edit this file to update links, skills, projects, and personal details across the site.

export const profile = {
  name: 'Harshitha.R',
  roles: ['Aspiring Full Stack Developer', 'AI Enthusiast', 'Creative Problem Solver'],
  headline: 'Aspiring Full Stack Developer | AI Enthusiast | MCA Student',
  tagline:
    'Passionate about building innovative web applications, exploring artificial intelligence, and turning creative ideas into real-world solutions.',
  email: 'harshithaharshi58476@gmail.com',
  phone: '8951261459',
  location: 'Chitradurga, Karnataka, India',
  // Replace with your real profile URLs.
  linkedin: 'https://www.linkedin.com/in/your-linkedin-username',
  github: 'https://github.com/your-github-username',
  resumeUrl: '/resume.pdf',
  // Set to an image path in /public (e.g. '/profile.jpg') to replace the initials placeholder.
  profileImage: null as string | null,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
]

export const education = [
  {
    degree: 'MCA – Master of Computer Applications',
    institution: 'Bangalore University',
    period: 'August 2026 – Present',
    current: true,
  },
  {
    degree: 'BCA – Bachelor of Computer Applications',
    institution: 'Davanagere University',
    period: 'Completed',
    current: false,
  },
]

export const learningAreas = [
  'Full Stack Web Development',
  'Frontend and Backend Development',
  'Database Management Systems',
  'Data Structures and Algorithms',
  'Programming Fundamentals',
]

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export type Skill = {
  name: string
  // Self-assessed level from 1 (beginner) to 5 (advanced). Adjust to match your confidence.
  level: SkillLevel
}

export const skillGroups: { title: string; icon: 'code' | 'cpu'; skills: Skill[] }[] = [
  {
    title: 'Programming & Web Technologies',
    icon: 'code',
    skills: [
      { name: 'HTML', level: 3 },
      { name: 'CSS', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'Python', level: 3 },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    icon: 'cpu',
    skills: [
      { name: 'Database Management Systems', level: 3 },
      { name: 'Computer Networks', level: 3 },
      { name: 'Data Structures and Algorithms', level: 3 },
      { name: 'Computer Fundamentals', level: 3 },
    ],
  },
]

export const skillLevelLabels: Record<SkillLevel, string> = {
  1: 'Beginner',
  2: 'Familiar',
  3: 'Intermediate',
  4: 'Proficient',
  5: 'Advanced',
}

export const projects = [
  {
    title: 'Online Voting System',
    description:
      'Developed an online voting system designed to make voting more convenient and organized. The project includes fingerprint-based voter verification and candidate management features.',
    tags: ['HTML', 'JavaScript'],
    highlights: ['Fingerprint-based voter verification', 'Candidate management'],
    // Replace with your live demo and repository URLs.
    projectUrl: 'https://github.com/your-github-username/online-voting-system',
    githubUrl: 'https://github.com/your-github-username/online-voting-system',
  },
  {
    title: 'AI-Based Fake Logo Detection System',
    description:
      'Developed an AI-based fake logo detection system using Python and Anaconda to identify fake and manipulated logos.',
    tags: ['Python', 'Anaconda', 'AI'],
    highlights: ['Detects fake & manipulated logos', 'AI-powered image analysis'],
    projectUrl: 'https://github.com/your-github-username/fake-logo-detection',
    githubUrl: 'https://github.com/your-github-username/fake-logo-detection',
  },
]

export const interests = [
  { title: 'Dancing', description: 'Expressing energy and creativity through rhythm and movement.', icon: 'music' },
  { title: 'Travelling', description: 'Exploring new places, cultures, and perspectives.', icon: 'plane' },
  { title: 'Drawing', description: 'Sketching ideas and bringing imagination to paper.', icon: 'brush' },
  { title: 'Learning New Skills', description: 'Staying curious and constantly growing my toolkit.', icon: 'book' },
  { title: 'Creative Activities', description: 'Crafting, designing, and experimenting with new ideas.', icon: 'sparkles' },
] as const
