import SectionHome from '@/components/home/sectionHome';
import SectionTrabalhos from '@/components/trabalhos/sectionTrabalhos';
import SecionContato from '@/components/contato/sectionContato';

import PixelBlast from '@/components/bgHome';

export default function Home() {
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
      <main className="">
        <SectionHome />
        <SectionTrabalhos />
        <SecionContato />
      </main>
    </>
  );
}
