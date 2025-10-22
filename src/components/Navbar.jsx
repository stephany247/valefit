import { useState } from "react";
import { FaListUl, FaRegUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Health Blog", path: "/blog" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md bg-background">
      <nav className="container relative flex justify-between items-center p-6">
        {/* Logo + Menu Button (mobile) */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl font-bold text-primary">
            Vale<span className="text-secondary">Fit</span>
          </h1>

          {/* Mobile Menu Icon */}
          <button
            className="text-3xl md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaListUl />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:gap-6 lg:gap-10 text-lg font-medium capitalize">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-orange-500 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            aria-label="User profile"
            className="text-3xl font-bold hover:text-orange-500 transition-colors"
          >
            <FaRegUserCircle />
          </button>

          <button className="text-secondary bg-primary font-semibold capitalize rounded-lg px-5 py-2 hover:bg-opacity-90 transition">
            Join now
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-background h-fit flex flex-col items-end justify-start gap-4 p-6 z-50 shadow-lg">
            {/* Close Button */}
            <button
              className="text-3xl font-bold self-endt"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <IoClose />
            </button>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col items-center gap-6 text-2xl font-medium w-full capitalize mt-4">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
