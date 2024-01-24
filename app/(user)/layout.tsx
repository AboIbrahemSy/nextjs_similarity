import "@/styles/Globals.scss";

export const metadata = {
  icon: "@/public/favicon.ico",
  title: 'Posts',
  description: 'Free & open-source text similarity API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // offset navbar height
  return <section className='relative h-screen flex items-center justify-center overflow-x-hidden dark:text-stone-200 antialiased'>{children}</section>
}
