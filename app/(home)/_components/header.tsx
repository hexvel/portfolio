"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="w-full py-2 sticky flex items-center justify-between px-8">
      <Logo />
      <Link href="https://t.me/hexvel" target="_blank">
        <Button
          variant="outline"
          size="lg"
          className="flex justify-between font-medium"
        >
          <Image
            src="/telegram-logo.png"
            width={30}
            height={30}
            alt="contant with me"
          />
          Telegram
        </Button>
      </Link>
    </div>
  );
};

export default Header;
