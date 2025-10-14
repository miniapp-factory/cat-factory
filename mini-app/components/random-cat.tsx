'use client';
import { useState, useEffect } from 'react';

export default function RandomCat() {
  const [url, setUrl] = useState<string>('');

  const fetchCat = async () => {
    try {
      const res = await fetch('https://aws.random.cat/meow');
      const data = await res.json();
      setUrl(data.file);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {url && (
        <img
          src={url}
          alt="Random cat"
          className="max-w-full h-auto rounded"
        />
      )}
      <button
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
        onClick={fetchCat}
      >
        New Cat
      </button>
    </div>
  );
}
