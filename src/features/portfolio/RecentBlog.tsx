import { client } from "@/app/services/graphqlClient";
import Footer from "@/components/global/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin, FiTwitter, FiCodepen, FiInstagram } from "react-icons/fi";

const query = `query Publication {
  publication(host: "salsod.hashnode.dev") {
    posts(first: 3) {
      totalDocuments
      edges {
        node {
          id
          title
          brief
          url
          views
        }
      }
    }
  }
}`;

interface articleDTO {
  id: number;
  title: string;
  brief: string;
  url: string;
  views: number;
}

async function RecentBlogs() {
  const data: any = await client.request(query);

  // const numOfBlogs = data?.publication?.posts?.totalDocuments;
  const articles = data?.publication?.posts?.edges?.map((blog: any) => ({
    ...blog.node,
  }));

  return (
    <aside className="flex flex-col sm:gap-6 gap-5">
      <div className="bg-[#0b1121] rounded-lg px-3 pt-5 pb-3 after:block after:w-10 after:h-[3px] after:bg-yellow-600 after:mx-auto after:mt-10 after:rounded-full">
        <h2 className="text-base font-semibold text-white after:block after:w-6 after:h-[2px] after:bg-sky-400 after:mt-1">
          Recent Blogs
        </h2>
        <p className="text-xs text-slate-500 mt-3">
          Let's catch you up on the latest.
        </p>

        <div className="mt-7">
          <article className="flex flex-col group/article">
            {articles.map((blog: articleDTO) => (
              <Link
                href={blog.url}
                key={blog.id}
                target="_blank"
                className="group block hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:hover:!opacity-100 md:group-hover/article:opacity-50 hover:bg-slate-900 transition-all duration-200 px-2 py-4 rounded-lg"
              >
                <h2 className="text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-all duration-500">
                  {blog.title}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200 inline-block ml-1"
                  />
                </h2>
                <p className="text-slate-400 text-sm group-hover:text-gray-400 transition-all ">
                  {blog.brief.slice(0, 100)}...
                </p>
                <span className="mt-4 text-xs px-3 inline-block py-1 text-sky-300 bg-sky-400/10 rounded-full">
                  {blog.views} views
                </span>
              </Link>
            ))}
          </article>
        </div>
      </div>
      <div className="sticky top-7 bg-[#0b1121] rounded-lg px-3 pt-5 pb-5">
        <h2 className="text-base font-semibold text-white after:block after:w-6 after:h-[2px] after:bg-sky-400 after:mt-1">
          Connect with me
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Let's start something beautiful
        </p>

        <div className="flex gap-10 items-center justify-center mt-10">
          <a href="https://github.com/salsodev" target="_blank">
            <FaGithubAlt className="text-xl hover:text-cyan-500 transition-all hover:cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/salsod/" target="_blank">
            <FiLinkedin className="text-xl hover:text-cyan-500 transition-all hover:cursor-pointer" />
          </a>
          <a href="https://twitter.com/salsodev" target="_blank">
            <FiTwitter className="text-xl hover:text-cyan-500 transition-all hover:cursor-pointer" />
          </a>
          <a href="https://codepen.io/Salsod/" target="_blank">
            <FiCodepen className="text-xl hover:text-cyan-500 transition-all hover:cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/salsodev/" target="_blank">
            <FiInstagram className="text-xl hover:text-cyan-500 transition-all hover:cursor-pointer" />
          </a>
        </div>
      </div>
      <Footer />
    </aside>
  );
}
export default RecentBlogs;
