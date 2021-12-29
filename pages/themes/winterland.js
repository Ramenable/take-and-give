import Link from 'next/link'
import WinterlandLayout from '../../components/winterlandLayout'

export default function Winterland() {
    return (
        <WinterlandLayout>
            <h1>Winterland</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
        </WinterlandLayout>
      )
    
  }