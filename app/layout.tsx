import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './themeProvider';

//2.Create a new popiins variable like this
const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Quick Task App | ShowCase',
    description: "Jabbaroff's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Structured Data (Organization Schema) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            url: 'https://jabbaroff.com',
                            logo: 'https://jabbaroff/logo.png',
                        }),
                    }}
                />

                {/* Standard Favicon */}
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

                {/* Additional Favicon Sizes */}
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                {/* Apple Touch Icon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

                {/* Shortcut Icon */}
                <link rel="shortcut icon" href="/favicon.ico" />

                {/* Android and Chrome Web Apps */}
                <link
                    rel="icon"
                    type="image/png"
                    href="/android-chrome-192x192.png"
                    sizes="192x192"
                />

                {/* Windows Tile */}
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

                {/* Safari Pinned Tab Icon */}
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF1800" />

                {/* Manifest File */}
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body>
                <Toaster />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className={poppins.variable}>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
