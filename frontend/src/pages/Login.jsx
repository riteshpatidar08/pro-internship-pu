import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 character'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 shadow-sm w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block my-2 text-gray-700">Email</label>
          <input
            type="text"
            {...register('email')}
            className={
              errors.email
                ? 'border border-red-500 p-2 bg-white w-full'
                : 'mt-1 bg-white p-2 border border-gray-200 w-full'
            }
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
          )}
          <label className="block my-2 text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="mt-1 p-2 border border-gray-200  bg-white w-full"
          />
          {errors.password && (
            <p className="text-red-500 mt-1 text-sm">
              {errors.password.message}
            </p>
          )}
          <button
            type="Submit"
            className="bg-red-500 text-white px-4 py-2 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
