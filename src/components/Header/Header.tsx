import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-[#1a337d] text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="hidden sm:block text-xl font-regular tracking-tight ml-3">Aid Distribution Dashboard</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 