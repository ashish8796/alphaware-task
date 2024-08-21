import { LoginFormData, loginFormSchema } from "../../schemas/authSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "../../types";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { login } from "../../redux/auth/authActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { handleSubmit, register, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  console.log("formState", formState.errors);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("data", data);
    setLoading(true);
    try {
      const response = dispatch(login(data)).unwrap();
      console.log("Login successful", response);

      navigate("/jobs");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
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

      <div>
        <p>Don't have an account?</p>
        <a href="/login">Click here to signup.</a>
      </div>
    </div>
  );
};

export default LoginForm;
