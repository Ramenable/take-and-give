import Link from 'next/link'
import OceanLayout from '../../components/oceanLayout'

export default function Ocean() {
    return (
        <OceanLayout>
            <h1>Ocean</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
        </OceanLayout>
      )
    
  }