import Image from 'next/image';
import PixelBlast from './bgHome';
import Shuffle from './titleHome';

import { Press_Start_2P } from 'next/font/google';
const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default async function SectionHome() {
  return (
    <>
      <PixelBlast
        variant="circle"
        pixelSize={10}
        color="#b19eef"
        patternScale={2}
        patternDensity={0.9}
        pixelSizeJitter={0.1}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.5}
        edgeFade={0.15}
        transparent
      />
      <section className="w-full h-screen pt-36">
        <div className="w-full h-full pt-16 px-10 overflow-hidden">
          <Shuffle
            text="Gabriel Oliveira"
            className={`${press.className} text-4xl md:text-6xl text-center w-full mt-10`}
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
          />
          <Shuffle
            text="Designer Gráfico"
            className={`${press.className} text-2xl md:text-4xl text-center w-full mt-8`}
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
          <div className="h-full w-full flex justify-between px-10 md:px-20">
            <Image
              src="/Logo.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain z-20 animate-bounce select-none"
              priority
            />
            <div className="mt-48 ml-28 md:ml-36 lg:ml-64 h-1 w-full bg-zinc-400 z-20 animate-pulse rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
