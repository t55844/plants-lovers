import { useForm } from "react-hook-form";
import ButtonGener from "../HandlersComponent/ButtonGener";
import supabase from "../../js/supabase"; // Import the Supabase client you initialized
import InputFormGener from "./InputFormGener";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>();

  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle registration logic here
    console.log(data);
    /*try {
        const { data:{user,session}, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });
  
        if (error) {
          console.error('Registration error:', error.message);
        } else {
          console.log('Registered and logged in:', user, session);
          // You can redirect the user or perform other actions on successful registration
        }
      } catch (error) {
        console.error('Registration error:', error.message);
      }*/
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <InputFormGener
        label="Name"
        nameId="name"
        type="text"
        register={register("name", { required: "Name is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Email"
        nameId="email"
        type="email"
        register={register("email", { required: "Email is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Password"
        nameId="password"
        type="password"
        register={register("password", { required: "Password is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Confirm password"
        nameId="confirmPassword"
        type="password"
        register={register("confirmPassword", {
          required: "Confirm password is required",
        })}
        errors={errors}
      />
      <ButtonGener
        width="w-full"
        type="submit"
        title="Register"
        setAction={() => {}}
      />
    </form>
  );
}
