import Link from "next/link";

function Footer() {
  return (
    <footer className="flex items-center justify-center pb-5 sticky top-52">
      <div className="text-center">
        <small className="font-bold">
          Copyright &copy; {new Date().getFullYear()}.{" "}
          <Link
            href="https://github.com/salsodev"
            target="_blank"
            className="hover:text-cyan-500 transition-all duration-200 hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-700 to-cyan-500"
          >
            Salaudeen Sodiq
          </Link>
        </small>
      </div>
    </footer>
  );
}
export default Footer;
