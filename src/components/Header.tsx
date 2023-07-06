import Image from "next/image";
export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header-left">
        <Image
          src="/images/fastforward.png"
          alt="ff-logo"
          height={50}
          width={140}
        />
        <div className="sidebar-toggler"></div>
      </div>
      <div className="main-header-right"></div>
    </header>
  );
}
