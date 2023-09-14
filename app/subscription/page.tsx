"use client"
import NavBtn from "@/components/buttons/navBtn";
import ProductCard from "@/components/cards/productCard";
import Header from "@/components/header/Header";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [sub, setSub] = useState("p543535p")

    const handleSelect = (code:string) => {
      setSub(code);
    }

    return (
      <main >
        <Header/>
        <div className="max-w-sm m-auto flex flex-col items-end gap-2 px-2 pt-2">
          <ProductCard code="p543535p" selected={sub} onClick={handleSelect}/>
          <ProductCard code="l4535l" selected={sub} onClick={handleSelect}/>
          <ProductCard code="m45325m" selected={sub} onClick={handleSelect}/>
          <NavBtn route={`/subscription/${sub}/buy-todos`} text="Continue" variant="default" />
        </div>
      </main>
    );
}
  