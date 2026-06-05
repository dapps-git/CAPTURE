import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://capturesurvey.in"),
  title: "Capture Survey | Professional Land Surveying & DGPS Services Kerala",
  description:
    "Capture Survey offers high-precision DGPS surveying, topographic mapping, contour surveys, plot setouts, and road/infrastructure surveying services in Kerala. Reliable, accurate, and modern mapping solutions.",
  keywords:
    "Land Survey Services Kerala, DGPS Survey Kerala, Topographic Survey Kerala, Contour Survey, FMB Marking Services, Building Setout Survey, Road Survey Kerala, Professional Surveying Company",
  openGraph: {
    title: "Capture Survey | Professional Land Surveying & DGPS Services Kerala",
    description:
      "Capture Survey offers high-precision DGPS surveying, topographic mapping, contour surveys, plot setouts, and road/infrastructure surveying services in Kerala.",
    url: "https://capturesurvey.in",
    siteName: "Capture Survey",
    images: [
      {
        url: "/survey_hero.png",
        width: 1200,
        height: 630,
        alt: "Capture Survey Professional Land Surveying",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capture Survey | Professional Land Surveying & DGPS Services Kerala",
    description:
      "Capture Survey offers high-precision DGPS surveying, topographic mapping, contour surveys, plot setouts, and road/infrastructure surveying services in Kerala.",
    images: ["/survey_hero.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
