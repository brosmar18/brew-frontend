import Image from 'next/image'
import styles from './page.module.css'
import {Header, Intro, Gallery, Footer} from '@/containers';


export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  )
}
