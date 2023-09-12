import Logo from '@/components/SVGs/logo';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-sm m-auto flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col items-center justify-end h-3/6">
        <Logo className='h-16 w-16'/>
        <div className='pb-28'></div>
        <Button><Mail className="w-6 h-6 mr-2"/>Login with Gmail</Button>
      </div>
      <div className='w-full text-center pb-4'>
        <small className='text-sm font-medium leading-none'>Like the project?</small>
        <a href='https://nicolas.bastida.dev/#contact' target='_blank' className="block text-lg font-semibold">Contact Developer</a>
      </div>
    </main>
  );
}
