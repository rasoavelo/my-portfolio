"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCircleH } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-background " href="#">
              <FaCircleH className="w-7 h-7" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Accueil
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    À propos
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Compétences
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projets
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
    
  );
}
