import TodoForm from "@/components/form/todoForm";

export default function Page() {
    return (
      <div className="max-w-sm m-auto flex flex-col pt-4 px-2">
        <TodoForm todoData={{title: "title", date:new Date("Tue Sep 19 2023 07:08:31 GMT-0300"), description:"klthis is a test", sync:true}}/>
      </div>
    );
}
  