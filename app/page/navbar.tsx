import Link from 'next/link';
import { NAV_LINKS } from '@/app/assets/index';
// import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <ul className="flex h-full justify-center gap-3 lg:flex lg:gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
           
            className="regular-16 h-[48px] border-2 rounded-xl flexCenter cursor-pointer md:p-2 md:px-3
             pb-1.5 text-black transition-all hover:font-bold"
          >
            {link.label}
          </Link>
          
        ))}
        <form
          // action={async () => {
          //   'use server';
          //   await signOut();
          // }}
        >
          <Link href="/login">
          <button
            type="submit"
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-black hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
            
          </button>
          </Link>
        </form>
      </ul>
    </nav>
  );
}
