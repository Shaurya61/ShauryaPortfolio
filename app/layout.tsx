import Header from "@/components/header";
import "./globals.css";
import localFont from "next/font/local";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

// Self-hosted: next/font/google in Next 13.4 can't parse current Google Fonts URLs
const sans = localFont({
  src: "./fonts/mona-sans-latin.woff2",
  weight: "200 900",
  variable: "--font-sans",
});

// Only for things that are code: branch names and commit messages
const mono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght.woff2",
  weight: "100 800",
  variable: "--font-mono",
});

export const metadata = {
  title: "Shaurya Nayyar, full-stack engineer",
  description:
    "Shaurya Nayyar is a full-stack engineer who builds products end to end, from backend systems to AI features, and the maker of Sayso.",
};

// Applies the saved or system theme before first paint to avoid a flash
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
