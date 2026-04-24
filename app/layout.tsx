import type { Metadata } from "next";
import Schema from "./(seo)/schema";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fnl-rdc.com"),

  title: {
    default: "Forum National de la Logistique RDC 2027 | Kinshasa",
    template: "%s | FNL RDC 2027",
  },

  description:
    "Participez au Forum National de la Logistique 2027 à Kinshasa (RDC). L'événement majeur du transport, de la supply chain et de la logistique en Afrique centrale. Inscription ouverte.",

  keywords: [
    "forum logistique RDC",
    "événement logistique Kinshasa",
    "transport RDC",
    "supply chain Afrique",
    "forum logistique 2027",
    "conférence logistique Congo",
    "événement professionnel RDC",
    "inscription forum Kinshasa",
  ],

  authors: [{ name: "Forum National de la Logistique RDC" }],
  creator: "FNL RDC",
  publisher: "FNL RDC",

  openGraph: {
    title: "Forum National de la Logistique RDC 2027",
    description:
      "Rejoignez les acteurs du transport et de la logistique en RDC à Kinshasa. Inscrivez-vous dès maintenant.",
    url: "https://fnl-rdc.com",
    siteName: "FNL RDC",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forum National de la Logistique RDC 2027",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Forum National de la Logistique RDC 2027",
    description:
      "Le plus grand événement logistique en RDC. Inscription ouverte.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://fnl-rdc.com",
  },

  category: "event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Schema.org Event SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Forum National de la Logistique RDC 2027",
              startDate: "2027-05",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Kinshasa",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "CD",
                },
              },
              image: ["https://fnl-rdc.com/og-image.jpg"],
              description:
                "Forum réunissant les acteurs de la logistique, du transport et de la supply chain en RDC.",
              organizer: {
                "@type": "Organization",
                name: "FNL RDC",
                url: "https://fnl-rdc.com",
              },
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-white text-black">
        <Schema />
        {children}
      </body>
    </html>
  );
}