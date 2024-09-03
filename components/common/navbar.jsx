"use client";

import Link from "next/link";

import styles from "./navbar.module.css";

import Image from "next/image";

import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles._nav}>
      <div className={styles._container}>
        <div className={styles._nav_container}>
          {/* Logo */}
          <div className={styles._wrapper}>
            <Link href="/" legacyBehavior>
              <Image
                src={logoImg.src}
                width={100}
                height={100}
                alt="Logo Image"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Links */}
          <div className={styles._nav_link}>
            <Link href="/" className={pathname === "/" ? styles._active : ""}>
              Home
            </Link>

            <NavLink href="/meals">Browse Meals </NavLink>

            <NavLink href="/services">Services </NavLink>

            <NavLink href="/community">Community </NavLink>

            <Link href="/contact" className={styles._nav_item}>
              Contact
            </Link>
          </div>

          <div className={styles._nav_item}>
            <div className={styles._nav_action}>
              <Link legacyBehavior href="/">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles._container_sm}>
            <button>
              <svg
                className={styles._mobile_menu_icon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={styles._mobile_nav_link}>
        <Link href="/" className={styles._mobile_nav_item} legacyBehavior>
          Home
        </Link>
        <Link href="/about" className={styles._mobile_nav_item} legacyBehavior>
          About
        </Link>
        <Link
          href="/services"
          className={styles._mobile_nav_item}
          legacyBehavior
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={styles._mobile_nav_item}
          legacyBehavior
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
