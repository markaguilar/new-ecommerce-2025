import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { setSignInformVisible } from "@/redux/features/global/global-slice";

import { SignUpSchemaValidation } from "@/lib/validations/SignUpSchemaValidation";

import { SignUpInput } from "@/types";
import ErrorMessages from "@/components/Common/ErrorMessages";
import SvgEye from "@/app/assets/svg/form/eye";
import SvgEyeSlash from "@/app/assets/svg/form/eyeSlash";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleTogglePasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const handleToggleConfirmPasswordVisible = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: yupResolver(SignUpSchemaValidation),
  });

  const handleSinUpFormVisible = () => dispatch(setSignInformVisible());

  const onSubmit: SubmitHandler<SignUpInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      {/*<div className="flex flex-col gap-4.5">
                  <button className="flex justify-center items-center gap-3.5 rounded-lg border border-gray-3 bg-gray-1 p-3 ease-out duration-200 hover:bg-gray-2">
                    <SvgGoogle />
                    Sign Up with Google
                  </button>

                  <button className="flex justify-center items-center gap-3.5 rounded-lg border border-gray-3 bg-gray-1 p-3 ease-out duration-200 hover:bg-gray-2">
                    <SvgFacebook />
                    Sign Up with Facebook
                  </button>
                </div>
                <span className="relative z-1 block font-medium text-center mt-4.5">
                  <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
                  <span className="inline-block px-3 bg-white">Or</span>
                </span>*/}
      <div className="mt-5.5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="signup-username" className="block mb-2.5">
              User name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="username"
              id="signup-username"
              {...register("username")}
              placeholder="Enter your full name"
              className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
            <ErrorMessages message={errors.username?.message} />
          </div>

          {/*<div className="mb-5">
                      <label htmlFor="email" className="block mb-2.5">
                        Email Address <span className="text-red">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>*/}

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2.5">
              Password <span className="text-red">*</span>
            </label>

            <div className="relative flex items-center">
              <input
                type={isPasswordVisible ? `text` : `password`}
                name="password"
                id="password"
                {...register("password")}
                placeholder="Enter your password"
                autoComplete="on"
                className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
              {isPasswordVisible ? (
                <SvgEye
                  onClick={handleTogglePasswordVisible}
                  className="absolute right-0 w-6 h-6 mr-4 cursor-pointer"
                />
              ) : (
                <SvgEyeSlash
                  onClick={handleTogglePasswordVisible}
                  className="absolute right-0 w-6 h-6 mr-4 cursor-pointer"
                />
              )}
            </div>
            <ErrorMessages message={errors.password?.message} />
          </div>

          <div className="mb-5.5">
            <label htmlFor="re-type-password" className="block mb-2.5">
              Re-type Password <span className="text-red">*</span>
            </label>

            <div className="relative flex items-center">
              <input
                type={isConfirmPasswordVisible ? `text` : `password`}
                name="re-type-password"
                id="re-type-password"
                placeholder="Re-type your password"
                autoComplete="on"
                className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
              {isConfirmPasswordVisible ? (
                <SvgEye
                  onClick={handleToggleConfirmPasswordVisible}
                  className="absolute right-0 w-6 h-6 mr-4 cursor-pointer"
                />
              ) : (
                <SvgEyeSlash
                  onClick={handleToggleConfirmPasswordVisible}
                  className="absolute right-0 w-6 h-6 mr-4 cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
          >
            Create Account
          </button>

          <p className="text-center mt-6">
            Already have an account?
            <span
              onClick={handleSinUpFormVisible}
              className="text-dark ease-out duration-200 hover:text-blue pl-2 cursor-pointer"
            >
              Sign in Now
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
