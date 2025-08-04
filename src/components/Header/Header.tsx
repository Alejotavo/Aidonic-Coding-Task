import { Link } from 'react-router-dom';

/**
 * Navigation header component that displays the logo and main navigation links
 * 
 * @returns JSX element representing the application header
 */
export function Header() {
  // Navigation links configuration - using array for better maintainability
  const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' }
  ];

  return (
    <header className="bg-[#1a337d] text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and title section */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="hidden sm:block text-xl font-regular tracking-tight ml-3">
            Aid Distribution Dashboard
          </h1>
        </div>
        
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-6">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 