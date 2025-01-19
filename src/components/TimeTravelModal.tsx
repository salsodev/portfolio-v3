import { X } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface TimeTravelModalProps {
  setCloseModal: (val: boolean) => void;
}

function TimeTravelModal({ setCloseModal }: TimeTravelModalProps) {
  return (
    <section className="fixed top-0 left-0 bottom-0 bg-slate-900/30 z-[9999] h-screen w-screen backdrop-blur-md">
      <div className="flex items-center mt-10 px-8 justify-end">
        <Button
          type="button"
          className="px-3 py-1 rounded-full self-end cursor-pointer"
          ariaLabel="close time machine modal"
          onclick={() => setCloseModal(false)}
        >
          <X
            className="text-slate-400 hover:text-slate-300 transition-all duration-200"
            size={30}
          />
        </Button>
      </div>
      <div
        style={{ perspective: "400px" }}
        className=" z-[9990] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: "rotateX(25deg) translateZ(100px)",
            transformOrigin: "50% 100%",
          }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-black text-lg font-bold max-w-md mb-8 text-center">
            Travel back in time and check out other site, remember to wear your
            traveler suit...
          </h2>
          <div className="flex flex-col gap-5 flex-wrap">
            <Link
              href="https://salsodev.github.io/my-profile-page/"
              className="border-[2px] border-slate-400 overflow-hidden rounded-md shadow-2xl relative group/portfolio"
            >
              <Image
                src="/images/portfolio v1.png"
                width={200}
                height={200}
                alt="A look into my first portfolio"
              />
              <div className="flex items-center justify-center z-[9999] absolute inset-0 opacity-0 group-hover/portfolio:opacity-100 transition-all bg-slate-900/25 backdrop-blur-md">
                <h2 className="font-bold text-slate-200 text-xl">v1</h2>
              </div>
            </Link>
            <Link
              href="https://salsod.netlify.app/"
              className="border-[2px] border-slate-400 overflow-hidden rounded-md shadow-2xl relative group/portfolio"
            >
              <Image
                src="/images/portfolio v2.png"
                width={200}
                height={200}
                alt="A look into my second portfolio"
              />
              <div className="flex items-center justify-center z-[9999] absolute inset-0 opacity-0 group-hover/portfolio:opacity-100 transition-all bg-slate-900/25 backdrop-blur-md">
                <h2 className="font-bold text-slate-200 text-xl">v2</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="portal"></div>
      <div className="portal"></div>
      <div className="portal"></div>
      <div className="portal"></div>
      <div className="portal"></div>
    </section>
  );
}
export default TimeTravelModal;
