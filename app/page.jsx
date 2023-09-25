// import Image from 'next/image'
import Link from 'next/link'
import Gameplay from './gameplay/page'
import Players from './players/page'
import GameContainer from './components/gamecontainer'



export default function Home() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="">

    {/* <Gameplay />
    <Players /> */}
    <GameContainer />

      </div>
    </main>
  )
}
