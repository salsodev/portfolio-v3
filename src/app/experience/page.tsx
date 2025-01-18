import { ArrowUpRight, Dot, LinkIcon } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    href: "/projects",
    period: ["2024", "Present"],
    title: "Dukabills",
    currentRole: "Frontend Engineer",
    prevRole: ["Developer (Contract)"],
    products: [
      {
        id: 1,
        name: "Teeket",
        href: "https://dukabills.com/",
      },
    ],
    description:
      "Nowadays, it's not about making things work but more about knowing how things are connected and apply that when you are most in need",
    technologies: ["React", "shadCN", "React-Query"],
  },
  {
    id: 2,
    href: "/experience",
    period: ["January", "Present"],
    title: "Fundit",
    currentRole: ["Frontend Engineer"],
    prevRole: [],
    description:
      "Nowadays, it's not about making things work but more about knowing how things are connected and apply that when you are most in need",
    technologies: ["Nextjs", "shadCN", "React-Query"],
  },
];

function Experience() {
  return (
    <section>
      <header>
        <h2 className="text-base font-semibold text-slate-200 after:block after:w-6 after:h-[2px] after:bg-sky-400 after:mt-1">
          Relevant Experience
        </h2>
        <p className="text-xs text-slate-500 mt-3">
          The journey I took that shaped who I am today.
        </p>
      </header>

      <div className="mt-10 flex flex-col group/experience">
        {experiences.map((company) => (
          <article
            key={company.id}
            className="group relative hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:hover:!opacity-100 md:group-hover/experience:opacity-50 hover:bg-slate-900 transition-all duration-200 px-4 py-5 rounded-lg"
          >
            <header className="flex items-start justify-between flex-wrap gap-3">
              <div className="flex flex-col gap-[2px]">
                <Link href={company.href} rel="noreferrer noopener">
                  <span className="absolute inset-0"></span>
                  <h4 className="flex items-center gap-[1px] text-base text-white font-semibold group-hover:text-yellow-400 transition-all duration-200">
                    {company.currentRole}
                    <Dot size={14} />
                    {company.title}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200 inline-block ml-[1px]"
                    />
                  </h4>
                </Link>
                {company.prevRole.length > 0
                  ? company.prevRole.map((prevRole, i) => (
                      <h3
                        key={i}
                        className="text-sm text-slate-500 font-semibold"
                      >
                        {prevRole}
                      </h3>
                    ))
                  : null}
              </div>
              <div
                aria-label={`${company.period[0]} till ${company.period[1]}`}
              >
                <p className="text-sm text-slate-400">
                  {company.period[0]} &mdash; {company.period[1]}
                </p>
              </div>
            </header>

            <p className="text-sm text-slate-400 mt-5">{company.description}</p>
            <div className="flex items-center flex-wrap gap-2 mt-3">
              {company.products &&
                company.products.map((product) => (
                  <Link
                    href={product.href}
                    key={product.id}
                    target="_blank"
                    className="flex items-center gap-[5px] z-10 text-xs hover:text-yellow-400  rounded-full"
                  >
                    <LinkIcon size={14} />
                    {product.name}
                  </Link>
                ))}
            </div>
            <div className="flex items-center flex-wrap gap-2 mt-4">
              {company.technologies.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 text-sky-300 bg-sky-400/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Experience;
