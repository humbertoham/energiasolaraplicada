import React from "react";
import {
  Content,
  Wrapper,
  Text,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
  Page,
  Overlay,
  Tec,
} from "./Work.styles";
import LaPared from "../../images/banner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
const Work = () => (
  <Wrapper id="servicios">
    <Content>
      <Text>
        <h1>Servicios</h1>
      </Text>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <CardWrapper>
              <CardHeader>
                <CardHeading>servicio</CardHeading>
                <Page src={LaPared} />
              </CardHeader>
              <CardBody>
                <CardFieldset>
                  <CardOptionsNote>servicio</CardOptionsNote>
                </CardFieldset>
              </CardBody>
            </CardWrapper>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <CardWrapper>
              <CardHeader>
                <CardHeading>servicios</CardHeading>
                <Page src={LaPared} />
              </CardHeader>
              <CardBody>
                <CardFieldset>
                  <CardOptionsNote>servicio</CardOptionsNote>
                </CardFieldset>
              </CardBody>
            </CardWrapper>
          </div>
        </SwiperSlide>
      </Swiper>
    </Content>
  </Wrapper>
);

export default Work;
