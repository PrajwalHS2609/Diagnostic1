import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="footerLinks-container">
      <ul>
        <h4>Links</h4>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
