"use client"
import { useRouter } from 'next/navigation';

export default function TodoCard() {

    const router = useRouter();

    return (
        <div className="p-3 rounded-lg bg-white cursor-pointer drop-shadow-sm transition-all duration-200 border hover:border-black hover:drop-shadow-md" onClick={() => router.push("/to-do/1")}>
            <small className="text-sm font-medium capitalize" >To-Do title</small>
            <p className="text-sm" >Re-usable components built using Radix UI and Tailwind CSS</p>
          </div>
    );
  }