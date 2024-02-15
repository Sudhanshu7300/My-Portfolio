// data

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
// icons
import { RxArrowTopRight } from "react-icons/rx";
// data
import Image from "next/image";
type ImageData = {
  projectName: string;
  url: string;
  title: string;
  path: string;
};

// type SlideData = {
//   images: ImageData[];
// };

const workSlides = {
  slides: [
    {
      images: [
        {
          projectName: "PostMyAd Adtech",
          url: "https://admin.postmyad.ai/signIn",
          title: "title",
          path: "/PostMyAd-admin.png",
        },
        {
          projectName: "Brainstorm International LMS",
          url: "https://admin.brainstorminternational.co.in/login",
          title: "title",
          path: "/brainstorm-admin.png",
        },
        {
          projectName: "Shipment Tracking System",
          url: "http://shipment.psiborg.io/auth/signIn",
          title: "title",
          path: "/shipment-admin.png",
        },
        {
          projectName: "DSS (Defence Security Systems)",
          url: "",
          title: "title",
          path: "/dss-admin.png",
        },
      ],
    },
    {
      images: [
        {
          projectName: "Adtech User WebApp",
          url: "https://app.postmyad.ai/explore",
          title: "title",
          path: "/PostMyAd-user.png",
        },

        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          projectName: "Smart Home Automation",
          url: "http://smarthome.psiborg.io/",
          title: "title",
          path: "/Home-Automation.jpg",
        },

        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image: ImageData, index: number) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div
                      className="flex items-center w-full h-full  justify-center relative overflow-hidden group"
                      style={{ maxHeight: "210px" }}
                    >
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        className="w-full h-full"
                        height={300}
                        alt=""
                      />
                      {/* overlay gradient */}
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                          {/* title */}
                          <div
                            style={{ width: "100%" }}
                            className="absolute flex items-center justify-center  bottom-0 translate-y-full group-hover:-transalte-y-10 group-hover:xl:-translate-y-20  transition-all duration-300"
                          >
                            <div className="flex items-center justify-center   gap-x-2 text-[13px] tracking-[0.2em]">
                              {/* title part 1  */}
                              <div className="delay-100">
                                {image.projectName}{" "}
                              </div>
                              {/* title part 2  */}
                              <div className="translate-y-[500%] group-hover:translate-y-0  transition-all duration-300 delay-150 "></div>
                              {/* icons */}
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <RxArrowTopRight />
                              </div>
                            </div>
                          </div>{" "}
                        </div>{" "}
                      </a>
                    </div>{" "}
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
