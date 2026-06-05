export const metadata = {
  metadataBase: new URL("https://capturesurvey.in"),
  title: "Client Feedback & Reviews | Capture Survey Kerala",
  description:
    "Read genuine reviews from clients of Capture Survey — Kerala's trusted professional land surveying company. Share your feedback on DGPS surveys, contour mapping, building setouts, and more.",
  keywords:
    "Capture Survey Reviews, Land Survey Feedback Kerala, DGPS Survey Reviews, Survey Company Kerala Client Reviews",
  openGraph: {
    title: "Client Feedback & Reviews | Capture Survey Kerala",
    description:
      "Read genuine reviews from clients of Capture Survey — Kerala's trusted professional land surveying company.",
    url: "https://capturesurvey.in/feedback",
    siteName: "Capture Survey",
    images: [
      {
        url: "/survey_hero.png",
        width: 1200,
        height: 630,
        alt: "Capture Surveying Client Feedback",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Feedback & Reviews | Capture Survey Kerala",
    description:
      "Read genuine reviews from clients of Capture Survey — Kerala's trusted professional land surveying company.",
    images: ["/survey_hero.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function FeedbackLayout({ children }) {
  return children;
}
