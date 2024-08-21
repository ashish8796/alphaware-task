import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupFormSchema } from "../../schemas/authSchema";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "../../types";
import Button from "../ui/Button";

interface SignupFormProps {}
const SignupForm = (props: SignupFormProps) => {
  const { handleSubmit, register } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 border-red-200 border-2 p-4">
          <CustomFormField
            register={register}
            name="name"
            label="Name"
            placeholder="Name"
            fieldType={FormFieldType.INPUT}
          />

          <CustomFormField
            register={register}
            name="email"
            label="Email"
            placeholder="abc@email.com"
            fieldType={FormFieldType.INPUT}
          />

          <CustomFormField
            register={register}
            name="password"
            label="password"
            placeholder="******"
            fieldType={FormFieldType.INPUT}
          />
        </div>
        <Button type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
