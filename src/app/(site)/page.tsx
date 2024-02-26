import { useState } from "react";
import Image from "next/image";

// components
import AuthForm from "@/components/AuthUI/AuthForm";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt=""
          width={48}
          height={48}
          priority
          className="mx-auto w-auto"
        />

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Welcome to Messenger
        </h2>
      </div>

      <AuthForm />
    </div>
  );
};
export default Home;
