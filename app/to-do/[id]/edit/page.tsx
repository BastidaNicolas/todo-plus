import TodoForm from "@/components/form/todoForm";

export default function Page() {
    return (
      <div className="max-w-sm m-auto flex flex-col pt-4 px-2">
        <TodoForm todoData={{title: "title", date:new Date(), description:"klthis is a test", sync:true}}/>
      </div>
    );
}
  