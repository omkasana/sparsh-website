import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// meta data part

// page indexing on google saerch
export const metadata: Metadata = {
  metadataBase: new URL("https://sparshpolymer.com"),
  title: {
    default: "Sparsh Polymer - Premium EVA Shoe Sole Manufacturer in Delhi",
    template: "%s | Sparsh Polymer",
  },
  description:
    "Leading EVA shoe sole manufacturer in Delhi since 2009. Premium quality EVA soles for footwear industry. ISO certified, wholesale & custom manufacturing available.",
  keywords: [
    "sparsh polymer",
    "sparsh soles",
    "EVA sole manufacturer",
    "EVA shoe soles",
    "shoe sole manufacturer Delhi",
    "footwear sole supplier",
    "EVA soles India",
    "Mangolpuri industrial area",
    "premium shoe soles",
    "footwear manufacturing",
    "wholesale shoe soles",
    "custom EVA soles",
  ],

  //more detaisl about owner
  authors: [{ name: "Sparsh Polymer" }],
  creator: "Sparsh Polymer",
  publisher: "Sparsh Polymer",

  // preview or look when sharing the websites link
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sparshpolymer.com",
    siteName: "Sparsh Polymer",
    title: "Sparsh Polymer - EVA Shoe Sole Manufacturer",
    description:
      "Leading EVA shoe sole manufacturer in Delhi since 2009. ISO certified, premium quality soles for footwear industry.",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Create this 1200x630 image
    //     width: 1200,
    //     height: 630,
    //     alt: "Sparsh Polymer - EVA Shoe Soles",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
