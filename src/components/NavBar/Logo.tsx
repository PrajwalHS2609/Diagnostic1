import Image from "next/image";
import "./NavBar.css";
import logo from "./NavBarImgs/logo.png"
import Link from "next/link";
export default function Logo() {
  return (
    <div className="logo-container">
     <Link href="/"><Image src={logo} alt="logo"/></Link>
    </div>
  );
}
