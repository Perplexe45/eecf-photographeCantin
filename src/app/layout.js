import Container from '../../components/Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';

import Head from 'next/head';
//import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Charles Cantin',
  description: 'Port folio de Charles Cantin',
}

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body>
        <Container>
          <div className={inter.className}>{children}</div>
        </Container>
      </body>
    </html>
  )
}

