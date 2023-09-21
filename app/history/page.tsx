import NavBtn from "@/components/buttons/navBtn";
import TodoCard from "@/components/cards/todoCard";
import { Checkbox } from "@/components/ui/checkbox"


export default function Page() {
    return (
      <main className="max-w-sm m-auto flex flex-col px-2">
        {/* make into a component */}
        <div className="flex w-full gap-4 pt-2 pb-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="completed" value={"completed"} />
            <label
              htmlFor="completed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Completed
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="failed" value={"failed"}/>
            <label
              htmlFor="failed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Failed
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <TodoCard/>
        </div>
        <NavBtn className="fixed bottom-4 right-2" text="Create To-Do" variant="default" route="/create" />
      </main>
    );
}
  