import Providers from "@/providers/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/ui/Toast";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/styles/Globals.scss";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  icon: "@/public/favicon.ico",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-stone-900 dark:text-stone-200 antialiased", inter.className)}>
      <body className="min-h-screen bg-stone-50 dark:bg-slate-900 antialiased">
        <Providers>
          {children}
          <Toaster position="bottom-right"/>
          <Navbar/>
        </Providers>
        {/* Alow more hieght on mobile devices */}
        <div className="h:40 md:hidden" />
      </body>
    </html>
  );
}
