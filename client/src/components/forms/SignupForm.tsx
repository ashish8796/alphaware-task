import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupFormSchema } from "../../schemas/authSchema";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "../../types";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/authActions";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {}

const SignupForm = (props: SignupFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const { handleSubmit, register } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    console.log("data", data);
    setLoading(true);
    try {
      const response = await dispatch(signup(data)).unwrap();
      console.log("Signup successful", response);
      navigate("/login");
    } catch (error: any) {
      console.error("Signup failed", error);
      setError(error);
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

      <div>
        <p>Already have an account?</p>
        <a href="/login">Click here to login.</a>
      </div>
    </div>
  );
};

export default SignupForm;
