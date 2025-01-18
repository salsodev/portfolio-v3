import {
  ArrowUpRight,
  Briefcase,
  BriefcaseBusiness,
  DownloadCloud,
  ExternalLink,
  FileText,
  Flame,
  Telescope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <section className="">
      <div className="bg-[#0b1121] rounded-lg overflow-hidden">
        <div className="border-b pb-10 border-slate-600">
          <div
            className="h-[76px] bg-[url('/images/salsod.jpeg')] bg-center bg-cover bg-no-repeat"
            aria-label="profile banner"
          ></div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/sodiq.jpeg"
              width={80}
              height={80}
              className="rounded-full shadow-lg border-2 border-slate-300 -mt-11"
              alt="profile picture"
            />
          </div>

          <div className="px-5 flex flex-col items-center gap-2 mt-7">
            <h1 className="text-white font-bold text-xl">Sodiq Salaudeen</h1>
            <p className="text-slate-300 text-sm text-center">
              Software Engineer | React | Nextjs | TypeScript | Nodejs | Golang
              Enthusiast
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 px-4 border-b border-slate-600">
          <div className="flex items-center justify-between gap-5">
            <span className="text-sm font-semibold text-slate-300">
              Relevant Projects
            </span>
            <span className="text-slate-400 text-base">8</span>
          </div>
          <div className="flex items-center justify-between gap-5">
            <span className="text-sm font-semibold text-slate-300">
              Work Experience
            </span>
            <span className="text-slate-400 text-base">4</span>
          </div>
        </div>

        {/* Resume */}

        <div className="flex flex-col gap-3 py-5 px-4 border-b border-slate-600">
          <h4 className="text-xs text-slate-300">Check out my resume</h4>
          <div className="flex items-center gap-2">
            <FileText size={13} />
            <Link
              className="underline hover:no-underline transition-all text-sky-500 text-sm"
              href="https://docs.google.com/document/d/17oyOXZK6Sm1rHb1fhSskMay9VoNLNTDkQIGPZHdfdCc/edit?usp=sharing"
            >
              <span className="flex items-center gap-[2px]">
                resume
                <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
        </div>

        {/* Recent uploaded project */}
        <div className="flex flex-col gap-3 py-5 px-4 border-b border-slate-600">
          <h4 className="text-xs text-slate-300">Recent Project</h4>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame size={16} />
              <Link
                className="underline hover:no-underline transition-all text-sky-500 text-sm"
                href="/"
              >
                <span className="flex items-center gap-[2px]">
                  Contrib.
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            </div>
            <span className="text-slate-300 text-xs">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Link
            className="w-full text-slate-300 flex items-center hover:underline justify-center py-3 px-4 gap-[4px] text-sm hover:bg-slate-800/45 transition-all"
            href="/projects"
          >
            Discover more projects
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Profile;
