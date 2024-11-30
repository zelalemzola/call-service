import About from "@/components/About";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "@/components/Services";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Partners/>
     <About/>
     <Services/>
     <Articles/>
     <Faq/>
    </div>
  );
}
