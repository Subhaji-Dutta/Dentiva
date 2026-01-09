import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import TanStackProvider from "@/components/providers/TanStackProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dentiva - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Available 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased dark`}>
        <TanStackProvider>
          <ClerkProvider
            appearance={{
              variables: {
                colorPrimary: "#e78a53",
                colorBackground: "#f3f4f6",
                colorText: "#111827",
                colorTextSecondary: "#6b7280",
                colorInputBackground: "#f3f4f6",
              },
            }}
          >
            <Toaster />
            {children}
          </ClerkProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
