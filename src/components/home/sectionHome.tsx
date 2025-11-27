import PixelBlast from './bgHome';

export default async function SectionHome() {
  return (
    <section className="w-full h-screen">
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
    </section>
  );
}
