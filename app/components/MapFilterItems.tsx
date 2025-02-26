'use client';
import React, { useCallback } from 'react';
import { categoryItems } from '../lib/categoryItems';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function MapFilterItems() {
  const searchParams = useSearchParams();
  const search = searchParams.get('filter');
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="no-scrollbar mt-5 flex w-full gap-x-10 overflow-x-scroll">
      {categoryItems.map((item) => (
        <Link
          key={item.id}
          href={pathname + '?' + createQueryString('filter', item.name)}
          className={cn(
            search === item.name ? 'border-b-2 border-black pb-2' : 'opacity-70',
            'flex flex-shrink-0 flex-col items-center gap-y-3',
          )}
        >
          <div className="relative size-6">
            <Image
              src={item.imageUrl}
              alt="Category image"
              className="size-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default MapFilterItems;
