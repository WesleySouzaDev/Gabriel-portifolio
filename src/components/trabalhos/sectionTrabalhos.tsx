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
      <section className="w-full h-screen pt-28 mb-20" id="trabalhos">
        <div className="grid place-items-center w-full grid-cols-3 gap-16 pt-10 px-40">
          <Image
            src="/6.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-contain rounded-2xl cursor-target"
          />
          <Image
            src="/7.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-contain rounded-2xl cursor-target"
          />
          <Image
            src="/8.webp"
            alt="logo"
            width={494}
            height={600}
            className="object-contain rounded-2xl cursor-target"
          />
        </div>
      </section>
    </>
  );
}
