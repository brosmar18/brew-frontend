import Image from 'next/image'
import styles from './page.module.css'
import {Header, Intro, Gallery} from '@/containers';


export default function Home() {
  return (
    <div>
      <Header />
      <Gallery />
      <Intro />
    </div>
  )
}
