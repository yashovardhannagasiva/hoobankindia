import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className='section'>
    <div className='sectionInfo'>
      <h2 className='heading2'>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className='paragraph max-w-[470px] mt-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis sequi odio, impedit at ipsam nostrum aliquid voluptatum quaerat ipsum.
      </p>
      <Button styles={`mt-10`} value='Get started' />
    </div>
    <div className='sectionImg'>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
