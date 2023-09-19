"use client"
import NavBtn from "@/components/buttons/navBtn";
import ProductCard from "@/components/cards/productCard";
import Header from "@/components/header/Header";
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
          <ProductCard title="Subscribe for 1 month" price={"3,99"} description="I grant you access to my revolutionary platform for a month, sounds good? "code="p543535p" selected={sub} onClick={handleSelect}/>
          <ProductCard title="Subscribe for 4 month" price={"11,99"} description="I grant you access to my revolutionary platform for 4 months, sounds better? " code="l4535l" selected={sub} onClick={handleSelect}/>
          <ProductCard title="Best human in the world" price={"35,99"} description="What about, you get access to my stellar platform for a year. Right? But that’s not all, you can also sync to your google calendar when you create the to-do." code="m45325m" selected={sub} onClick={handleSelect}/>
          <NavBtn route={`/subscription/${sub}/buy-todos`} text="Continue" variant="default" />
        </div>
      </main>
    );
}
  