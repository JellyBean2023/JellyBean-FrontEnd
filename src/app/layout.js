import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Header from "../components/Head/Header"
import Footer from "../components/Foot/Footer"
import StyledComponentsRegistry from './lib/registry';
import Providers from '@/components/Providers';

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata = {
  title: '천재교육 디지털 러닝',
  description: '천재교육 디지털 러닝 GENIA',
  themeColor: "#FFB400",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Providers>
          <Header />
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
