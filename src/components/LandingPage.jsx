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

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Meta } = Card;

export default function LandingPage() {
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const categories = [
    { key: "home", label: "Home" },
    { key: "new-arrivals", label: "New Arrivals" },
    { key: "shop", label: "Shop" },
    { key: "contact", label: "Contact" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.5,
      reviews: 124,
      sale: true,
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.8,
      reviews: 89,
      sale: false,
    },
    {
      id: 3,
      name: "Casual Cotton T-Shirt",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.3,
      reviews: 156,
      sale: false,
    },
    {
      id: 4,
      name: "Elegant Evening Gown",
      price: 199.99,
      originalPrice: 299.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.9,
      reviews: 67,
      sale: true,
    },
    {
      id: 5,
      name: "Comfortable Joggers",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.4,
      reviews: 203,
      sale: false,
    },
    {
      id: 6,
      name: "Stylish Blazer",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.6,
      reviews: 91,
      sale: false,
    },
    {
      id: 7,
      name: "Cozy Sweater",
      price: 69.99,
      originalPrice: 89.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.7,
      reviews: 145,
      sale: true,
    },
    {
      id: 8,
      name: "Designer Handbag",
      price: 159.99,
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.8,
      reviews: 78,
      sale: false,
    },
  ];

  const cartItems = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 89.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 79.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const heroSlides = [
    {
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends",
      image: "/placeholder.svg?height=500&width=1200",
      buttonText: "Shop Now",
    },
    {
      title: "Up to 50% Off",
      subtitle: "End of season sale",
      image: "/placeholder.svg?height=500&width=1200",
      buttonText: "View Sale",
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh styles just in",
      image: "/placeholder.svg?height=500&width=1200",
      buttonText: "Explore",
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="bg-white shadow-sm px-4 lg:px-8 sticky top-0 z-50 h-20">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="lg:hidden mr-2"
              onClick={() => setMobileMenuVisible(true)}
            />
            <img
              src="/onewear.png"
              alt="Logo"
              onClick={() => navigate("/")}
              style={{
                height: "150px",
                width: "146px",
                cursor: "pointer",
                marginTop: "8px",
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <Menu
            mode="horizontal"
            items={categories}
            className="hidden lg:flex border-none flex-1 justify-center text-lg"
            style={{ minWidth: 0 }}
          />

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <Search
              placeholder="Search products..."
              className="hidden md:block w-64"
              enterButton={<SearchOutlined />}
            />
            <Button
              type="text"
              icon={<SearchOutlined />}
              className="md:hidden"
            />
            <Button type="text" icon={<HeartOutlined size={24} />} />
            <Button type="text" icon={<UserOutlined />} />
            <Badge count={cartItems.length} size="small">
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                onClick={() => setCartVisible(true)}
              />
            </Badge>
          </div>
        </div>
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
      >
        <Menu mode="vertical" items={categories} className="border-none" />
        <Divider />
        <Search
          placeholder="Search products..."
          enterButton={<SearchOutlined />}
          className="mb-4"
        />
      </Drawer>

      {/* Shopping Cart Drawer */}
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={() => setCartVisible(false)}
        open={cartVisible}
        width={400}
        footer={
          <div className="space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total: $249.97</span>
            </div>
            <Button type="primary" size="large" block>
              Checkout
            </Button>
          </div>
        }
      >
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <Button type="link" size="small">
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.image} size={64} shape="square" />}
                title={item.name}
                description={
                  <div>
                    <div>${item.price}</div>
                    <div>Qty: {item.quantity}</div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Drawer>

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
              {categories.slice(0, 4).map((category) => (
                <Col xs={12} sm={6} key={category.key}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <Text className="text-lg font-medium">
                          {category.label}
                        </Text>
                      </div>
                    }
                    className="text-center"
                  >
                    <Button type="link" className="p-0">
                      Shop {category.label}
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
    </Layout>
  );
}
