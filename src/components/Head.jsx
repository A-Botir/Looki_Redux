import { NavLink, useLocation, Link } from "react-router-dom";

const Head = () => {
  const location = useLocation();
  const getPathText = () => {
    switch (location.pathname) {
      case "/wishlist":
        return "Wishlist";
      case "/cart":
        return "Cart";
      default:
        return "";
    }
  };
  return (
    <section className="bg-[#F6F6F6] py-[110px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="font-raleway text-[30px] font-bold">
            {getPathText()}
          </h2>
          <span className="my-[30px]  block h-[2px] w-[60px] bg-[#5A5AC9]"></span>
          <p>
            Home {">"} <span className="text-[#565656]">{getPathText()}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;
