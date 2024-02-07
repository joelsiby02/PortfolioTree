import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
const inter = Inter({ subsets: ['latin'] });
import { NavbarDemo } from '@/components/Navbar';
import Logo from '@/components/Logo';
export const metadata: Metadata = {
  title: 'Joel Siby',
  description: 'Data Science',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {/* <Logo/> */}

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
