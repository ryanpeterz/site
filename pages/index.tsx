import { Inter } from 'next/font/google'
import Link from 'next/link';
import { Content as Experience } from './experience';
import { Content as Affiliations } from './affiliations';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
        style={{color: "whitesmoke"}}
      >
      Liberty implies privacy.
      <div style={{height: "80px"}}/>
      <Experience/>
      <Affiliations/>
      <Link href="mailto:contact@ryanpeterz.com">contact@ryanpeterz.com</Link>
      <Link href="https://github.com/ryanpeterz/bookworm/blob/main/main.py">github.com/ryanpeterz</Link>
    </main>
  )
}
