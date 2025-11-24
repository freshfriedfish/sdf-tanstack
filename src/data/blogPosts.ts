// Single source of truth for blog posts
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'site-refresh',
    title: 'Site Refresh',
    excerpt: 'Long overdue.',
    date: '2025-11-23',
    image: '/images/evolution.jpg',
    content: `
I've been meaning to update my site for a while now, and I finally got around to it. Coincidentally I've refreshed my site once per year (2023 -> 2025), but I think i'm going to stick with this new design for a while.

    `.trim(),
  },
  {
    id: 'dynamic-routing',
    title: 'Hackathon Journal',
    excerpt: 'Travel journal of hackathons & other events I have attended.',
    date: '2024-04-15',
    image: '/images/hackpsu.jpg',
    content: `
• UB Hacking 2025: Buffalo, NY (11/9/25)
• Nvidia X Vercel Hackathon: NYC (6/03/25)
• HackMSFT: NYC (5/20/25)
• HackMIT: Cambridge, MA (09/14/24)
• AI Agents Hackathon: NYC (06/01/24)
• MongoDB.local 2024: NYC (05/02/24)
• P̶h̶i̶l̶l̶y̶ ̶C̶o̶d̶e̶f̶e̶s̶t̶ ̶2̶0̶2̶4̶:̶ ̶P̶h̶i̶l̶a̶d̶e̶l̶p̶h̶i̶a̶,̶ ̶P̶A̶ (04/20/24) attended an event in Buffalo, NY
• Dragonhacks 2024: Philadelphia, PA (04/13/24)
• MongoDB GenAI Hackathon: NYC (04/06/24)
• IvyHacks 2024: NYC (03/23/24)
• HackPSU Spring 2024: State College, PA (03/16/24)
    `.trim(),
  },
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getAllPostPreviews() {
  return blogPosts.map(({ id, title, excerpt, date }) => ({
    id,
    title,
    excerpt,
    date,
  }))
}

