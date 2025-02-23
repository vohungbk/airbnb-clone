import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import DesktopLogo from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';
import UserNav from './UserNav';

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 lg:px-0">
        <Link href={'/'}>
          <Image src={DesktopLogo} alt="Desktop logo" className="hidden w-32 lg:block" />
          <Image src={MobileLogo} alt="Desktop logo" className="block w-32 lg:hidden" />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1></h1>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}

export default Navbar;
