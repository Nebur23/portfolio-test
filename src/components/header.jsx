import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef } from "react";
import SocilaLink from "./socialLinks";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const closeButtonRef = useRef(null);

  // Add items to refs array
  //   const addToRefs = el => {
  //     if (el && !menuItemsRef.current.includes(el)) {
  //       menuItemsRef.current.push(el);
  //     }
  //   };

  useGSAP(() => {
    if (!menuRef.current) return;

    if (showMenu) {
      // Clear the refs array and re-populate
      menuItemsRef.current = [];

      // Animate menu sliding in
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power2.out" }
      );

      // Animate menu items
      gsap.fromTo(
        menuRef.current.querySelectorAll(".menu-item"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
        }
      );

      // Animate close button
      gsap.fromTo(
        closeButtonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.3,
        }
      );
    }
  }, [showMenu]);

  const handleMenuToggle = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    if (!menuRef.current) return;

    // Animate out
    gsap.to(menuRef.current, {
      x: "100%",
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setShowMenu(false);
      },
    });
  };

  return (
    <div className='border-b py-2 border-border fixed top-0 left-0 w-full bg-background z-50'>
      {/* Header */}
      <div className='flex justify-between items-center max-w-4xl mx-auto'>
        <SocilaLink />
        <button
          onClick={handleMenuToggle}
          className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8 h-8'
            // fill='none'
            viewBox='0 0 512 512'
            // stroke='currentColor'
          >
            <path d='M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0 -16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0 -16-16zM58.6 224h394.7c34.6 0 54.6-43.9 34.8-75.9C448 83.2 359.6 32.1 256 32c-103.5 .1-192 51.2-232.2 116.1C4 180.1 24.1 224 58.6 224zM384 112a16 16 0 1 1 -16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1 -16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1 -16 16 16 16 0 0 1 16-16z' />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-opacity-50 z-40'
            onClick={handleCloseMenu}
          />

          {/* Menu */}
          <div
            ref={menuRef}
            className='fixed top-0 right-0 h-full w-full bg-accent font-monofett shadow-xl z-50 flex flex-col'
            style={{ transform: "translateX(100%)" }}
          >
            {/* Close Button */}
            <div className='flex justify-end p-4 border-b'>
              <button
                ref={closeButtonRef}
                onClick={handleCloseMenu}
                className='p-2 hover:bg-cta rounded-lg transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className='flex-1 p-6'>
              <nav className='space-y-4'>
                <a
                  href='#'
                  className='menu-item block text-4xl md:text-5xl font-medium text-gray-800 hover:text-cta transition-colors py-2'
                  onClick={handleCloseMenu}
                >
                  Home
                </a>

                <a
                  href='#projects'
                  className='menu-item block text-4xl md:text-5xl font-medium text-gray-800 hover:text-cta transition-colors py-2'
                  onClick={handleCloseMenu}
                >
                  Projects
                </a>
                <a
                  href='#experiences'
                  className='menu-item block text-4xl md:text-5xl font-medium text-gray-800 hover:text-cta transition-colors py-2'
                  onClick={handleCloseMenu}
                >
                  Experiences
                </a>
                <a
                  href='#'
                  className='menu-item block text-4xl md:text-5xl font-medium text-gray-800 hover:text-cta transition-colors py-2'
                  onClick={handleCloseMenu}
                >
                  Blog
                </a>
                <a
                  href='#'
                  className='menu-item block text-4xl md:text-5xl font-medium text-gray-800 hover:text-cta transition-colors py-2'
                  onClick={handleCloseMenu}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
