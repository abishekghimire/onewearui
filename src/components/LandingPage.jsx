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
import HeroSliders from "./HeroSliders";
import FeaturedProducts from "./FeaturedProducts";
import FooterSection from "./FooterSection";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

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
        <HeroSliders />

        <FeaturedProducts />
      </Content>

      {/* Footer */}
      <FooterSection />
      <MobileBottomNav />
    </Layout>
  );
}
