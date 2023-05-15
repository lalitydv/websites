import { content } from '../Content';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5  flex flex-col justify-center">
        <div>
          <h2 className="title text-textColor" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className=" text-[#704a2e]" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex md:flex-row flex-wrap justify-evenly py-5   gap-5">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          {/* <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={100}
            modules={[Pagination]}
            className="rounded-3xl pb-20  drop-shadow-primary px-20 "
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    <a href={content.Link} target="_blank">
                      READ MORE
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {Projects.project_content.map((content, i) => (
            <div className="max-w-[350px] rounded overflow-hidden shadow-lg group ">
              <img
                className="w-full"
                src={content.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 flex gap-3 justify-around">
                <div className="font-bold text-xl mb-2">{content.title}</div>
                <div className="text-gray-700 text-base ">
                {/* translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 */}
                  <a
                    href={content.Link}
                    target="_blank"
                    className="text-center bg-textColor text-white px-2 py-2 rounded-md"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
