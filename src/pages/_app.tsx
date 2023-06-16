import type { AppProps } from 'next/app'
import { globalStyles } from '@/src/styles/global'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/src/styles/pages/app'
import Link from 'next/link'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
