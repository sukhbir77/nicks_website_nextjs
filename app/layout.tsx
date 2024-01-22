import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './ui/NavBar'
import Footer from './ui/Footer'

const inter = Pixelify_Sans({ preload: false })

export const metadata: Metadata = {
  title: "Nick's Music",
  description: 'Feel the Beat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.main}>
          <Image
            src={"/tv_frame.png"}
            alt="Main frame"
            style={{ zIndex: -1, border: "1px solid yellow" }}
            fill={true}
            quality={100}
          />
          <Image
            src={"/bg.gif"}
            style={{ zIndex: -3, border: "1px solid blue" }}
            alt="Background Noise"
            fill={true}
            quality={100}
          />
          <NavBar></NavBar>

          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
