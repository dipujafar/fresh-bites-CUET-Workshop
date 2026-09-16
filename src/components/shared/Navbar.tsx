"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { Badge } from "../ui/badge";




const navLink = [
  {
    label: <span>Home</span>,
    link: "/",
  },
  {
    label: <span>All Foods</span>,
    link: "/all-foods",
  },
  {
    label: (
      <div className="flex gap-x-2">
        Cart{" "}
        <Badge className="bg-primary-color rounded-full size-4.5 text-[10px]">
          3
        </Badge>{" "}
      </div>
    ),
    link: "/cart",
  },
  {
    label: (
      <span className="flex gap-2 items-center">
        <Image src={"/user-profile.jpg"} alt={"user profile image"} width={1200} height={1200} className="size-8 rounded-full"  ></Image>{" "}
        Account{" "}
      </span>
    ),
    link: "/account",
  },
];

const Navbar = () => {
  const pathName = usePathname();



  return (
    <div className="bg-primary-bg-color shadow-sm">
      <Container className="py-6 flex gap-x-2 justify-between ">
        {/* logo side */}
        <div className="flex items-center gap-4">
          <Image src={logo} alt={"logo image"} />
          <h3  className="text-primary-color text-[22px] font-bold">
            FreshBites
          </h3>
        </div>

        {/* nav link */}
        <div className="flex flex-wrap items-center gap-x-2.5 ">
          {navLink?.map((nav) => (
            <Link
              key={nav.link}
              href={nav.link}
              className={cn(
                "text-sm text-[#5B4039] px-4 py-2 hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold",
                pathName === nav.link &&
                  "bg-primary-color text-white font-bold rounded-full",
              )}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
