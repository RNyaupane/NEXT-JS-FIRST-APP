import Navbar from "@/components/common/navbar";
import "./globals.css";
import MainHeaderBackground from "@/components/common/main-header-background";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MainHeaderBackground />

        {children}
      </body>
    </html>
  );
}
