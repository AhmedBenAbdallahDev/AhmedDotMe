import './globals.css';

export const metadata = {
  title: 'AhmedDotMe',
  description: 'Personal site — TextScramble demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 bg-[#0a0a0a] antialiased overflow-hidden">{children}</body>
    </html>
  );
}
