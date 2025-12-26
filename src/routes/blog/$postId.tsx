import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPostById } from '@/data/blogPosts'

function BlogPost() {
    const post = Route.useLoaderData()

    return (
        <article className="font-poppins">
            <header className="my-8">
                <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
                    ← Blog
                </Link>
                <img
                    src={post.image}
                    alt={post.title}
                    className="max-w-3xl mx-auto w-full h-auto rounded-lg mb-6"
                />
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <time>{post.date}</time>
                </div>
            </header>

            <div className="prose prose-invert max-w-none">
                {post.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    )
}

function NotFoundComponent() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-4 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-primary hover:underline">
                ← Blog
            </Link>
        </div>
    )
}

export const Route = createFileRoute('/blog/$postId')({
    loader: ({ params }) => {
        const post = getPostById(params.postId)
        if (!post) {
            throw notFound()
        }
        return post
    },
    component: BlogPost,
    notFoundComponent: NotFoundComponent,
})
