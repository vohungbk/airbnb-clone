import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { createAirbnb } from '../actions';

async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const handleCreateAirbnbHome = createAirbnb.bind(null, {
    userId: user.id,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 rounded-full border px-2 py-2 lg:px-4 lg:py-2">
          <MenuIcon className="size-6 lg:size-5" />
          <Image
            src={
              user?.picture ||
              'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
            }
            width={32}
            height={32}
            alt="Image user default"
            className="hidden size-8 rounded-full lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form className="w-full" action={handleCreateAirbnbHome}>
                <button type="submit" className="w-full text-start">
                  Airbnb your Home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes">My Listing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favorites">My Favorites</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations">My Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
