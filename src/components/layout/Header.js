import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/notes">Notes</Link></li>
        </ul>
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 10;
          background: transparent;
          pointer-events: none;
          width: auto;
        }

        nav {
          pointer-events: auto;
        }

        .nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li:nth-child(1) {
          margin-left: 0;
        }

        .nav-links li:nth-child(2) {
          margin-left: 1.1rem;
        }

        .nav-links li:nth-child(3) {
          margin-left: 2.2rem;
        }

        .nav-links li:nth-child(4) {
          margin-left: 3.3rem;
        }

        .nav-links a {
          color: var(--light-text);
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: var(--transition);
          position: relative;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--primary-color);
          transition: var(--transition);
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--primary-color);
          font-size: 1.25rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          header {
            top: 1.25rem;
            left: 1rem;
            right: 1rem;
          }

          nav {
            display: flex;
            justify-content: flex-start;
          }

          .menu-btn {
            display: block;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 2.5rem;
            left: 0;
            background: rgba(255, 253, 247, 0.94);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 1rem 1.25rem;
            box-shadow: var(--shadow);
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links li {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </header>
  );
}