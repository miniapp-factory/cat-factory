import { useEffect, useState } from "react";

const cats = [
  `
   /\\_/\\
  ( o.o )
   > ^ <
  `,
  `
   |\\_/|
   / @ @ \\
  (   "   )
   \\~(*)~/
    \\~_~/
  `,
  `
   /\\_/\\  
  ( o.o )
   > ^ <
  `,
  `
   /\\_/\\  
  ( •_• )
  /   \\
  `,
  `
   /\\_/\\  
  ( -.- )
   > ^ <
  `,
];

export default function CatAscii() {
  const [cat, setCat] = useState<string>("");

  useEffect(() => {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    setCat(randomCat);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <pre className="text-2xl font-mono whitespace-pre-wrap">{cat}</pre>
    </div>
  );
}
