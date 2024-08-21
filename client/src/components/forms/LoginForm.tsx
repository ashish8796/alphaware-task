import { LoginFormData, loginFormSchema } from "../../schemas/authSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "../../types";
import Button from "../ui/Button";

const LoginForm = () => {
  const { handleSubmit, register, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  console.log("formState", formState.errors);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 border-red-200 border-2 p-4">
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

export default LoginForm;
