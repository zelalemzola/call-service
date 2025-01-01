import About from "@/components/About";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Service from "@/components/Service";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Partners/>
     <About/>
     <Service/>
     <Articles/>
     <Faq/>
    </div>
  );
}
