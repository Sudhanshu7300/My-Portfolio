// Project Designs data
const ProjectDesigns = [
  {
    projectName: "DSS (Defence Security Systems)",
    overview:
      "Focused on real-time remote monitoring and analysis, this initiative minimizes downtime and maintenance challenges. It optimizes production through accurate data, automates cost-cutting tasks, and enhances customer service by providing immediate insights into device performance, contributing to efficient decision-making.",
    figjamLink: "https://rb.gy/nmfhqk",
    imageUrl: "/DSS.png",
  },

  {
    projectName: "Brainstorm International Admin Panel LMS",
    overview:
      "Learning Management System with online courses, assessments, and detailed learner analytics, featuring admin, trainer, and student interfaces for seamless education management.",
    figjamLink: "https://shorturl.at/cjk05",
    imageUrl: "/LMS.ico",
  },
  {
    projectName: "Brainstorm International Teacher Panel",
    overview:
      "Learning Management System with online courses, assessments, and detailed learner analytics, featuring admin, trainer, and student interfaces for seamless education management.",
    figjamLink: "https://shorturl.ac/7d0sw",
    imageUrl: "/LMS.ico",
  },

  {
    projectName: "PostMyAd Adtech",
    responsibilities: "Full-stack development, database design",
    overview:
      "PostMyAd, an innovative adtech project, fostering a global advertising community. Emphasizing accessibility, detailed billboard information, precise audience targeting, and more, the platform prioritizes transparency, revenue-sharing, and user-friendly experiences for effective advertising.",
    figjamLink: "https://rb.gy/nmfhqk",
    imageUrl: "/PostMyAd.ico",
  },
  {
    projectName: "Shipment Tracking System",
    overview:
      "Shipment Tracking System and Asset Monitoring Solution for the Indian Defence, ensuring real-time tracking and precise monitoring of vehicle location and asset orientation.",
    figjamLink: "https://rb.gy/nmfhqk",
    imageUrl: "/DSS.png",
  },
  {
    projectName: "RHMS - Remote Health Monitoring Solution",
    overview:
      "Revolutionizing remote health monitoring with precision and efficiency for doctors and patients through advanced hardware and intuitive software.",
    figjamLink: "https://rb.gy/ha6aat",
    imageUrl: "/RHMS.svg",
  },

  {
    projectName: "Mckey UserPanel",
    overview:
      "The mckey website is like an online store that focuses on selling digital game and provide keys for user. People use the easy-to-use website to buy game keys and explore features like sales, categories, purchase game cart, wishlists,  bundles, and more.",
    figjamLink: "https://rb.gy/nmfhqk",
    imageUrl: "/Mckey.ico",
  },
  {
    projectName: "Mckey Admin Panel",
    overview:
      "The Admin Panel functions as a powerful CMS, providing administrators with efficient control over user activities, including inventory management, stock monitoring, demand forecasting, supply chain integration, discount management, order fulfillment, and ensuring customer satisfaction, ensuring a streamlined user experience.",
    figjamLink: "https://rb.gy/ha6aat",
    imageUrl: "/Mckey.ico",
  },
];

// data

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
// icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const SystemDesignSlider = () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {ProjectDesigns.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16  ">
              {/* avatar name position */}

              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center ">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    {" "}
                    <Image
                      src={person.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                    />{" "}
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.projectName}</div>
                  {/* position */}
                  <div className="text-[15px] mt-2">
                    <a
                      href={person.figjamLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      View System Designs
                    </a>
                  </div>
                </div>
              </div>
              {/* quate & message */}
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quate icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl   mt-2 text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left mb-2">
                  {person.overview}{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SystemDesignSlider;
