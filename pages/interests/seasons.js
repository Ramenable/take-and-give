import Link from 'next/link'

export default function seasons() {
    return (
        <div>
            <h1 className="title">
                Seasons
            </h1>
            <p className="description">
                past scenes I remember fondly, visualized in CSS
              </p>
            <div className="grid">
                <Link href="/themes/ocean">
                  <a className="card item-animation">
                    <h3>Penghu Ocean &rarr;</h3>
                  </a>
                </Link>

                <Link href="/themes/campfire">
                  <a className="card item-animation">
                    <h3>Pennsylvania Campfire &rarr;</h3>
                  </a>
                </Link>

                <Link href="/themes/winterland">
                  <a className="card item-animation">
                    <h3>Delaware Flurries &rarr;</h3>
                  </a>
                </Link>

                <Link href="/themes/grass">
                  <a className="card item-animation">
                    <h3>Georgian Night Sky &rarr;</h3>
                  </a>
                </Link>
            </div>
        </div>
      )
    
  }