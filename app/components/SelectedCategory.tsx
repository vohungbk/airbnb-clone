'use client';

import React, { useState } from 'react';
import { categoryItems } from '../lib/categoryItems';
import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

function SelectedCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  return (
    <div className="mx-auto mb-36 mt-10 grid w-3/5 grid-cols-4 gap-8">
      <input type="hidden" name="categoryName" value={selectedCategory} />
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            onClick={() => setSelectedCategory(item.name)}
            className={cn({
              'border-primary': selectedCategory === item.name,
            })}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={32}
                height={32}
                className="size-8"
              />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SelectedCategory;
