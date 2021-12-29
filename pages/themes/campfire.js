import Link from 'next/link'
import CampfireLayout from '../../components/campfireLayout'

export default function Ocean() {
    return (
        <CampfireLayout>
            <h1>Campfire</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
        </CampfireLayout>
      )
    
  }