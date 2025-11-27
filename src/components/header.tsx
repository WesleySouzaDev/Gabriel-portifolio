import Image from 'next/image';
import NavBar from './navBar';

export default async function Header() {
  return (
    <header className="fixed z-20 w-full h-16 mt-16 flex px-10 md:px-20 lg:px-40 justify-center items-center bg-transparent">
      <div className="w-full h-full border-2 border-gray-100 shadow-lg shadow-purple-600 backdrop-blur-md rounded-full p-2 px-10 duration-100 flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <NavBar />
      </div>
    </header>
  );
}
