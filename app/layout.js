import { Montserrat, Roboto } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingElements from "@/components/ui/FloatingElements";
import ThemeProvider from "@/components/layout/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Pure Tech Zone | Web Development Services in Baghpat",
  description: "We build fast, SEO-optimized websites that grow your business. Top web development agency in Baghpat.",
  keywords: "Web Development Services in Baghpat, Software Development Company in Baghpat, Website Design Company in Baghpat, Ecommerce Website Developer in Baghpat",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <FloatingElements />
        </ThemeProvider>
      </body>
    </html>
  );
}
