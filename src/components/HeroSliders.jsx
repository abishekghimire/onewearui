import React from "react";
import { Carousel, Typography, Button } from "antd";
import { heroSlides } from "../data/heroSlides";

const { Title, Text } = Typography;

const HeroSliders = () => {
  return (
    <Carousel autoplay className="mb-8">
      {heroSlides.map((slide, index) => (
        <div key={index}>
          <div
            className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative text-center text-white z-10 px-4">
              <Title
                level={1}
                className="!text-white !mb-4 text-3xl md:text-5xl"
              >
                {slide.title}
              </Title>
              <Text className="text-lg md:text-xl mb-6 block">
                {slide.subtitle}
              </Text>
              <Button
                type="primary"
                size="large"
                className="bg-white text-black hover:bg-gray-100"
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSliders;
