import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { setSignInformVisible } from "@/redux/features/global/global-slice";

import { ROUTES } from "@/lib/utils/constant";

import { SignInSchemaValidation } from "@/lib/validations/SignInSchemaValidation";

import { SignInInput } from "@/types";

const SignInForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: yupResolver(SignInSchemaValidation),
  });

  const handleSinUpFormVisible = () => dispatch(setSignInformVisible());

  const onSubmit: SubmitHandler<SignInInput> = (data) => {
    alert(data.username + data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="signin-username" className="block mb-2.5">
          User name
        </label>

        <input
          type="text"
          name="username"
          id="signin-username"
          {...register("username")}
          placeholder="Enter your username"
          className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
        />
        <div className="h-2">
          <span className="text-red text-sm">{errors.username?.message}</span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2.5">
          Password
        </label>

        <input
          type="password"
          name="password"
          id="password"
          {...register("password")}
          placeholder="Enter your password"
          autoComplete="current-password"
          className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          // disabled={isLoading}
        />
        <div className="h-2">
          <span className="text-red text-sm">{errors.password?.message}</span>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
      >
        Sign in
      </Button>

      {/* Forgot Password Link */}
      <Link
        href={ROUTES.FORGOT_PASSWORD}
        className="block text-center text-dark-4 mt-4.5 ease-out duration-200 hover:text-dark"
        // onClick={isLoading ? (e) => e.preventDefault() : undefined}
      >
        Forget your password?
      </Link>
      <span className="relative z-1 block font-medium text-center mt-4.5">
        <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
        <span className="inline-block px-3 bg-white">Or</span>
      </span>

      {/* Sign Up Link */}
      <p className="text-center mt-6">
        Don&apos;t have an account?
        <span
          onClick={handleSinUpFormVisible}
          className="text-dark ease-out duration-200 hover:text-blue pl-2 cursor-pointer"
        >
          Sign Up Now!
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
