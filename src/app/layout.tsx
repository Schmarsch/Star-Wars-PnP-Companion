import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Star Wars - DnD Companion",
  description: "An app to help you play a Star Wars DnD campaign",
  icons: [{ rel: "icon", url: "/favicon(white).ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-gradient-to-b from-red-900 via-red-950 to-slate-800 min-h-screen`}>
        <TRPCReactProvider headers={headers()}>
            <div className="p-2">
              <Navbar />
              {children}
            </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
