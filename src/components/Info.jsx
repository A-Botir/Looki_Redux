import First from "../assets/icons/main/car.svg";
import Second from "../assets/icons/main/mailbox.svg";
import Third from "../assets/icons/main/operator.svg";
import Fourth from "../assets/icons/main/safety.svg";
import Poster1 from "../assets/photos/1.png";
import Poster2 from "../assets/photos/2.png";
import Poster3 from "../assets/photos/3.png";

const Info = () => {
  return (
    <section className="container mb-8 mt-20">
      <div className="mb-20 grid grid-cols-4 gap-4 bg-[#5A5AC9] px-4 py-[60px]">
        <div className="col-span-1 flex items-center gap-6">
          <img src={First} alt="icon" />
          <div>
            <h4 className="font-raleway text-[18px] font-bold text-white">
              Free Shipping
            </h4>
            <p className="mt-1 text-white">On all orders over $75.00</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6">
          <img src={Second} alt="icon" />
          <div>
            <h4 className="font-raleway text-[18px] font-bold text-white">
              Free Returns
            </h4>
            <p className="mt-1 text-white">Returns are free within 9 days</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6">
          <img src={Third} alt="icon" />
          <div>
            <h4 className="font-raleway text-[18px] font-bold text-white">
              100% Payment Secure
            </h4>
            <p className="mt-1 text-white">Your payment are safe with us.</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6">
          <img src={Fourth} alt="icon" />
          <div>
            <h4 className="font-raleway text-[18px] font-bold text-white">
              Support 24/7
            </h4>
            <p className="mt-1 text-white">Contact us 24 hours a day</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center gap-6">
        <img src={Poster1} alt="poster img" className="col-span-2" />
        <img src={Poster2} alt="poster img" className="col-span-1" />
        <img src={Poster3} alt="poster img" className="col-span-1" />
      </div>
    </section>
  );
};

export default Info;
