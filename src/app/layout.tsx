import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const lineFont = localFont({
    src: "../../static/fonts/LINESeedSansTH_A_Rg.ttf",
    variable: "--font-lineseedsans"
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${lineFont.variable}`}>
            <title>EuroAutoParts</title>
            <meta name="description" content="EuroAutoParts" /> 
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body>
                <Navbar />
                <div style={{ paddingTop: '77.32px' }}>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
