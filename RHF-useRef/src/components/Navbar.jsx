




const Navbar = ({setToggle}) => {
  return (
    <header className="w-full mt-5">
      <nav
        className="h-12 w-full flex items-center justify-around px-10"
        aria-label="Main navigation"
      >

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="Hetrol Home"
        >
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop"
            alt="Hetrol logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <span className="text-xl font-semibold">
            Hetrol
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10">
          <li>
            <a href="/" className="hover:text-amber-500">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-amber-500">
              About
            </a>
          </li>

          <li>
            <a className="hover:text-amber-500" onClick={() => setToggle(false)}>
              Profiles
            </a>
          </li>
        </ul>

        {/* Create User */}
        <button  className="rounded-2xl bg-amber-300 px-4 py-2 hover:bg-amber-400" onClick={() => setToggle(true)}>
            Create User
        </button>

      </nav>
    </header>
  );
};

export default Navbar;