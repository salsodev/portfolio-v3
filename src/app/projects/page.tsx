import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Contrib.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae eos eligendi corrupti at recusandae, temporibus rerum eius nam vel?",
    technologies: [
      "React",
      "TypeScript",
      "Nodejs",
      "Express",
      "TypeORM",
      "PostgreSQL",
    ],
    projectImageSRC: "/vercel.svg",
    href: "/projects",
  },
  {
    id: 2,
    title: "Video Search Engine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae eos eligendi corrupti at recusandae, temporibus rerum eius nam vel?",
    technologies: [
      "React",
      "TypeScript",
      "Nodejs",
      "Express",
      "TypeORM",
      "PostgreSQL",
    ],
    projectImageSRC: "/vercel.svg",
    href: "/projects",
  },
  {
    id: 3,
    title: "Allthingpatio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae eos eligendi corrupti at recusandae, temporibus rerum eius nam vel?",
    technologies: ["WordPress", "Elementor"],
    projectImageSRC: "/vercel.svg",
    href: "/projects",
  },
  {
    id: 4,
    title: "Kanban Board",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae eos eligendi corrupti at recusandae, temporibus rerum eius nam vel?",
    technologies: [
      "React",
      "TypeScript",
      "Nodejs",
      "Express",
      "TypeORM",
      "PostgreSQL",
    ],
    projectImageSRC: "/vercel.svg",
    href: "/projects",
  },
];

function MyProjects() {
  return (
    <section>
      <header>
        <h2 className="text-base font-semibold text-slate-200 after:block after:w-6 after:h-[2px] after:bg-sky-400 after:mt-1">
          Relevant Projects
        </h2>
        <p className="text-xs text-slate-500 mt-3">
          Things I&apos;ve made trying to put my dent in the universe.
        </p>
      </header>

      <div className="mt-10 flex flex-col group/article">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:hover:!opacity-100 md:group-hover/article:opacity-50 hover:bg-slate-900 transition-all duration-200 px-4 py-5 rounded-lg"
          >
            <Link href={project.href} className="">
              <header className="flex items-start gap-3">
                <Image
                  src={project.projectImageSRC}
                  width={60}
                  height={60}
                  alt="project picture"
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-base text-gray-300 font-semibold group-hover:text-yellow-400 transition-all duration-200">
                    {project.title}{" "}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200 inline-block ml-[1px]"
                    />
                  </h4>
                  <p className="text-xs text-gray-400">
                    {new Date().toDateString()}
                  </p>
                </div>
              </header>

              <p className="text-sm text-slate-400 mt-5">
                {project.description}
              </p>
              <div className="flex items-center flex-wrap gap-2 mt-5">
                {project.technologies.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 text-sky-300 bg-sky-400/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export default MyProjects;
