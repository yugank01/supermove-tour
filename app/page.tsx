import Car from "@/components/Car";
import CustomScrollbar from "@/components/CustomScrollbar";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { SuperMoveTour } from "@/components/SuperMoveTour";
import Timeline from "@/components/TimeLine";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Content for scrolling */}
      <div className="flex flex-col">
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">
          <Features />
          <SuperMoveTour />
        </div>
        <Timeline />
        <Car />
        <Footer />
      </div>
      <CustomScrollbar />
    </main>
  );
}
