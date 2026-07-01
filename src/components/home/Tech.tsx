import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiDocker,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiLinux,
    SiPostgresql,
    SiGooglecloud,
} from 'react-icons/si'

import { VscVscode } from "react-icons/vsc";

const technologies = [
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Docker', icon: SiDocker },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Python', icon: SiPython },
    { name: 'Git', icon: SiGit },
    { name: 'Linux', icon: SiLinux },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Google Cloud', icon: SiGooglecloud },
    { name: 'VS Code', icon: VscVscode },
]

export function Tech() {
    return (
        <section className="px-4 py-8 md:min-w-0 pb-64">
            <div className="mx-auto max-w-7xl md:max-w-none">
                <h2 className="mb-6 text-2xl text-gray-300">Technologies I Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <Icon className="text-lg text-gray-300 flex-shrink-0" />
                                <span className="text-gray-300">{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

