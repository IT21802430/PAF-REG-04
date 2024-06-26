import cn from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, FC } from "react";
import { FieldValues, FormProvider, SubmitHandler, UseFormProps, UseFormReturn, useForm, useFormContext } from "react-hook-form";
import { TypeOf, ZodSchema } from "zod";

interface UseZodFormProps<T extends ZodSchema<FieldValues>> extends UseFormProps<TypeOf<T>> {
  schema: T;
}

export const useZodForm = <T extends ZodSchema<FieldValues>>({
  schema,
  ...formConfig
}: UseZodFormProps<T>) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};

interface FieldErrorProps {
  name?: string;
}

export const FieldError: FC<FieldErrorProps> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) {
    return null;
  }

  const error = errors[name];

  if (!error) {
    return null;
  }

  return (
    <div className="mt-2 text-sm font-bold text-red-500">
      {error.message as string}
    </div>
  );
};

interface FormProps<T extends FieldValues = Record<string, unknown>> extends Omit<ComponentProps<"form">, "onSubmit"> {
  className?: string;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({
  children,
  className = "",
  form,
  onSubmit,
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset
          className={cn("flex flex-col", className)}
          disabled={form.formState.isSubmitting}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};