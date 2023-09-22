import NavBtn from '@/components/buttons/navBtn';
import TodoCard from '@/components/cards/todoCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect("/login")
  }

  console.log("HOME SERVER SIDE SESSION", session)

  return (
    <main className="max-w-sm m-auto flex flex-col items-center px-2 pt-2">
        <div className="flex justify-between items-center w-full pb-4">
          <small className="font-medium text-sm" >To-Dos:</small>
          <small className="text-sm text-right" >20/300</small>
        </div>
        <div className="flex flex-col gap-2">
          <TodoCard/>
        </div>
        <NavBtn className="fixed bottom-4 right-2" text="Create To-Do" variant="default" route="/create" />
      </main>
  );
}
