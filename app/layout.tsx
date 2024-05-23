import type { Metadata } from "next"
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/util/cn"
import "./globals.css"
import { type ReactNode } from "react"

const fontSans = FontSans({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Zenji",
    description: "Zenji is a platform for learning Japanese",
}

type RootLayoutProps = Readonly<{
    children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="h-full">
            <body
                className={cn(
                    "h-full min-h-dvh font-sans antialiased",
                    fontSans.variable,
                )}
            >
                {children}
            </body>
        </html>
    )
}
