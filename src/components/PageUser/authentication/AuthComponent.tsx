import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ButtonGener from "../../HandlersComponent/ButtonGener";

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <ButtonGener
          type="button"
          setAction={() => setIsLogin(true)}
          title="Entrar"
          color={isLogin ? "bg-teal-500 text-white" : "bg-gray-300"}
        />

        <ButtonGener
          type="button"
          setAction={() => setIsLogin(false)}
          title="Cadastrar"
          color={!isLogin ? "bg-teal-500 text-white" : "bg-gray-300"}
        />
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
