'use client';

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Terms & Conditions', href: '/terms' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="fixed w-full bg-white/90           z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-primary">MedSupply</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/portal" className="btn-primary">
              Portal Login
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20           z-40"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu panel */}
          <div className="relative z-50 flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-primary">MedSupply</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    className="block w-full text-left rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      router.push(item.href)
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <button
                  className="btn-primary w-full text-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    router.push('/portal')
                  }}
                >
                  Portal Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 