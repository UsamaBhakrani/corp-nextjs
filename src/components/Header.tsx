import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav>
    <Link href="/">Home</Link>
    <Link href="/performance">Performance</Link>
    <Link href="/scale">Scale</Link>
    <Link href="/reliability">Reliability</Link>
  </nav>
  )
}

export default Header