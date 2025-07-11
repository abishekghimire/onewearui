import {
  Layout,
  Menu,
  Input,
  Badge,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  Typography,
  Space,
  Drawer,
  List,
  Avatar,
  Divider,
} from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { menuItems } from "../data/menuItems";
import { featuredProducts } from "../data/featuredProducts";
import { cartItems } from "../data/cartItems";
import { heroSlides } from "../data/heroSlides";
import HeaderSection from "./HeaderSection";
import CartDrawer from "./CartDrawer";
import MobileBottomNav from "./MobileBottomNav";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Meta } = Card;

export default function LandingPage() {
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <Layout className="min-h-screen">
      {/* Header */}

      <HeaderSection />
      {/* Mobile Menu Drawer */}

      {/* Shopping Cart Drawer */}

      <Content>
        {/* Hero Carousel */}
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

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Categories Section */}
          <div className="mb-12">
            <Title level={2} className="text-center mb-8">
              Shop by Category
            </Title>
            <Row gutter={[16, 16]}>
              {menuItems.slice(0, 4).map((items) => (
                <Col xs={12} sm={6} key={items.key}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <Text className="text-lg font-medium">
                          {items.label}
                        </Text>
                      </div>
                    }
                    className="text-center"
                  >
                    <Button type="link" className="p-0">
                      Shop {items.label}
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Featured Products */}
          <div className="mb-12">
            <Title level={2} className="text-center mb-8">
              Featured Products
            </Title>
            <Row gutter={[16, 24]}>
              {featuredProducts.map((product) => (
                <Col xs={12} sm={8} lg={6} key={product.id}>
                  <Card
                    hoverable
                    cover={
                      <div className="relative">
                        <img
                          alt={product.name}
                          src={product.image || "/placeholder.svg"}
                          className="w-full h-64 object-cover"
                        />
                        {product.sale && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                            SALE
                          </div>
                        )}
                        <Button
                          type="text"
                          icon={<HeartOutlined />}
                          className="absolute top-2 right-2 bg-white shadow-sm"
                        />
                      </div>
                    }
                    actions={[
                      <Button type="primary" block>
                        Add to Cart
                      </Button>,
                    ]}
                  >
                    <Meta
                      title={
                        <div className="text-sm font-medium truncate">
                          {product.name}
                        </div>
                      }
                      description={
                        <div>
                          <div className="flex items-center mb-2">
                            <StarFilled className="text-yellow-400 text-xs mr-1" />
                            <span className="text-xs text-gray-600">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12 text-center">
            <Title level={3} className="mb-4">
              Stay Updated
            </Title>
            <Text className="text-gray-600 mb-6 block">
              Subscribe to our newsletter for the latest fashion trends and
              exclusive offers
            </Text>
            <div className="max-w-md mx-auto">
              <Search
                placeholder="Enter your email"
                enterButton="Subscribe"
                size="large"
              />
            </div>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={6}>
              <Title level={4} className="!text-white !mb-4">
                StyleHub
              </Title>
              <Text className="text-gray-300">
                Your premier destination for fashion-forward clothing and
                accessories.
              </Text>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Title level={5} className="!text-white !mb-4">
                Shop
              </Title>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Women
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Men
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Kids
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Accessories
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Title level={5} className="!text-white !mb-4">
                Customer Care
              </Title>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Size Guide
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Returns
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Shipping
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Title level={5} className="!text-white !mb-4">
                Company
              </Title>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Press
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Sustainability
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Title level={5} className="!text-white !mb-4">
                Follow Us
              </Title>
              <Space size="large">
                <Button
                  type="text"
                  className="!text-gray-300 hover:!text-white"
                >
                  Facebook
                </Button>
                <Button
                  type="text"
                  className="!text-gray-300 hover:!text-white"
                >
                  Instagram
                </Button>
                <Button
                  type="text"
                  className="!text-gray-300 hover:!text-white"
                >
                  Twitter
                </Button>
              </Space>
            </Col>
          </Row>
          <Divider className="!border-gray-600 !my-8" />
          <div className="text-center text-gray-400">
            <Text className="text-gray-400">
              © 2024 StyleHub. All rights reserved. | Privacy Policy | Terms of
              Service
            </Text>
          </div>
        </div>
      </Footer>
      <MobileBottomNav />
    </Layout>
  );
}
