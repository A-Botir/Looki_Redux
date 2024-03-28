import Cards from "../assets/photos/cashcards.svg";
import Logo from "../assets/icons/Logo.svg";
import Facebook from "../assets/icons/footer/facebook.svg";
import Instagram from "../assets/icons/footer/instagram.svg";
import Twitter from "../assets/icons/footer/twitter.svg";
import Youtube from "../assets/icons/footer/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#EFEFEF] pb-[95px] pt-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1">
              <img src={Logo} alt="logo icon" />
              <p className="mt-6 text-[#565656]">
                We are a team of professional designers and developers that
                create high quality wordpress plugins, Html, React Template.
              </p>
              <div className="mt-[30px] flex gap-[10px]">
                <div className="h-10 w-10 rounded-[50%] bg-white pl-[5px] pt-[5px]">
                  <img src={Instagram} alt="meadia icon" />
                </div>
                <div className="h-10 w-10 rounded-[50%] bg-white pl-[5px] pt-[5px]">
                  <img src={Youtube} alt="meadia icon" />
                </div>
                <div className="h-10 w-10 rounded-[50%] bg-white pl-[5px] pt-[5px]">
                  <img src={Twitter} alt="meadia icon" />
                </div>
                <div className="h-10 w-10 rounded-[50%] bg-white pl-[5px] pt-[5px]">
                  <img src={Facebook} alt="meadia icon" />
                </div>
              </div>
            </div>
            <nav className="col-span-2  grid grid-cols-4 items-start justify-between">
              <div className="col-span-1">
                <h4 className="mb-[18px] text-[18px] font-semibold">
                  Information
                </h4>
                <span className="mb-6 block h-[2px] w-[60px] bg-[#5A5AC9]"></span>
                <ul>
                  <li className="text-[#565656]">About Us</li>
                  <li className="text-[#565656]">Payment</li>
                  <li className="text-[#565656]">Contact Us</li>
                  <li className="text-[#565656]">Stores</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="mb-[18px] text-[18px] font-semibold">
                  Social Links
                </h4>
                <span className="mb-6 block h-[2px] w-[60px] bg-[#5A5AC9]"></span>
                <ul>
                  <li className="text-[#565656]">New Products</li>
                  <li className="text-[#565656]">Best Sales</li>
                  <li className="text-[#565656]">Login</li>
                  <li className="text-[#565656]">My Account</li>
                </ul>
              </div>
              <div className="col-span-2">
                <h4 className="mb-[18px] text-[18px] font-semibold">
                  Newsletter
                </h4>
                <span className="mb-6 block h-[2px] w-[60px] bg-[#5A5AC9]"></span>
                <p className="pb-5 text-[#565656]">
                  Subcribe to the TheFace mailing list to receive update on mnew
                  arrivals, special offers and other discount information.
                </p>
                <form
                  id="footer-form"
                  className="flex w-full items-center rounded-lg"
                >
                  <input
                    type="email"
                    className=" flex-grow rounded-l-[30px] border px-3 py-[13px] outline-none"
                    placeholder="Your email address"
                    minLength={5}
                  />
                  <button
                    type="submit"
                    className="rounded-r-[30px]  bg-[#5A5AC9] px-4 py-[13px] text-white transition duration-300 hover:bg-[#7c7cf3]"
                  >
                    Sing up
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] py-[15px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-[white]">
              Copyright ©{" "}
              <span className="cursor-pointer text-[#5A5AC9]">HasThemes</span>.
              All Rights Reserved
            </p>
            <img src={Cards} alt="bank cards" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
