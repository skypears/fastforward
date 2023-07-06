import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatSquareDots } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { BsGear } from "react-icons/bs";
export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <header>
        <nav className="bg-white py-2 flex justify-between">
          <div className="flex justify-between w-64 items-center">
            <Image
              src="/images/fastforward.png"
              alt=""
              width={190}
              height={64}
            />
            <div className="sidebar-toggler">
              <Link href={"#"}>
                <GiHamburgerMenu color="var(--primary)" fontSize={"32px"} />
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-3 pr-5">
            <div className="user-menu">
              <Link href={"#"}></Link>
            </div>
            <div className="messages">
              <Link href={"#"}>
                <BsChatSquareDots color="var(--primary)" fontSize={"24px"} />
              </Link>
            </div>
            <div className="notifications">
              <Link href={"#"}>
                <GoBell color="var(--primary)" fontSize={"24px"} />
              </Link>
            </div>
            <div className="settings">
              <Link href={"#"}>
                <BsGear color="var(--primary)" fontSize={"24px"} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}
