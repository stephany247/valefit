import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Health Blog", path: "/blog" },
  { name: "Membership", path: "/membership" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-secondary text-background pt-10">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-10 px-6">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-primary">ValeFit</h3>
          <p className="leading-relaxed">
            ValeFit helps people build safe, personalized exercise routines that
            match their fitness level, health needs, and personal goals — making
            fitness accessible, sustainable, and empowering for everyone.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="icon-btn">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="icon-btn">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="icon-btn">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="icon-btn">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="footer-link hover:text-primary transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <div className="text-primary uppercase">
            <h4 className="text-lg tracking-wide">
              For your latest news & updates
            </h4>
            <h3 className="">Subscribe to our Newsletter</h3>
          </div>
          <form className="flex flex-col gap-3">
            <fieldset className="flex gap-3 w-full">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="example@gmail.com" />
            </fieldset>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition duration-200 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Copyright */}
      <section className="text-center mt-4 border-t border-gray-400 py-4">
        <p>
          © {new Date().getFullYear()}
          <span className="font-semibold text-primary">ValeFit LTD</span>. All
          Rights Reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
