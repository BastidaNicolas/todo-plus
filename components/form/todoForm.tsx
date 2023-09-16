"use client"
import { formSchema } from "@/types/todoFormType";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { link } from "fs";
import { useEffect } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { DateTimePicker } from "../ui/date-time-picker/date-time-picker";
import {useDatePicker} from 'react-aria'
import { getLocalTimeZone, parseAbsolute } from "@internationalized/date";
import CompleteActionModal from "../modals/completeActionModal";
import { useRouter } from "next/navigation";

export default function TodoForm({todoData}:{todoData?:any}) {

  const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title:"",
            date: new Date(),
            description:"",
            sync:false
        }
    })

    const onSubmit = (data:any) => {
      console.log("activated", data)
    }

    const handleSubmitConfirmationConfirm = (data:any) => {
      form.handleSubmit(onSubmit)(data);
    }

    useEffect(() => {
      if(todoData){
        form.setValue("title", todoData.title);
        form.setValue("date", todoData.date);
        form.setValue("description", todoData.description);
        form.setValue("sync", todoData.sync);
      }
    }, [todoData, form])

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitConfirmationConfirm)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="this goes title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date" 
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose date & time</FormLabel>
                <FormControl>
                 <DateTimePicker 
                    value={!!field.value ? parseAbsolute(field.value.toISOString(), getLocalTimeZone()) : null}
                    onChange={(date) => {
                      field.onChange(!!date ? date.toDate(getLocalTimeZone()) : null);
                    }}
                    shouldCloseOnSelect={false}
                    granularity={"minute"} 
                    aria-label="set date and time"
                  />
                 </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description" 
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
              control={form.control}
              name="sync"
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <FormItem className="flex items-center">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="gc-sync"
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                  <Label htmlFor="gc-sync" className="text-sm font-medium">Sync with Google Calendar</Label>
                </div>
              )}
            />
          <div className="flex justify-end gap-4">
            <Button type="reset" variant={"link"} onClick={() => router.back()} >Cancel</Button>
            <CompleteActionModal formIsValid={form.formState.isValid} onSubmit={handleSubmitConfirmationConfirm} btnText="Save" />
          </div>
        </form>
    </Form>
    );
}
  