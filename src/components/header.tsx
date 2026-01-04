import Image from 'next/image';
import NavBar from './navBar';
import Link from 'next/link';
import ToggleTheme from '@/components/toggleTheme';

export default async function Header() {
  return (
    <header className="fixed z-30 w-full h-16 mt-16 flex px-10 md:px-20 lg:px-40 justify-center items-center bg-transparent">
      <div className="w-full h-full border-2 border-gray-100 shadow-lg shadow-purple-600 backdrop-blur-md rounded-full p-2 px-10 duration-100 flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <ToggleTheme />
        <div className="flex gap-4 justify-center items-center h-full">
          <Link
            href="/galeria"
            className="text-xl duration-100 cursor-none hover:underline hover:text-purple-400"
          >
            Galeria
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
