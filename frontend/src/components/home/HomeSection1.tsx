import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/scss/Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/6.jpeg";
import { RiCalendar2Fill } from "react-icons/ri";

import Link from "next/link";
import packages from "../../packages.json"


const HomeSection1 = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="container-fluid">
      <div className="container py-5">
        <div className="row container  ">
          <div className="col-xl-8 mt-5 col-lg-8 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper swiper-container">
              {/* Card 1============================== */}
              {packages &&
                packages.map((packages: any, index: any) => (
                  <SwiperSlide key={index}>
                    <Link href={`/trek/${packages.id}`}>
                      <div className="card mb-5 border-0 rounded">
                        
                        <Image
                          src={packages.image}
                          height={250}
                          width={200}
                          className=" rounded"
                          alt=""
                        />

                        <div
                          className="card mx-2 "
                          style={{ backgroundColor: "#12314a" }}>
                          <div className="card-body">
                            <div className="row ">
                              <div className="col">
                                <h5 className="primaryColor h5">{packages.days}</h5>
                                <p className="whiteColor">Days</p>
                              </div>
                              <div className="col">
                                <h5 className="primaryColor h5">{packages.groupSize}</h5>
                                <p className="whiteColor">Group Size</p>
                              </div>
                              <div className="col">
                                <h5 className="primaryColor h5">{packages.difficultyLevel}</h5>
                                <p className="whiteColor">Difficulty</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                          <h4 className="mainColor pt-3  h4 fw-bold">{packages.heading}</h4>
                          <p className="mainColor pt-3 lh-lg  card-text">{packages.description}</p>
                          <div className="col">
                            <h6 className="mainColor h6 ">
                              <RiCalendar2Fill
                                style={{ fontSize: "20px" }}
                                className="primaryColor me-2"
                              />
                              {packages.dateTime}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              {/* ========================== */}
            </Swiper>
          </div>

          <div className="col-xl-4 col-lg-4 mt-5">
            <h2 className="mainColor h2 fw-bolder ">LATEST TRIPS</h2>
            <h6 className="mainColor h5 py-3 ">Explore the unexplored world</h6>
            <p className="mainColor lh-lg">
              The Ancient Himalayas offer a remarkable journey to enjoy the majestic Himalayas with a diversified culture. Nepal, a country with thousands of destinations for trekking and hiking, is the best destination to enjoy your splendid time in nature. Your adventurous journey with Ancient Himalayas will certainly be an enthralling trip to Nepal taking the journey uphill and downhill along the greenery, peaks, glacier rivers, waterfalls, and the breathtaking view of the most beautiful
              mountains all over the world. Enjoy the adventure, amenities, and hospitality with the best trekking agency that provides you with the best packages to the Everest Base Camp, Annapurna Base Camp, Langtang Valley Trek, and multiple others.
            </p>

            <button
              type="button"
              className={`${styles.customButton} btn btn-lg ms-3 mt-4 rounded-pill px-4 `}>
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
