


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" pt-56 flex justify-center items-center">
      <main >{children}</main>
    </section>
  );
}
