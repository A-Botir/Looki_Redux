import React from "react";

const Total = () => {
  return (
    <section className="container mb-20">
      <div className="grid grid-cols-5 gap-6 pb-5">
        <form className="col-span-3 grid grid-cols-2 gap-x-6">
          <h2 className="col-span-2 mb-8 font-raleway text-[30px] font-semibold">
            Calculate Shipping
          </h2>
          <div className="col-span-1 mb-4">
            <select
              placeholder="Select country"
              className="w-full border border-[#CED4DA] px-3 py-2 outline-none"
            >
              <option value="1" selected>
                Select country
              </option>
              <option value="2">Chine</option>
              <option value="3">Japan</option>
            </select>
          </div>
          <div className="col-span-1 mb-4">
            <select
              placeholder="Select State"
              className="w-full border border-[#CED4DA] px-3 py-2 outline-none"
            >
              <option value="1" selected>
                Select State
              </option>
              <option value="2">Gonkong</option>
              <option value="3">Kioto</option>
            </select>
          </div>
          <div className="col-span-1 mb-10">
            <input
              type="text"
              className="w-full border border-[#E6E6E6] px-3 py-2 outline-none"
              placeholder="Postcode / ZIP"
            />
          </div>
          <div className="col-span-1 mb-10">
            <button className="border border-[#5A5AC9] bg-[#5A5AC9] px-8 py-2 font-raleway font-medium uppercase text-white">
              estimate
            </button>
          </div>
          <div className="col-span-2 mb-4">
            <h3 className="font-raleway text-[20px] font-semibold">
              Discount coupon Code
            </h3>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              className="w-full border border-[#E6E6E6] px-3 py-2 outline-none"
              placeholder="coupon Code"
            />
          </div>
          <div className="col-span-1">
            <button className="border border-[#5A5AC9] bg-[#5A5AC9] px-8 py-2 font-raleway font-medium uppercase text-white">
              apply code
            </button>
          </div>
        </form>
        <div className="col-span-2">
          <div className="mb-6 bg-[#F6F6F6] p-[45px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[15px] font-medium">Product</h4>
              <h4 className="text-[15px] font-medium">Total</h4>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <h4 className="text-[15px] font-medium">Shipping</h4>
              <p className="text-[#565656]">Free shipping</p>
            </div>
            <div className="flex items-center justify-between border-y border-[#DEE0E4] py-5">
              <h4 className="text-[15px] font-medium">Total</h4>
              <p className="font-semibold text-[#5A5AC9]">$329</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="border border-[#5A5AC9] bg-[#5A5AC9] px-8 py-2 font-raleway font-medium uppercase text-white">
              update cart
            </button>
            <button className="border border-[#5A5AC9] bg-[#5A5AC9] px-8 py-2 font-raleway font-medium uppercase text-white">
              checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Total;
