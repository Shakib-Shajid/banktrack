import Banner from "@/components/Banner";
import Client from "@/components/Client";
import Finance from "@/components/Finance";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Video />
      <Client />
      <Finance />
    </>
  );
}
