import React from "react";
import { Layout, Row, Col, Typography, Button, Space, Divider } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TikTokFilled,
} from "@ant-design/icons";
import { MapPin, Phone } from "lucide-react";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterSection = () => {
  return (
    <Footer className="bg-black text-white pb-20 md:pb-8">
      {" "}
      {/* Added bottom padding for mobile */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo and tagline - centered */}
        <div className="flex flex-col items-center text-center">
          <div className="h-[80px] flex items-center">
            <img
              src="/onewear-white.svg"
              alt="logo"
              className="w-[180px] h-auto"
            />
          </div>
          <Text className="text-gray-300 " style={{ fontSize: "1rem" }}>
            The piece you have been missing.
          </Text>
        </div>

        {/* Social media buttons - centered */}
        <div className="flex justify-center mt-6">
          <Space size="large">
            <Button
              type="text"
              className="!text-gray-300 hover:!text-white"
              icon={<FacebookFilled style={{ fontSize: "1.5rem" }} />}
            />
            <Button
              type="text"
              className="!text-gray-300 hover:!text-white"
              icon={<InstagramFilled style={{ fontSize: "1.5rem" }} />}
            />
            <Button
              type="text"
              className="!text-gray-300 hover:!text-white"
              icon={<TikTokFilled style={{ fontSize: "1.5rem" }} />}
            />
          </Space>
        </div>

        {/* Product and Contact sections */}
        <Row gutter={[32, 32]} className="mt-8 justify-center">
          <Col xs={24} sm={12} md={6} lg={4}>
            <div className=" sm:text-left">
              <Title level={4} className="!text-white !mb-4 !text-lg">
                Products
              </Title>
              <div className="space-y-2">
                <div>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-base"
                  >
                    New Arrivals
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-base"
                  >
                    Summer Collection
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6} lg={4}>
            <div className=" sm:text-left mt-6 sm:mt-0">
              <Title level={4} className="!text-white !mb-4 !text-lg">
                Contact us
              </Title>
              <div className="space-y-2">
                <div className="flex  sm:justify-start items-center gap-2 text-gray-300 text-base">
                  <MapPin size={16} />
                  <span>Biratnagar, Nepal</span>
                </div>
                <div className="flex  sm:justify-start items-center gap-2 text-gray-300 text-base">
                  <Phone size={16} />
                  <span>+9778838383883</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="!border-gray-600  " />
        <div className="text-center">
          <Text className="text-gray-400 text-sm sm:text-base">
            © 2025 OnwWear. All rights reserved. | Privacy Policy | Terms of
            Service
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
