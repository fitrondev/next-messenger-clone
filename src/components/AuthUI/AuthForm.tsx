"use client";

import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues, set } from "react-hook-form";

// components
import Input from "../Input";
import Button from "../Button";
import AuthSocialButton from "./AuthSocialButton";

// icons
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // register user
    }

    if (variant === "LOGIN") {
      // login user
    }

    console.log(data);
    setIsLoading(false);
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth social
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {variant === "REGISTER" && (
            <Input label="Name" id="name" register={register} errors={errors} />
          )}

          <Input
            label="Email"
            id="email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
          />

          <div>
            <Button fullWidth disabled={isLoading} type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              onClick={() => socialAction("github")}
              icon={BsGithub}
            />

            <AuthSocialButton
              onClick={() => socialAction("google")}
              icon={BsGoogle}
            />
          </div>
        </div>
        <div className="flex justify-center text-sm mt-6 px-2 text-gray-500">
          <p>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </p>
          <span
            onClick={toggleVariant}
            className="underline cursor-pointer ml-1 text-blue-600 hover:text-blue-700"
          >
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
