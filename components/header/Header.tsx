'use client'
import { usePathname } from "next/navigation";

export default function Header() {

    const lol = usePathname();

    // console.log(lol)

    return (
      <div className="max-w-sm m-auto">
        This is for when the header and content have the same max width in the design file
      </div>
    );

}
  