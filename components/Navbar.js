"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import NetworkBar from "./NetworkBar";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Nickel Investments", path: "/investments" },
    { name: "Videos", path: "/videos" },
    { name: "Data", path: "/data" },
    { name: "Nickel 101", path: "/C101" },
  ];

  const navigateTo = (path) => {
    setMenuOpen(false);
    router.push(path);
  };

  const isActive = (path) => router.pathname === path;

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* ── Main nav bar ── */}
      <div className="bg-white border-b shadow">
        <div className="container mx-auto px-4 xl:px-10 py-5 flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="cursor-pointer xl:ml-7"
            onClick={() => navigateTo("/")}
          />

          {/* Desktop Navigation (Visible after xl) */}
          <div className="hidden xl:flex xl:space-x-8 font-medium">
            {navLinks.map(({ name, path }, index) => (
              <div key={index} className="relative group">
                <motion.button
                  className={`tracking-wide text-[15.6px] ${
                    isActive(path) ? "text-accent font-semibold" : "text-black/70"
                  }`}
                  onClick={() => navigateTo(path)}
                  whileHover={{ color: "#227B94" }}
                  transition={{ duration: 0.2 }}
                >
                  {name}
                </motion.button>
                <motion.div
                  className={`absolute bottom-[-4px] h-[1.5px] bg-accent transition-all duration-300 ${
                    isActive(path)
                      ? "w-full left-0"
                      : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Desktop Buttons — re-enable when auth is wired up */}

          {/* Mobile Menu Toggle (Hidden after xl) */}
          <div className="xl:hidden">
            <FaBars
              className={`text-2xl text-accent cursor-pointer ${
                menuOpen ? "hidden" : ""
              }`}
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* ── Network bar (sits directly below the main nav) ── */}
      <NetworkBar />

      {/* Mobile Menu (Visible below xl) */}
      {menuOpen && (
        <>
          <FaTimes
            className="text-2xl text-accent cursor-pointer fixed top-5 right-2 z-[100]"
            onClick={() => setMenuOpen(false)}
          />
          <motion.div
            className="xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-8 font-medium"
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {navLinks.map(({ name, path }, index) => (
              <button
                key={index}
                className={`text-lg ${
                  isActive(path) ? "text-accent font-semibold" : "text-black/70"
                }`}
                onClick={() => navigateTo(path)}
              >
                {name}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Navbar;
