import Image from "next/image";
import bannerImage from "@/assets/banner_image.png";
import Container from "@/components/shared/Container";
import { Flame } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <div className="bg-linear-to-b from-[#FFDBD166] via-primary-bg-color to-[#F0F3FF]">
      <Container className="w-full flex xl:flex-row flex-col-reverse justify-between items-center flex-wrap py-12 lg:gap-8 gap-4">
        {/* ================== banner content================ */}
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-x-1 font-semibold py-2 px-4 rounded-full bg-[#A0F399] w-fit ">
            <Flame color="#217128" fill="#217128" className="h-4.5 w-4 " />
            <span className="text-xs text-[#217128] ">
              Lightning Fast Delivery in 30 Mins
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold  ">
            Fresh cravings, <br />{" "}
            <span className="text-primary-color"> delivered hot </span> to your
            door.
          </h3>

          <p className="text-[#5B4039] max-w-150">
            Discover top-rated local restaurants, gourmet street food, and
            farm-fresh organic bowls crafted by award-winning chefs.
          </p>

          <SearchBar />
        </div>

        {/* ===================== banner image ====================== */}
        <div>
          <Image src={bannerImage} alt={"logo image"} />
        </div>
      </Container>
    </div>
  );
}
