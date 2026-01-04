'use client';

import { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block h-full">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="w-12 h-full flex items-center text-xl justify-center rounded-md bg-transparent duration-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:outline-none cursor-none"
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <div
        className={
          'origin-top-right absolute -left-20 mt-8 w-48 bg-zinc-200 dark:bg-zinc-950 border-2 drop-shadow-md shadow-purple-500 border-gray-300 shadow-lg rounded-lg overflow-hidden transition-all duration-100 transform ' +
          (open
            ? 'opacity-100 scale-100 max-h-60 pointer-events-auto'
            : 'opacity-0 scale-95 max-h-0 pointer-events-none')
        }
        role="menu"
        aria-hidden={!open}
      >
        <ul className="flex flex-col p-4">
          <li className="w-full">
            <Link
              href={'/'}
              scroll={true}
              className="w-full flex text-left px-3 py-2 cursor-none rounded duration-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-lg"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href={'/#trabalhos'}
              scroll={true}
              className="w-full flex text-left px-3 py-2 cursor-none rounded duration-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-lg"
              onClick={() => setOpen(false)}
            >
              Trabalhos
            </Link>
          </li>
          <li>
            <button
              className="w-full text-left px-3 py-2 cursor-none rounded duration-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-lg"
              onClick={() => setOpen(false)}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
