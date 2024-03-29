import "@/styles/Globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // offset navbar height
  return <section className='pt-20'>{children}</section>
}
