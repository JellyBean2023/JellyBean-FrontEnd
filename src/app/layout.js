import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../components/Head/Header"
import Footer from "../components/Foot/Footer"
import StyledComponentsRegistry from './lib/registry';
import RecoilHOC from './RecoilHOC';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '천재교육 디지털 러닝',
  description: '천재교육 디지털 러닝 GENIA',
  themeColor: "#FFB400",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RecoilHOC>
        <Header />
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        <Footer />
      </RecoilHOC>
      </body>
    </html>
  )
}
