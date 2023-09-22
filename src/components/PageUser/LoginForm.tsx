import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonGener from '../HandlersComponent/ButtonGener';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleLogin = (data: { email: string; password: string }) => {
    // Handle login logic here
    console.log('Logging in with a:', data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
          className="w-full border rounded-lg p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          className="w-full border rounded-lg p-2"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <ButtonGener
      width='w-full'
      type='submit'
      setAction={()=>{}}
      title='Login'
      />
      
    </form>
  );
};
