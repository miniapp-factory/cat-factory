"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/icon.png";
import { title } from "@/lib/metadata";

export function Header() {
  return (
    <>
      <header className="sticky flex place-items-center gap-4 border-b p-4 max-md:hidden">
        <Link href="/">
          <div className="flex place-items-center gap-2">
            <Image
              className="size-[40px]"
              src={Icon}
              alt="icon"
              width={40}
              height={40}
            />
            <span className="text-xl">{title}</span>
          </div>
        </Link>
      </header>
      <header className="sticky flex place-content-between border-b p-4 md:hidden">
        <Link href="/">
          <div className="flex place-items-center gap-2">
            <Image
              className="size-[40px]"
              src={Icon}
              alt="icon"
              width={40}
              height={40}
            />
            <span className="text-xl">{title}</span>
          </div>
        </Link>
      </header>
    </>
  );
}
