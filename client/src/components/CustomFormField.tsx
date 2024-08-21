import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { FormFieldType } from "../types";

interface CustomFormFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label?: string;
  name: Path<T>;
  fieldType: string;
  placeholder?: string;
}

const RenderField = <T extends FieldValues>({
  fieldType,
  register,
  name,
  placeholder,
}: {
  fieldType: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder?: string;
  options?: string[];
}) => {
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <input
          className="ml-4 outline"
          type="text"
          {...register(name)}
          placeholder={placeholder}
        />
      );

    default:
      return null;
  }
};

const CustomFormField = <T extends FieldValues>(
  props: CustomFormFieldProps<T>
) => {
  const { register, label, name, fieldType, placeholder } = props;
  // console.log({ fieldType });

  return (
    <div className="flex justify-between">
      {label && <label>{label}</label>}

      <RenderField
        fieldType={fieldType}
        register={register}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomFormField;
