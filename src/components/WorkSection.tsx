import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const defaultWorkItems = [
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/cts.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The official unofficial tokenizer for Claude',
  },
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/rd.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The Official Unofficial Tokenizer for Claude',
  },
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/cts.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The Official Unofficial Tokenizer for Claude',
  },
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/cts.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The Official Unofficial Tokenizer for Claude',
  },
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/cts.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The Official Unofficial Tokenizer for Claude',
  },
]

export function WorkSection({ items = defaultWorkItems }) {
  return (
    <section className="px-4 py-8 md:flex-1">
      <div className="mx-auto max-w-7xl md:max-w-none">
        <h2 className="mb-6 md:pt-30 text-2xl text-gray-300">Work</h2>
        <div className="flex flex-col gap-6 gap-y-10 md:grid md:grid-cols-2 ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <div className="p-1 border border-gray-500 rounded-2xl">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover rounded-2xl border border-gray-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

