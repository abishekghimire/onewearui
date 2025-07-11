import React from "react";
import { menuItems } from "../data/menuItems";
import { Drawer, Menu, Divider, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const MobileMenuDrawer = ({ visible, close }) => {
  return (
    <Drawer
      title="Menu"
      placement="left"
      onClose={close}
      open={visible}
      width={280}
    >
      <Menu mode="vertical" items={menuItems} className="border-none" />
      <Divider />
      <Search
        placeholder="Search products..."
        enterButton={<SearchOutlined />}
        className="mb-4"
      />
    </Drawer>
  );
};

export default MobileMenuDrawer;
