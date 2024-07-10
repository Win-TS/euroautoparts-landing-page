import Head from "next/head";
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const lineFont = localFont({
    src: "../../public/fonts/LINESeedSansTH_A_Rg.ttf",
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
            <Head>
                <title>
                    EuroAutoParts อะไหล่รถยุโรป BMW Benz MINI คุณภาพดี ราคาย่อมเยาว์
                </title>
                <meta
                    name="description"
                    content="อะไหล่รถยนต์ BMW Benz MINI ทั้งภายในและภายนอก ราคาย่อมเยาว์ คุณภาพดี ส่งกทมใน 0-2 วัน ส่งตจว 1-3 วัน"
                    key="desc"
                />
            </Head>
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
