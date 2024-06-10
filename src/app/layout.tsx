import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "EuroAutoParts",
    description: "EuroAutoParts",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
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
                <div id="root">{children}</div>
            </body>
        </html>

    )
}