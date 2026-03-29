import Logo from "@/assets/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-tertiary h-[100px] flex items-center">
      <div className="container">
        <Link
          href="/"
          aria-label="Go to Homepage"
          className="block w-fit h-fit"
        >
          <Logo aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
