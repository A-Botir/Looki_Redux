import Brend1 from "../assets/photos/brend1.png";
import Brend2 from "../assets/photos/brend2.png";
import Brend3 from "../assets/photos/brend3.png";
import Brend4 from "../assets/photos/brend4.png";
import Brend5 from "../assets/photos/brend5.png";

const Brends = () => {
  return (
    <section className="container py-9">
      <div className="grid grid-cols-5 justify-center gap-28">
        <img src={Brend1} alt="brend img" className="col-span-1" />
        <img src={Brend2} alt="brend img" className="col-span-1" />
        <img src={Brend3} alt="brend img" className="col-span-1" />
        <img src={Brend4} alt="brend img" className="col-span-1" />
        <img src={Brend5} alt="brend img" className="col-span-1" />
      </div>
    </section>
  );
};

export default Brends;
