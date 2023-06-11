import React from "react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <div className="flex flex-row flex-1 overflow-hidden">
      <div className="bg-black h-screen lg:hidden ">
        <div className="h-screen w-[900px] 2xl:w-[650px] relative bg-[url('/beer.avif')] bg-cover bg-no-repeat opacity-30"></div>
        <div>
          <div className="absolute w-[600px] top-40 left-20 px-4 py-3 ">
            <p className="text-gray-200 mt-5 mb-3 text-lg">Brew Haven</p>
            <h1 className="text-white font-bold text-5xl">
              {" "}
              Discover the Art of Refreshment.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
