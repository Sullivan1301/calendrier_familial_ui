import Link from "next/link";
import React from "react";

export const Footer = () => {
    return (<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Calendrier Familial. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Conditions d'Utilisation
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Confidentialité
            </Link>
        </nav>
    </footer>)
}