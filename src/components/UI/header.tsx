
function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold tracking-tight">Aid Distribution Dashboard</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Dashboard</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
