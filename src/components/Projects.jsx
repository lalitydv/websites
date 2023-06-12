import { content } from '../Content';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const Projects = () => {
  const [openTab, setOpenTab] = React.useState(1);
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
        {/* tabs --------------------------------------- */}

        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-col pt-3 pb-4 md:flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  HTML/CSS
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  CSS Animation & 3d parallax
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 3
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Core JavaScript
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 4
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  React js
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 5
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  Next js
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 6
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link6"
                  role="tablist"
                >
                  Angular
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal ' +
                    (openTab === 7
                      ? 'text-white bg-textColor'
                      : ' text-textColor bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(7);
                  }}
                  data-toggle="tab"
                  href="#link7"
                  role="tablist"
                >
                  Graphic Design
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? 'block' : 'hidden'}
                    id="link1"
                  >
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br /> Dramatically visualize customer directed
                      convergence without revolutionary ROI.
                    </p>
                  </div>
                  <div
                    className={openTab === 2 ? 'block' : 'hidden'}
                    id="link2"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                  <div
                    className={openTab === 3 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                  <div
                    className={openTab === 4 ? 'block' : 'hidden'}
                    id="link4"
                  >
                    {Projects.project_content.map((content, i) => (
                      <div className="max-w-[350px] rounded overflow-hidden shadow-lg group ">
                        <img
                          className="w-full"
                          src={content.image}
                          alt="Sunset in the mountains"
                        />
                        <div className="px-6 py-4 flex gap-3 justify-around">
                          <div className="font-bold text-xl mb-2">
                            {content.title}
                          </div>
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
                  <div
                    className={openTab === 5 ? 'block' : 'hidden'}
                    id="link5"
                  >
                    <p>Next js</p>
                  </div>
                  <div
                    className={openTab === 6 ? 'block' : 'hidden'}
                    id="link6"
                  >
                    <p>Anguler js</p>
                  </div>
                  <div
                    className={openTab === 7 ? 'block' : 'hidden'}
                    id="link7"
                  >
                    <p>Graphic Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tabs --------------------------------------- */}

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
