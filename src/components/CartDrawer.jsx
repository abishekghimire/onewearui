import React from "react";
import { Avatar, Button, Drawer, List } from "antd";
import { useState } from "react";
import { cartItems } from "../data/cartItems";

const CartDrawer = ({ visible, close }) => {
  return (
    <>
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={close}
        open={visible}
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
    </>
  );
};

export default CartDrawer;
