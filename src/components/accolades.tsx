'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const accolades = [
  {
    title: 'Panoptic',
    description: 'Geopolitical perspectives using Generative AI',
    link: 'https://apps.apple.com/gb/app/adarga-panoptic/id6480463180',
    linkText: 'Download on the App Store',
    image: '/panoptic-preview.jpeg',
  },
  {
    title: 'Mentioned in The Verge',
    description: 'Referenced in <i>The Installer</i> newsletter by David Pierce.',
    link: 'https://www.theverge.com/2024/11/10/24291418/stardew-valley-mario-luigi-brothership-heretic-installer',
    linkText: 'Read the article',
    image: '/verge-snippet.png',
  },
  {
    title: 'Excersing Presentation Skills',
    description: 'Prentending I know what I am talking about.',
    image: '/presenting.jpeg',
  },
  {
    title: 'Winning Awards',
    description: 'Multi-year Computing Security Awards Winner',
    image: '/security-awards.jpg',
  },
];

export function Accolades() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-muted-foreground">Things of note...</h2>
      <div className="flex flex-col gap-4">
        {accolades.map((accolade) => (
          <Card key={accolade.title} className="h-48">
            <CardHeader className="flex flex-row items-center gap-4 h-full p-4">
              <div className="relative w-1/3 h-full cursor-pointer" onClick={() => setSelectedImage(accolade.image)}>
                <Image
                  src={accolade.image}
                  alt={accolade.title}
                  className="rounded-md object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <CardTitle>{accolade.title}</CardTitle>
                <CardDescription dangerouslySetInnerHTML={{ __html: accolade.description }} />
                {accolade.link && accolade.linkText && (
                  <Button className="group w-auto" variant="outline">
                    <Link href={accolade.link} className="flex items-center p-0">
                      {accolade.linkText}
                      <ArrowRight
                        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full m-4">
            <div className="relative w-full h-full aspect-[4/3]">
              <Image
                src={selectedImage}
                alt="Full size preview"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
