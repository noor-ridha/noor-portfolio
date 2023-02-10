import "./globals.css";
import Navbar from "@/components/Navbar";

//  import About from "@/pages/About";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <head />
        <body>
          <Navbar />
          {children}
        </body>
      </>
    </html>
  );
}
