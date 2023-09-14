"use client"
import NavBtn from "@/components/buttons/navBtn";
import ProductCard from "@/components/cards/productCard";
import Header from "@/components/header/Header";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {

    const [qty, setQty] = useState(0);
    const params = useParams(); // this is for when i need to get the productCode param for the stripe checkout

    const handleSelect = (code:number) => {
      if(code === qty) return setQty(0);
      return setQty(code);
    }

    return (
      <main >
        <Header/>
        <div className="max-w-sm m-auto flex flex-col items-end gap-2 px-2 pt-2">
          <ProductCard code={100} selected={qty} onClick={handleSelect}/>
          <ProductCard code={200} selected={qty} onClick={handleSelect}/>
          <ProductCard code={300} selected={qty} onClick={handleSelect}/>
          <div className="flex gap-4 items-center w-full py-6" >
            <Input placeholder="Add custom amount" type="number" onChange={(e) => handleSelect(Number(e.target.value))} value={qty}/>
            <small className="w-20 font-medium text-sm text-right" >$0</small>
          </div>
          {/* make this into a button that recieves the qty and sub code so it genarates the stripe checkout and does the redir */}
          <NavBtn route="/to-do" text="Go to checkout" variant="default" /> 
        </div>
      </main>
    );
}
  