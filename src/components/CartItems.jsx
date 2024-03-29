import Card5 from "../assets/photos/card5.png";
import Card6 from "../assets/photos/card6.png";
import Card9 from "../assets/photos/card9.png";

const CartItems = () => {
  return (
    <section className="container mb-[52px]">
      <h2 className="mb-14 font-raleway text-[30px] font-bold">
        Your cart items
      </h2>
      <table className="w-full">
        <thead className="bg-[#5A5AC9]">
          <tr>
            <th className="py-1 text-white">Product Image</th>
            <th className="px-4 py-1 text-white">Product Name</th>
            <th className="py-1 text-white">Stock Status</th>
            <th className="py-1 text-white">Qty</th>
            <th className="py-1 text-white">Price</th>
            <th className="py-1 text-white">Action</th>
            <th className="py-1 text-white">Checkout</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#DEE2E6]">
            <td className="flex justify-center py-2">
              <img src={Card9} alt="img" className="w-[150px]" />
            </td>
            <td className="text-center">Water and Wind Resistant cream</td>
            <td className="px-4 text-center">
              <p className="rounded-md bg-[#5A5AC9] py-1 text-white">
                in stock
              </p>
            </td>
            <td>
              <div className="mx-auto flex w-[50%] items-center justify-center gap-2 border border-[#EBEBEB]">
                <p className="px-[11px] py-3">1</p>
                <div>
                  <button className="block border-b border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˄
                  </button>
                  <button className="block border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˅
                  </button>
                </div>
              </div>
            </td>
            <td className="px-3 text-center text-[15px]">$38.24</td>
            <td>
              <button className="ml-[40%]">
                <svg
                  width="13.000000"
                  height="14.000000"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id=""
                    d="M8.04 0.12L11.32 0.12C11.54 0.12 11.76 0.34 11.76 0.56L11.76 1.43C11.76 1.68 11.54 1.87 11.32 1.87L-0.05 1.87C-0.3 1.87 -0.49 1.68 -0.49 1.43L-0.49 0.56C-0.49 0.34 -0.3 0.12 -0.05 0.12L3.23 0.12L3.48 -0.37C3.58 -0.59 3.8 -0.75 4.05 -0.75L7.19 -0.75C7.44 -0.75 7.66 -0.59 7.77 -0.37L8.04 0.12ZM1.7 13.25C0.96 13.25 0.39 12.67 0.39 11.93L0.39 2.75L10.89 2.75L10.89 11.93C10.89 12.67 10.28 13.25 9.57 13.25L1.7 13.25ZM3.01 4.5C2.76 4.5 2.57 4.71 2.57 4.93L2.57 11.06C2.57 11.3 2.76 11.5 3.01 11.5C3.23 11.5 3.45 11.3 3.45 11.06L3.45 4.93C3.45 4.71 3.23 4.5 3.01 4.5ZM5.64 4.5C5.39 4.5 5.2 4.71 5.2 4.93L5.2 11.06C5.2 11.3 5.39 11.5 5.64 11.5C5.85 11.5 6.07 11.3 6.07 11.06L6.07 4.93C6.07 4.71 5.85 4.5 5.64 4.5ZM8.26 4.5C8.01 4.5 7.82 4.71 7.82 4.93L7.82 11.06C7.82 11.3 8.01 11.5 8.26 11.5C8.48 11.5 8.7 11.3 8.7 11.06L8.7 4.93C8.7 4.71 8.48 4.5 8.26 4.5Z"
                    fill="#212529"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button className="ml-[15%] border border-[#212529] bg-[#111111] px-4 py-[15px] font-raleway font-medium uppercase text-white">
                Add to cart
              </button>
            </td>
          </tr>
          <tr className="border-b border-[#DEE2E6]">
            <td className="flex justify-center py-2">
              <img src={Card5} alt="img" className="w-[150px]" />
            </td>
            <td className="text-center">Originals Kaval nail polish</td>
            <td className="px-4 text-center">
              <p className="rounded-md bg-[#5A5AC9] py-1 text-white">
                in stock
              </p>
            </td>
            <td>
              <div className="mx-auto flex w-[50%] items-center justify-center gap-2 border border-[#EBEBEB]">
                <p className="px-[11px] py-3">1</p>
                <div>
                  <button className="block border-b border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˄
                  </button>
                  <button className="block border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˅
                  </button>
                </div>
              </div>
            </td>
            <td className="px-3 text-center text-[15px]">$38.24</td>
            <td>
              <button className="ml-[40%]">
                <svg
                  width="13.000000"
                  height="14.000000"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id=""
                    d="M8.04 0.12L11.32 0.12C11.54 0.12 11.76 0.34 11.76 0.56L11.76 1.43C11.76 1.68 11.54 1.87 11.32 1.87L-0.05 1.87C-0.3 1.87 -0.49 1.68 -0.49 1.43L-0.49 0.56C-0.49 0.34 -0.3 0.12 -0.05 0.12L3.23 0.12L3.48 -0.37C3.58 -0.59 3.8 -0.75 4.05 -0.75L7.19 -0.75C7.44 -0.75 7.66 -0.59 7.77 -0.37L8.04 0.12ZM1.7 13.25C0.96 13.25 0.39 12.67 0.39 11.93L0.39 2.75L10.89 2.75L10.89 11.93C10.89 12.67 10.28 13.25 9.57 13.25L1.7 13.25ZM3.01 4.5C2.76 4.5 2.57 4.71 2.57 4.93L2.57 11.06C2.57 11.3 2.76 11.5 3.01 11.5C3.23 11.5 3.45 11.3 3.45 11.06L3.45 4.93C3.45 4.71 3.23 4.5 3.01 4.5ZM5.64 4.5C5.39 4.5 5.2 4.71 5.2 4.93L5.2 11.06C5.2 11.3 5.39 11.5 5.64 11.5C5.85 11.5 6.07 11.3 6.07 11.06L6.07 4.93C6.07 4.71 5.85 4.5 5.64 4.5ZM8.26 4.5C8.01 4.5 7.82 4.71 7.82 4.93L7.82 11.06C7.82 11.3 8.01 11.5 8.26 11.5C8.48 11.5 8.7 11.3 8.7 11.06L8.7 4.93C8.7 4.71 8.48 4.5 8.26 4.5Z"
                    fill="#212529"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button className="ml-[15%] border border-[#212529] bg-[#111111] px-4 py-[15px] font-raleway font-medium uppercase text-white">
                Add to cart
              </button>
            </td>
          </tr>
          <tr className="border-b border-[#DEE2E6]">
            <td className="flex justify-center py-2">
              <img src={Card6} alt="img" className="w-[150px]" />
            </td>
            <td className="text-center">New Balance Arish makeup box</td>
            <td className="px-4 text-center">
              <p className="rounded-md bg-[#5A5AC9] py-1 text-white">
                in stock
              </p>
            </td>
            <td>
              <div className="mx-auto flex w-[50%] items-center justify-center gap-2 border border-[#EBEBEB]">
                <p className="px-[11px] py-3">1</p>
                <div>
                  <button className="block border-b border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˄
                  </button>
                  <button className="block border-l border-[#EBEBEB] px-1 py-[6px]">
                    ˅
                  </button>
                </div>
              </div>
            </td>
            <td className="px-3 text-center text-[15px]">$38.24</td>
            <td>
              <button className="ml-[40%]">
                <svg
                  width="13.000000"
                  height="14.000000"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id=""
                    d="M8.04 0.12L11.32 0.12C11.54 0.12 11.76 0.34 11.76 0.56L11.76 1.43C11.76 1.68 11.54 1.87 11.32 1.87L-0.05 1.87C-0.3 1.87 -0.49 1.68 -0.49 1.43L-0.49 0.56C-0.49 0.34 -0.3 0.12 -0.05 0.12L3.23 0.12L3.48 -0.37C3.58 -0.59 3.8 -0.75 4.05 -0.75L7.19 -0.75C7.44 -0.75 7.66 -0.59 7.77 -0.37L8.04 0.12ZM1.7 13.25C0.96 13.25 0.39 12.67 0.39 11.93L0.39 2.75L10.89 2.75L10.89 11.93C10.89 12.67 10.28 13.25 9.57 13.25L1.7 13.25ZM3.01 4.5C2.76 4.5 2.57 4.71 2.57 4.93L2.57 11.06C2.57 11.3 2.76 11.5 3.01 11.5C3.23 11.5 3.45 11.3 3.45 11.06L3.45 4.93C3.45 4.71 3.23 4.5 3.01 4.5ZM5.64 4.5C5.39 4.5 5.2 4.71 5.2 4.93L5.2 11.06C5.2 11.3 5.39 11.5 5.64 11.5C5.85 11.5 6.07 11.3 6.07 11.06L6.07 4.93C6.07 4.71 5.85 4.5 5.64 4.5ZM8.26 4.5C8.01 4.5 7.82 4.71 7.82 4.93L7.82 11.06C7.82 11.3 8.01 11.5 8.26 11.5C8.48 11.5 8.7 11.3 8.7 11.06L8.7 4.93C8.7 4.71 8.48 4.5 8.26 4.5Z"
                    fill="#212529"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button className="ml-[15%] border border-[#212529] bg-[#111111] px-4 py-[15px] font-raleway font-medium uppercase text-white">
                Add to cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartItems;
