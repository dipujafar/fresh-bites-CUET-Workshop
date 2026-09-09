import Image from "next/image";
import logo from "@/assets/logo.png"
import Container from "./Container";
import Link from "next/link";


const navLink = [
    {
        label: <span>Home</span>,
        link: "/"
    },
    {
        label: <span>All Foods</span>,
        link: "/"
    },
    {
        label: <span>Cart</span>,
        link: "/"
    },
    {
        label: <span>Account</span>,
        link: "/"
    },
]

const Navbar = () => {
    return (
        <div className="bg-primary-bg-color">

            <Container className="py-6 flex justify-between " >
                {/* logo side */}
                <div className="flex items-center gap-4">
                    <Image src={logo} alt={"logo image"} />
                    <h3 className="text-primary-color text-[22px] font-bold">FreshBites</h3>
                </div>

                {/* nav link */}
                <div>
                    {
                        navLink?.map((nav) => <Link href={nav.link} className="">{nav.label}</Link>)
                    }
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
