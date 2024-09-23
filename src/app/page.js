import Banner from "@/components/Banner";
import Client from "@/components/Client";
import Collection from "@/components/Collection";
import Finance from "@/components/Finance";
import Forecast from "@/components/Forecast";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Video />
      <Client />
      <Finance />
      <Collection />
      <Forecast />
    </>
  );
}
