"use client"
import { useRouter } from 'next/navigation';

export default function ProductCard() {

    const router = useRouter();

    return (
        <div className="p-3 rounded-lg bg-white cursor-pointer drop-shadow-sm transition-all duration-200 border hover:border-black hover:drop-shadow-md" onClick={() => console.log("selected")}>
            <div className='flex justify-between'>
              <small className="text-sm font-medium capitalize" >To-Do title</small>
              <small className="text-sm font-medium text-right">$3,99</small>
            </div>
            <p className="text-sm" >I grant you access to my revolutionary platform for a month, sounds good?</p>
        </div>
    );
  }