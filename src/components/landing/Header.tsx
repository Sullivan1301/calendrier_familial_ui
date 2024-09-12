import Link from "next/link";
import React from "react";

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <CalendarIcon className="h-6 w-6" aria-hidden="true"/>
                <span className="sr-only">Calendrier Familial</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Fonctionnalités
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    À propos
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Inscription
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Connexion
                </Link>
            </nav>
        </header>
    )
}

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {}

function CalendarIcon(props: CalendarIconProps) {
  return <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
}