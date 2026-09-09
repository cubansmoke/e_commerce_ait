import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center items-center h-24 py-5 bg-violet-600">
      <Link to="/" className="flex items-center gap-5 h-16">
        <img
          className="w-auto h-full object-contain"
          src="/logo.svg"
          alt="logo"
        />
        <span className="text-white text-2xl font-bold">VirtuaMarket</span>
      </Link>
    </header>
  );
}

export default Header;
