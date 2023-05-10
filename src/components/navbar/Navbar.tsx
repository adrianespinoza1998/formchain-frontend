import { NavbarProps } from "../../types/ui";

export const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        {/* Hamburger button */}
        <button className="text-white ml-4" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-white text-xl">Formchain</div>

        {/* User button */}
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
          0xA46...972
        </button>
      </div>
    </nav>
  );
};
