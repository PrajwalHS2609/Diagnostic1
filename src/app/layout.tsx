import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import TopBar from "@/components/TopBar/TopBar";
import BookPopUp from "./../components/HomePage/BookPopUp/BookPopUp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        {/* ---gtag--- */}
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main> {children}</main>
        <BookPopUp />
        <Footer />
      </body>
    </html>
  );
}
