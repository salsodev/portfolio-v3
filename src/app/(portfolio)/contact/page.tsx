import Button from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

function ContactMe() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-white after:block after:w-6 after:h-[2px] after:bg-sky-400 after:mt-1">
          Get in touch
        </h2>
        <p className="text-xs text-slate-500">
          Or just reach out manually at{" "}
          <Link
            href="mailto:salsodiou@gmail.com"
            className="underline hover:no-underline transition-all text-sky-500"
          >
            salsodiou@gmail.com
          </Link>{" "}
          or connect with me on{" "}
          <Link
            href="https://wa.me/2347047320437?text=I'm%20in%20need%20of%20your..."
            className="underline hover:no-underline transition-all text-sky-500"
          >
            WhatsApp
          </Link>
        </p>
      </header>

      <div>
        <form className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="Fname" className="text-slate-300 text-sm">
                First name:
              </label>
              <input
                type="text"
                name="firstName"
                id="Fname"
                className="bg-transparent rounded-md px-3 py-2 outline-none border border-slate-700 text-sm text-slate-400 focus:border-slate-600 transition-all duration-200"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="Lname" className="text-slate-300 text-sm">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="Lname"
                className="bg-transparent rounded-md px-3 py-2 outline-none border border-slate-700 text-sm text-slate-400 focus:border-slate-600 transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-slate-300 text-sm">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent rounded-md px-3 py-2 outline-none border border-slate-700 text-sm text-slate-400 focus:border-slate-600 transition-all duration-200"
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="message" className="text-slate-300 text-sm">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="bg-transparent rounded-md px-3 py-2 pb-10 outline-none border border-slate-700 text-sm text-slate-400 focus:border-slate-600 transition-all duration-200"
              placeholder="I'm in need of..."
            ></textarea>
            <span className="text-xs text-slate-400 ">
              {0}/{300}
            </span>
          </div>
          <Button
            type="submit"
            className="flex items-center justify-center gap-1 text-sm text-slate-300 px-5 py-3 transition-all duration-200 hover:bg-sky-700 bg-sky-600 rounded-full mb-4 w-2/3 mx-auto"
          >
            <Send size={14} />
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
export default ContactMe;
