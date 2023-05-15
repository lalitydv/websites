import { content } from '../Content';

const Hireme = () => {
  const { Hireme } = content;
  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-textColor" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="text-[#704a2e]" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex justify-center md:flex-row flex-col-reverse my-5 ">
          <img
            src={Hireme.image1}
            
            alt="..."
            data-aos="fade-right"
            className="max-w-[400px] max-h-[150px] md:block hidden mx-10"
          />
          <img
            src={Hireme.image3}
            data-aos="fade-up"
            alt="..."
            className="max-w-[150px] max-h-[400px] md:hidden my-10 flex items-center"
          />

          <div className=''>

         
          <div
            data-aos="fade-up"
            className="border-2 border-dark_primary max-w-[600px]
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] "
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div> 
          </div>

<div className='flex justify-center'>


            <img
            src={Hireme.image2}
            alt="..."
            data-aos="fade-left"
            className="max-w-[400px] max-h-[150px] md:block hidden mx-10"
          />
</div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
