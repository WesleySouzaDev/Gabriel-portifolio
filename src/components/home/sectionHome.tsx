import Image from 'next/image';
import Shuffle from './titleHome';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default async function SectionHome() {
  return (
    <>
      <section className="w-full h-screen mb-20 pt-36">
        <div className="w-full h-full pt-16 px-10 overflow-hidden">
          <Shuffle
            text="Gabriel Oliveira"
            className={`${montserrat.className} text-4xl font-semibold md:text-5xl lg:text-8xl text-center w-full mt-10 select-none`}
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={true}
            loopDelay={5.5}
          />
          <Shuffle
            text="Designer Gráfico / Ilustrador"
            className={`${montserrat.className} text-lg md:text-4xl text-center w-full mt-8 select-none`}
            shuffleDirection="right"
            duration={0.69}
            animationMode="evenodd"
            shuffleTimes={4}
            ease="power2.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <div className="h-full w-full flex items-start justify-between px-10 md:px-20 mt-28">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain z-20 animate-bounce"
              priority
            />
            <div className="mt-48 ml-28 md:ml-36 lg:ml-64 h-1 w-full bg-zinc-400 z-20 animate-pulse rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
