import Link from "next/link";

function Nav() {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/">
        <a className="mr-5 hover:text-gray-900">Home</a>
      </Link>
      <Link href="/about">
        <a className="mr-5 hover:text-gray-900">About</a>
      </Link>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
  );
}

export default Nav;
