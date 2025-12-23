import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Swahili Loop - Mtandao wa Kijamii wa Kujifunza',
  description: 'Mtandao wa Kijamii wa Kujifunza kwa Kiswahili - A social learning platform for Swahili speakers',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
