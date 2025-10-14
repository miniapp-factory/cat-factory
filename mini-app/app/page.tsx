import { Metadata } from 'next';
import { title, description } from '../lib/metadata';
import RandomCat from '../components/random-cat';

export async function generateMetadata(): Promise<Metadata> {
  const url = process.env.NEXT_PUBLIC_URL ?? '';
  return {
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          label: 'Open',
          url: `${url}/`,
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <RandomCat />
    </main>
  );
}
