import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786295787/IMG-20260726-WA0067_cwleu2.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786295786/Snapchat-1957492938_fifohy.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786295800/20260427_202322_pvuzsq.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786297787/Screenshot_2024-09-20-17-52-25-687_com.whatsapp_2_ctqesn.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786295794/20260427_202257_wmrb6f.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786298088/Snapchat-1903188382_2_yz0mbn.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786297271/IMG-20260806-WA0014_jtbyup.jpg",
"https://res.cloudinary.com/dxaadzj0s/image/upload/v1786295787/9215_ay8y7q.jpg",
  "https://res.cloudinary.com/dxaadzj0s/image/upload/v1786297271/IMG-20260806-WA0010_hbzza3.jpg",
];

export default function MemoryCard() {
return (
  <Swiper
    effect="coverflow"
    grabCursor
    centeredSlides
    slidesPerView="auto"
    initialSlide={2}
    loop
    speed={900}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 220,
      modifier: 2.5,
      scale: 0.82,
      slideShadows: false,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="w-full py-10"
  >
    {images.map((img, index) => (
      <SwiperSlide
        key={index}
        className="!w-[280px] sm:!w-[340px] md:!w-[420px]"
      >
        <div
          className="select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={img}
            alt=""
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="h-[420px] w-full rounded-3xl object-cover shadow-2xl transition-all duration-500 select-none"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
}
