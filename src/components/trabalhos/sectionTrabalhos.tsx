import Image from 'next/image';
import TargetCursor from '@/components/cursorTarget';

export default async function TrabalhosSection() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <section className="w-full h-screen py-28" id="trabalhos">
        <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center w-full mb-20 gap-16 pt-10 px-6 md:px-16 lg:px-40 absolute">
          <Image
            src="/6.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-cover rounded-2xl cursor-target border-2 border-zinc-950 dark:border-zinc-200"
          />

          <Image
            src="/7.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-cover rounded-2xl cursor-target border-2 border-zinc-950 dark:border-zinc-200"
          />

          <Image
            src="/8.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-cover rounded-2xl cursor-target border-2 border-zinc-950 dark:border-zinc-200"
          />
        </div>
      </section>
    </>
  );
}
