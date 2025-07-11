import React, { useState } from "react";
import { Badge } from "antd";
import {
  HomeOutlined,
  ShoppingOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { cartItems } from "../data/cartItems";

const MobileBottomNav = () => {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("shop");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Navigate to corresponding route
    // switch (tab) {
    //   case "home":
    //     navigate("/");
    //     break;
    //   case "shop":
    //     navigate("/shop");
    //     break;
    //   case "wishlist":
    //     navigate("/wishlist");
    //     break;
    //   case "cart":
    //     navigate("/cart");
    //     break;
    //   case "profile":
    //     navigate("/profile");
    //     break;
    //   default:
    //     navigate("/");
    // }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {/* Home */}
        <button
          onClick={() => handleTabClick("home")}
          className={`flex flex-col items-center p-2 ${
            activeTab === "home" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <HomeOutlined className="text-xl" />
          <span className="text-xs mt-1">Home</span>
        </button>

        {/* Shop */}
        <button
          onClick={() => handleTabClick("shop")}
          className={`flex flex-col items-center p-2 ${
            activeTab === "shop" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <ShoppingOutlined className="text-xl" />
          <span className="text-xs mt-1">Shop</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => handleTabClick("wishlist")}
          className={`flex flex-col items-center p-2 ${
            activeTab === "wishlist" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <HeartOutlined className="text-xl" />
          <span className="text-xs mt-1">Wishlist</span>
        </button>

        {/* Cart with badge */}
        <button
          onClick={() => handleTabClick("cart")}
          className={`flex flex-col items-center p-2 relative ${
            activeTab === "cart" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <Badge count={cartItems.length} size="small" offset={[4, -4]}>
            <ShoppingCartOutlined className="text-xl" />
          </Badge>
          <span className="text-xs mt-1">Cart</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => handleTabClick("profile")}
          className={`flex flex-col items-center p-2 ${
            activeTab === "profile" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <UserOutlined className="text-xl" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
