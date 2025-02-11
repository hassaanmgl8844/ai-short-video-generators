import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";
import {Outfit} from 'next/font/google'
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

// 50 Minutes Video is done

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
          <Toaster />          
        </body>
      </html>
    </ClerkProvider>
  );
}
