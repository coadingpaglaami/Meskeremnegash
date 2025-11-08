"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useVerification } from "@/app/(protected)/(carrier)/verification/(verification)/VerificationLayOut";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Search } from "lucide-react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Zod schema
const personalSchema = z.object({
  fullName: z.string().min(1),
  dateOfBirth: z.date({ message: "Date of Birth required" }),
  nationality: z.string().min(1),
  email: z.string().email(),
  nationalId: z.string().min(1, "National ID is required"),
});

type PersonalFormValues = z.infer<typeof personalSchema>;

const nationalities = ["Bangladeshi", "American", "Indian", "Other"];

export const PersonalInformation = () => {
  const { setStepComplete } = useVerification();

  const form = useForm<PersonalFormValues>({
    resolver: zodResolver(personalSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "John Doe",
      dateOfBirth: undefined,
      nationality: "",
      email: "johndoe@example.com",
      nationalId: "",
    },
  });

  // Watch form validity
  useEffect(() => {
    const subscription = form.watch(() => {
      setStepComplete(form.formState.isValid);
    });
    return () => subscription.unsubscribe();
  }, [form, setStepComplete]);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 font-montserrat">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Full Name</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Date Of Birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value
                        ? format(field.value, "dd MMM yyyy")
                        : "Pick a date"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0 w-[250px]">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nationality */}
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Nationality</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-between text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value || "Select nationality"}
                      <Search className="w-4 h-4 ml-2 opacity-60" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0 w-[250px]">
                  <Command>
                    <CommandInput placeholder="Search nationality..." />
                    <CommandList>
                      <CommandEmpty>No nationality found.</CommandEmpty>
                      <CommandGroup>
                        {nationalities.map((nation) => (
                          <CommandItem
                            key={nation}
                            onSelect={() => form.setValue("nationality", nation)}
                          >
                            {nation}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email Address</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* National ID */}
        <FormField
          control={form.control}
          name="nationalId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">National ID Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your National ID" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
