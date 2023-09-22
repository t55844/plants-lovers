import { useForm} from 'react-hook-form';
import ButtonGener from '../HandlersComponent/ButtonGener';



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

  const handleRegister = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle registration logic here
    console.log('Registering with data:', data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full border rounded-lg p-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
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
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
          })}
          className="w-full border rounded-lg p-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>
      <ButtonGener
      width='w-full'
      type='submit'
      title='Register'
      setAction={()=>{}}
      />
    </form>
  );
};

