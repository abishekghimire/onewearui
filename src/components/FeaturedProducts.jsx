import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { featuredProducts } from "../data/featuredProducts";

const { Title } = Typography;
const { Meta } = Card;

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Categories Section */}

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
    </div>
  );
};

export default FeaturedProducts;
