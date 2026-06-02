import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Capture Survey | Professional Land Surveying & DGPS Services Kerala",
  description:
    "Capture Survey offers high-precision DGPS surveying, topographic mapping, contour surveys, plot setouts, and road/infrastructure surveying services in Kerala. Reliable, accurate, and modern mapping solutions.",
  keywords:
    "Land Survey Services Kerala, DGPS Survey Kerala, Topographic Survey Kerala, Contour Survey, FMB Marking Services, Building Setout Survey, Road Survey Kerala, Professional Surveying Company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-[#001d3d] text-slate-100 min-h-screen font-sans selection:bg-[#c5a880] selection:text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
