import './globals.css';

export const metadata = {
  title: 'Ahmed Ben Abdallah',
  description: 'I forge interactive worlds with intent — game systems & interactive design.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    title: 'Ahmed Ben Abdallah',
    description: 'I forge interactive worlds with intent — game systems & interactive design.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ben Abdallah',
    description: 'I forge interactive worlds with intent — game systems & interactive design.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 bg-[#0a0a0a] antialiased overflow-hidden">
        <head>
          <meta name="theme-color" content="#0a0a0a" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ahmed Ben Abdallah" />
          <meta property="og:description" content="I forge interactive worlds with intent — game systems & interactive design." />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ahmed Ben Abdallah" />
          <meta name="twitter:description" content="I forge interactive worlds with intent — game systems & interactive design." />
          <meta name="twitter:image" content="/og-image.png" />
        </head>
        {children}
      </body>
    </html>
  );
}
