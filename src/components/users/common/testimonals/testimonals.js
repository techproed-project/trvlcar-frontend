import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import testimonals from "./testimonals.json";
import "./testimonals.css";
import "swiper/css";
import "swiper/css/pagination";
import Testimonal from "./testimonal";

const Testimonals = () => {
  return (
    <section className="testimonals">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Testimonals</h3>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {testimonals.map((testimonal, index) => (
                <SwiperSlide key={index}>
                  <Testimonal {...testimonal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            suscipit quis, provident explicabo porro quo iste. Recusandae
            accusantium veritatis odio? Nemo tempora minima id dolorem iusto ea
            non doloribus quae.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;
