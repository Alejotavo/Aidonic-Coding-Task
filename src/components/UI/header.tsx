import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold tracking-tight">Aid Distribution Dashboard</h1>
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

export default Header;
