import { HomeContainer, Product } from '@/src/styles/pages/home'
import Image from 'next/image'

import shirt1 from '../assets/tshirts/1.png'
import shirt2 from '../assets/tshirts/2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />
        <footer>
          <strong>T-Shirt 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer>
          <strong>T-Shirt 2</strong>
          <span>R$ 85,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
