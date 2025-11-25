import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const defaultWorkItems = [
  {
    href: 'https://osugallery.com',
    imageSrc: '/home/osg.jpg',
    imageAlt: 'osugallery',
    title: 'Osu! Gallery',
    description: 'Create, share, & explore Osu! slider art',
  },
  {
    href: 'https://claude-tokenizer.vercel.app/',
    imageSrc: '/home/cts.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Claude Tokenizer',
    description: 'The official unofficial token counter',
  },
  {
    href: 'https://metalpipe.vercel.app/',
    imageSrc: '/home/mp.jpg',
    imageAlt: 'claude-tokenizer',
    title: 'Metal Pipe',
    description: 'The app that cures brainrot by beating you up with a metal pipe',
  },
  {
    href: 'https://freshfriedfish.github.io/radial-designer/',
    imageSrc: '/home/rds.jpg',
    imageAlt: 'Radial Designer',
    title: 'Radial Designer',
    description: 'Make your own OpenAI inspired logos',
  },
]

export function WorkSection({ items = defaultWorkItems }) {
  return (
    <section className="px-4 py-8 md:flex-1">
      <div className="mx-auto max-w-7xl md:max-w-none">
        <h2 className="mb-6 md:pt-10 text-2xl text-gray-300">Work</h2>
        <div className="flex flex-col gap-6 gap-y-10 md:grid md:grid-cols-2 ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <div className="p-1 border border-gray-500 rounded-2xl overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover rounded-lg border border-gray-500"
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

