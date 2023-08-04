"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation, Pagination } from "swiper"
import { Box, Flex, Img } from "@chakra-ui/react"

type Props = {
  images: {
    name?: string
    src: string
  }[]
}

export const Gallery = ({ images }: Props) => (
  <Swiper
    navigation={true}
    pagination={true}
    modules={[Navigation, Pagination]}
    className="mySwiper"
  >
    {images.map((image) => (
      <SwiperSlide key={image.src}>
        <Flex justify="center" alignItems="center">
          <Img src={`/${image.src}`} />
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
)
