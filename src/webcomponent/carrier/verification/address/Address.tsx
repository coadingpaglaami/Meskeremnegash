"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const countryList = [
  "United States",
  "Canada",
  "United Kingdom",
  "Bangladesh",
  "India",
]; // replace with your countries

const addressSchema = z.object({
  address1: z.string().min(3, "Address Line 1 is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  country: z.string().min(1, "Country is required"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export const Address = () => {
  const { setStepComplete } = useVerification();

  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  // Watch form changes to enable step when valid
  useEffect(() => {
    const subscription = form.watch((values) => {
      const isValid = addressSchema.safeParse(values).success;
      setStepComplete(isValid);
    });
    return () => subscription.unsubscribe();
  }, [form, setStepComplete]);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 w-full">
        {/* Address Line 1 */}
        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="123 Main Street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address Line 2 */}
        <FormField
          control={form.control}
          name="address2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Address Line 2 (Optional)
              </FormLabel>
              <FormControl>
                <Input placeholder="Apartment, suite, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Grid: City, State, Zip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Zip</FormLabel>
                <FormControl>
                  <Input placeholder="Zip" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
              <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Country</FormLabel>
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
                      {field.value || "Select country"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0 w-[250px]">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countryList.map((country) => (
                          <CommandItem
                            key={country}
                            onSelect={() => form.setValue("country", country)}
                          >
                            {country}
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
        </div>

        {/* Country Command */}
    
      </form>
    </Form>
  );
};
