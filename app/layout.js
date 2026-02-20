import { Outfit, Ovo } from "next/font/google"
import "./globals.css";

const    outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "Portfolio - Abhishek",
  description: "Full-stack developer portfolio showcasing projects, skills, and experience in  modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
