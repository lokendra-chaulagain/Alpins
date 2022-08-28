import styles from "../../styles/scss/price/PriceSection2.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/5.jpeg";

const PriceSection2 = () => {
  return (
    <div className={`${styles.bg}  `}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row px-3">
            <div className="col-7">
              <h2 className="h2  customH2">BOOK YOUR TOUR</h2>
              <h6 className=" h6 pt-3 pb-4 customH6">
                Contact us for tour booking
              </h6>

              <p className="h6 customP  pb-4 lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                est itaque ab. Molestias perspiciatis, iste nemo optio
                laudantium, reprehenderit at velit et officia nisi, sint
                corporis vel! Praesentium voluptas id aliquam optio odio
                consectetur reiciendis?
              </p>
              <button
                type="button"
                className="btn fw-semibold fs-6 customButton   shadow-sm  btn-primary rounded-pill py-3 px-5 btn-lg  "
              >
                Contact us
              </button>
            </div>

            <div className="col-5" style={{ backgroundColor: "red" }}>
              <Swiper
                slidesPerView={2}
                spaceBetween={5}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className={`${styles.loki}`}>
                  <Image src={person1} className={`${styles.loki}`} alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={person1} alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={person1} alt="..." />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection2;
