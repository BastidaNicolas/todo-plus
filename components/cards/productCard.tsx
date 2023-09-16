"use client"
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductCard({title, price, description, code, onClick, selected}:{title:string,price:number|string, description?:string,  onClick:any, code:string|number, selected:string|number}) {

    const sParam = useSearchParams();

    return (
        <div className={`w-full select-none p-3 rounded-lg bg-white cursor-pointer drop-shadow-sm transition-all duration-200 border hover:border-black hover:drop-shadow-md ${selected === code && "border-black"}`} onClick={() => onClick(code)}>
            <div className='flex justify-between'>
              <small className="text-sm font-medium capitalize" >{title}</small>
              <small className="text-sm font-medium text-right">${price}</small>
            </div>
            <p className="text-sm" >{description}</p>
        </div>
    );
  }