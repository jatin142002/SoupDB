import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MantineProvider>
        <AuthProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </AuthProvider>
      </MantineProvider>
    </html>
  );
}