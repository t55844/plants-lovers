import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PropsInputFormGener {
  label: string;
  nameId: string;
  type: string;
  register: any;
  errors: FieldErrors<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
}

export default function InputFormGener(props: PropsInputFormGener) {
  const { label, nameId, type, register, errors } = props;

  return (
    <div className="mb-4">
      <label htmlFor={nameId} className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        id={nameId}
        {...register}
        className="w-full border rounded-lg p-2"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
  );
}
