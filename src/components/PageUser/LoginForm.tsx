import { useForm } from "react-hook-form";
import ButtonGener from "../HandlersComponent/ButtonGener";
import supabase from "../../js/supabase";
import InputFormGener from "./InputFormGener";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleLogin = async (data: { email: string; password: string }) => {
    // Handle login logic here
    try {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        console.error("Login error:", error.message);
      } else {
        console.log("Logged in:", user, session);
        // You can redirect the user or perform other actions on successful login
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <InputFormGener
        label="Email"
        nameId="email"
        type="email"
        errors={errors}
        register={register("email", { required: "Email is required" })}
      />

      <InputFormGener
        label="Password"
        nameId="password"
        type="password"
        register={register("password", { required: "Password is required" })}
        errors={errors}
      />
      <ButtonGener
        width="w-full"
        type="submit"
        setAction={() => {}}
        title="Login"
      />
    </form>
  );
}
