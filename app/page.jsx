// import Image from 'next/image'
import Link from 'next/link'
import Gameplay from './gameplay/page'
import Players from './players/page'



export default function Home() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="">

    <Gameplay />
    <Players />

      </div>
    </main>
  )
}
