import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>

    </>
  )
}



// <></> this is called react fragment.
// used to group elements when u don't want to give additional classes.
// we will different section(5) for the main home page with minimal lines.
// And call all the components: camp, guide, get-app etc.
