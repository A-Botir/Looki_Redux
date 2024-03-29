import Card9 from "../assets/photos/card9.png";
import Card10 from "../assets/photos/card10.png";
import Card11 from "../assets/photos/card11.png";
import Card12 from "../assets/photos/card12.png";

const LatestBlog = () => {
  return (
    <section className="container mb-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-raleway text-[30px] font-bold">
          From our Latest Blogs
        </h2>
        <span className="my-4  block h-[2px] w-[60px] bg-[#5A5AC9]"></span>
        <p className="text-[#565656]">All Natural Makeup Beauty Cosmetics</p>
        <ul className="my-[50px] flex items-center justify-center gap-6">
          <li className="px-2 py-2 font-semibold text-[#5A5AC9] underline">
            New products
          </li>
          <li className="px-2 py-2 font-semibold">Onsale</li>
          <li className="px-2 py-2 font-semibold">Upcoming products</li>
        </ul>
        <div className="mx-auto grid grid-cols-4 gap-[30px]">
          <div className="col-span-1">
            <img src={Card9} alt="card img" />
            <p className="mt-5 font-semibold uppercase text-[#5A5AC9] text-[12]">
              Fashion
            </p>{" "}
            <h4 className="font-raleway mt-2 text-[16px] font-semibold">
              All Natural Makeup Beauty Cosmetics
            </h4>
            <p className="mt-4 text-[#565656]">
              Posted by
              <span className="text-[#5A5AC9]">&nbsp;HasTech&nbsp;</span>12TH
              Nov 2023
            </p>
          </div>
          <div className="col-span-1">
            <img src={Card10} alt="card img" />
            <p className="mt-5 font-semibold uppercase text-[#5A5AC9] text-[12]">
              Fashion
            </p>
            <h4 className="font-raleway mt-2 text-[16px] font-semibold">
              On Trend Makeup and Beauty Cosmetics
            </h4>
            <p className="mt-4 text-[#565656]">
              Posted by
              <span className="text-[#5A5AC9]">&nbsp;HasTech&nbsp;</span>12TH
              Nov 2023
            </p>
          </div>
          <div className="col-span-1">
            <img src={Card11} alt="card img" />
            <p className="mt-5 font-semibold uppercase text-[#5A5AC9] text-[12]">
              Fashion
            </p>
            <h4 className="font-raleway mt-2 text-[16px] font-semibold">
              The Cosmetics and Beauty brand Shoppe
            </h4>
            <p className="mt-4 text-[#565656]">
              Posted by
              <span className="text-[#5A5AC9]">&nbsp;HasTech&nbsp;</span>12TH
              Nov 2023
            </p>
          </div>
          <div className="col-span-1">
            <img src={Card12} alt="card img" />
            <p className="mt-5 font-semibold uppercase text-[#5A5AC9] text-[12]">
              Fashion
            </p>
            <h4 className="font-raleway mt-2 text-[16px] font-semibold">
              Orginal Age Defying Cosmetics Makeup
            </h4>
            <p className="mt-4 text-[#565656]">
              Posted by
              <span className="text-[#5A5AC9]">&nbsp;HasTech&nbsp;</span>12TH
              Nov 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
