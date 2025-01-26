import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const location = useLocation();

  const updateActiveBox = () => {
    const activeLink = document.querySelector(`.nav-link[href="${location.pathname}"]`);
    if (activeLink) {
      // Remove active class from previous link
      lastActiveLink.current?.classList.remove("active");
      // Add active class to new link
      activeLink.classList.add("active");

      // Update active box position
      activeBox.current.style.top = activeLink.offsetTop + "px";
      activeBox.current.style.left = activeLink.offsetLeft + "px";
      activeBox.current.style.width = activeLink.offsetWidth + "px";
      activeBox.current.style.height = activeLink.offsetHeight + "px";

      lastActiveLink.current = activeLink;
    }
  };

  useEffect(() => {
    // Update active box when the location changes
    updateActiveBox();

    // Handle window resize
    const handleResize = () => updateActiveBox();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location]); // Dependency on location

  const navItems = [
    { icon: "home", path: "/", className: "nav-link" },
    { icon: "work", path: "/Work", className: "nav-link" },
    { icon: "person", path: "/about", className: "nav-link" },
    {
      icon: "email",
      path: "mailto:vashisth.surya1918@gmail.com",
      className: "nav-link",
      external: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.23 0H1.77A1.76 1.76 0 000 1.75v20.5A1.76 1.76 0 001.77 24h20.46A1.76 1.76 0 0024 22.25V1.75A1.76 1.76 0 0022.23 0zM7.12 20.45H3.56V9h3.56zM5.34 7.73a2.06 2.06 0 112.06-2.06 2.06 2.06 0 01-2.06 2.06zM20.45 20.45h-3.56v-5.43c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.85v5.54h-3.56V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.61 0 4.28 2.38 4.28 5.47v6.28z" />
        </svg>
      ),
      path: "https://www.linkedin.com/in/surya-vashisth",
      className: "nav-link",
      external: true,
    },
  ];

  return (
    <nav className="navbar">
      {navItems.map(({ icon, path, className, external }, key) =>
        external ? (
          <a
            href={path}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {typeof icon === "string" ? (
              <span className="material-symbols-rounded">{icon}</span>
            ) : (
              icon
            )}
          </a>
        ) : (
          <Link
            to={path}
            key={key}
            className={`${className}${location.pathname === path ? " active" : ""}`}
          >
            <span className="material-symbols-rounded">{icon}</span>
          </Link>
        )
      )}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
