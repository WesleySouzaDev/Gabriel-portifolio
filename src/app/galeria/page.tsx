import Image from 'next/image';
import TargetCursor from '@/components/cursorTarget';

export default async function GaleriaPage() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <main className="pt-28">
        <h1 className="text-6xl text-center my-20 font-semibold letter-spacing-wide">
          Galeria
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 place-items-center w-full gap-10 px-20 overflow-hidden mb-20">
          <Image
            src="/1.png"
            alt="primeira foto"
            width={1000}
            height={1000}
            className="object-contain cursor-target col-span-2 border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />
          <Image
            src="/3.png"
            alt="segunda foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />
          <Image
            src="/4.png"
            alt="terceira foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />
          <Image
            src="/5.png"
            alt="quarta foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />
          <Image
            src="/8.png"
            alt="quinta foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />

          <Image
            src="/9.png"
            alt="sexta foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />

          <Image
            src="/2.png"
            alt="sétima foto"
            width={1000}
            height={1000}
            className="object-cover cursor-target col-span-2 border-2 border-zinc-950 dark:border-zinc-200 rounded-2xl"
          />
        </div>
      </main>
    </>
  );
}
