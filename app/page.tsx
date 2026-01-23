"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCircleH } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl md:px-7 py-3 px-4 sm:py-5 md:py-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-background " href="#">
                <FaCircleH className="w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-15 lg:h-15" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 md:text-3xl lg:text-xl text-sm">
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
      <section className="bg-white pt-20 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 sm:text-5xl">
              Bonjour, je suis Hélène, développeuse Front-End.
            </h1>

            <p className="mt-5 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Je conçois et développe des sites web et applications modernes,
              responsives et performantes. Je suis passionnée par la création
              d’expériences utilisateur intuitives et efficaces.
            </p>

            <div className="mt-4 m-10 flex flex-col sm:flex-row gap-6 sm:mt-6">
              <Link
                className="inline-block text-center justify-items-center rounded-3xl border bg-primary px-5 py-3 font-bold text-white"
                href="#"
              >
                Contactez-moi
              </Link>

              <Link
                className="inline-block text-center rounded-3xl border border-gray-900 px-5 py-3 font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Voir mon projets
              </Link>
            </div>
          </div>

          {/* <Image src="/moi.png" width={150} height={150} alt="" className="" /> */}
        </div>
      </section>
      <section className="bg-gray-900 pt-5 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
    Mes compétences techniques

























































































































































































































































































































































































































































































































































































































































































    </h2>

    <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur, nemo quam
      voluptas sunt impedit dolorem asperiores aliquid doloribus fugit.
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">High performance</h3>

      <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
        Lightning-quick load times optimized for every device
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        Enterprise security
      </h3>

      <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
        Enterprise-grade security built into every layer
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        Highly configurable
      </h3>

      <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
        Adapt every aspect to match your brand and needs
      </p>
    </div>
  </div>
</div>
      </section>
    </>
  );
}
