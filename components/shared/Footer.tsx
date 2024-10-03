import React from 'react'
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="w-full shrink-0 border-t geist-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2024 BHARATCHITRA. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer