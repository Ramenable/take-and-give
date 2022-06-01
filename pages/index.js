import Head from 'next/head'
import Link from 'next/link'
import TakeButtonLayout from '../components/takeButtonLayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Go Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link> 
      </Head>

      <main>
        <div id='mySidebar' class='sidebar'>
          <a href="#backgrounds">
            <div className="sideText">Backgrounds</div>
          </a>
          <a href="#projects">
            <div className="sideText">Projects</div>
          </a>
          <a href="#people">
            <div className="sideText">People</div>
          </a>
          <a href="#going">
            <div className="sideText">Going 8th</div>
          </a>
        </div>
        <div id="backgrounds">
          <h1 className="title">
            Welcome to the Jungle
          </h1>

          <p className="description">
            It's an 8th
          </p>
          <div className="grid">
            <Link href="/themes/ocean">
              <a className="card item-animation">
                <h3>Dive into the Ocean &rarr;</h3>
                <p>Depths Nautilus.</p>
              </a>
            </Link>

            <Link href="/themes/campfire">
              <a className="card item-animation">
                <h3>Sit by the Campfire &rarr;</h3>
                <p>Infernal Annie.</p>
              </a>
            </Link>

            <Link href="/themes/winterland">
              <a className="card item-animation">
                <h3>Walk through Winterland &rarr;</h3>
                <p>Snowball Nunu.</p>
              </a>
            </Link>

            <Link href="/themes/grass">
              <a className="card item-animation">
                <h3>Sway with the Grass &rarr;</h3>
                <p>Woodland Ivern.</p>
              </a>
            </Link>
          </div>
        </div>

        <div id="projects">
          <h1 className="title">
            Personal Projects
          </h1>

          <p className="description">
            Hmm
          </p>
        </div>
        <div id="people"></div>
          <h1 className="title">
            The Boys
          </h1>

          <p className="description">
            Kekkles
          </p>
        <div id="going">
          <h1 className="title">
            Raphie Going 8th
          </h1>

          <p className="description">
            Smodge
          </p>
          <div className="grid">
            <Link href="https://lolchess.gg/profile/na/chineseartist007">
              <a className="card item-animation">
                <h3>Smodge &rarr;</h3>
                <p>Bobo.</p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      {/* <div className='cup'></div> */}

      <TakeButtonLayout></TakeButtonLayout>

      {/* <SideNavbarLayout></SideNavbarLayout> */}

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}
