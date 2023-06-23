import CartHeader from "@/components/cart/CartHeader";
import React from "react";

const LoadingPage: React.FC = async () => {
  return (
    <div className=" bg-gray-100 pt-20 min-h-screen">
      <div className="w-full flex flex-row justify-center">
        <CartHeader/>
      </div>
      <div className="flex flex-row w-full justify-center gap-20 lg:flex-col">
        <div className="flex flex-col rounded-lg gap-10 w-[60%] lg:w-full lg:px-20 lg:flex lg:flex-row lg:flex-wrap lg:gap-10 lg:justify-center">
          {Array.from({ length: 3 }, (_, idx) => {
            return (
              <div
                key={idx}
                className="border shadow rounded-md p-4 w-full h-[200px]"
              >
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                        <div className="h-2 bg-gray-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
