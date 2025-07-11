import React, { useState } from "react";
import { Layout, Menu, Input, Badge, Button, Dropdown, Space } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  HeartOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { menuItems } from "../data/menuItems";
import { cartItems } from "../data/cartItems";
import CartDrawer from "./CartDrawer";
import { Logs } from "lucide-react";
import MobileMenuDrawer from "./MobileMenuDrawer";

const { Header } = Layout;
const { Search } = Input;

const HeaderSection = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const showCartDrawer = () => {
    setCartVisible(true);
  };

  const closeCartDrawer = () => {
    setCartVisible(false);
  };

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  // Dropdown menu items
  const actionItems = [
    {
      key: "wishlist",
      icon: <HeartOutlined />,
      label: "Wishlist",
    },
    {
      key: "account",
      icon: <UserOutlined />,
      label: "Account",
    },
    {
      key: "cart",
      icon: <ShoppingCartOutlined />,
      label: (
        <Space>
          Cart
          <Badge count={cartItems.length} size="small" />
        </Space>
      ),
      onClick: showCartDrawer,
    },
  ];

  return (
    <>
      <Header className="bg-white shadow-sm px-4 lg:px-8 sticky top-0 z-50 h-20">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Mobile menu button - left side in mobile */}
          <Button
            type="text"
            icon={<Logs size={20} />}
            className="lg:hidden mr-2 mt-2 flex md:hidden"
            onClick={() => setMobileMenuVisible(true)}
          />

          {/* Logo - centered in mobile */}
          <div className="flex-1 flex justify-center md:justify-start">
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
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Desktop Navigation */}
          <Menu
            mode="horizontal"
            items={menuItems}
            className="hidden lg:flex border-none flex-1 justify-center text-lg"
            style={{ minWidth: 0 }}
          />

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - only icon in mobile */}
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

            {/* Desktop action buttons */}
            <div className="hidden md:flex items-center space-x-1">
              <Button type="text" icon={<HeartOutlined />} />
              <Button type="text" icon={<UserOutlined />} />
              <Badge count={cartItems.length} size="small">
                <Button
                  type="text"
                  icon={<ShoppingCartOutlined />}
                  onClick={showCartDrawer}
                />
              </Badge>
            </div>

            {/* Mobile dropdown for actions */}
            {/* <Dropdown
              menu={{ items: actionItems }}
              placement="bottomRight"
              className="md:hidden"
            >
              <Button type="text" icon={<MoreOutlined />} />
            </Dropdown> */}
          </div>
        </div>
      </Header>
      <MobileMenuDrawer visible={mobileMenuVisible} close={closeMobileMenu} />

      <CartDrawer visible={cartVisible} close={closeCartDrawer} />
    </>
  );
};

export default HeaderSection;
