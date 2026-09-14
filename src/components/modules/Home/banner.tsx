import Image from "next/image";
import bannerImage from "@/assets/banner_image.png";
import Container from "@/components/shared/Container";
import { Flame } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-linear-to-b from-[#FFDBD166] via-primary-bg-color to-[#F0F3FF]">
      <Container className="border w-full flex justify-between items-center flex-wrap py-12">
        {/* ================== banner content================ */}
        <div className="border border-blue-400 space-y-6">
          <div className="flex items-center gap-x-1 font-semibold py-2 px-4 rounded-full bg-[#A0F399] ">
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

          <p className="text-[#5B4039]">
            Discover top-rated local restaurants, gourmet street food, and
            farm-fresh organic bowls crafted by award-winning chefs.
          </p>
        </div>

        {/* ===================== banner image ====================== */}
        <div>
          <Image src={bannerImage} alt={"logo image"} />
        </div>
      </Container>
    </div>
  );
}
