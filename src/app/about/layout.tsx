import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nepal Television",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        About us
      </nav>
      <main>{children}</main>
    </>
  );
}
