import EditBtn from "@/components/buttons/editBtn";
import StateBtn from "@/components/buttons/stateBtn";

export default function Page() {
    return (
      <main className="max-w-sm m-auto flex flex-col px-2 pt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-3xl" >To-Do title</h2>
          <small className="font-medium text-sm">14:00, May 23 2030</small>
          <p className="text-base">
          The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
          Pine apples. 
          </p>
        </div>
        <div className="flex justify-end pt-6 gap-4">
          <EditBtn/>
          <StateBtn text="I Failed :(" variant="destructive" />
          <StateBtn text="Completed" variant="default" />
        </div>
      </main>
    );
}
  