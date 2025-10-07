import type { Metadata } from "next";
import CatAscii from "@/components/cat-ascii";

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${appUrl}/icon.png`,
        ogTitle: "Xnode Mini App Template",
        ogDescription: "Mini app running on Xnode!",
      }),
    },
  };
}

export default function Home() {
  return <CatAscii />;
}
