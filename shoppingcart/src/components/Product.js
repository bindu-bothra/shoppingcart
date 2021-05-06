import React from "react";
import "./App.css";
import { Form, Col, Button, Row } from "react-bootstrap";
let Product = ({ data, onClickBuy }) => {
  let size = { value: "" };
  let quantity = { value: 1 };
  return (
    <div className={"display"}>
      <Form
        horizantal="true"
        id="BuyForm"
        onSubmit={(e) => {
          e.preventDefault();
          onClickBuy(
            data.id,
            size.value,
            data.price,
            quantity.value,
            data.isFreeShipping
          );
          quantity.value = 1;
        }}
      >
        <h3>{data.title}</h3>
        <div>&nbsp;</div>
        <Form.Group>
          <Row>
            {data.description ? (
              <div>
                <Col as={Form.Label} xs={4} sm={4}>
                  Description:{" "}
                </Col>
                {data.description}
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            {data.style ? (
              <div>
                <Col as={Form.Label} xs={4} sm={4}>
                  Style:{" "}
                </Col>
                {data.style}
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col as={Form.Label} xs={4} sm={4}>
              No. of installments:{" "}
            </Col>
            {data.installments}
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col as={Form.Label} xs={4} sm={4}>
              Quantity:{" "}
            </Col>
            <Col xs={4} sm={4}>
              <Form.Control
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={1}
                min={1}
                inputRef={(node) => {
                  quantity = node;
                }}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col as={Form.Label} xs={4} sm={4}>
              Size:{" "}
            </Col>
            <Col xs={4} sm={4}>
              <Form.Control
                as="select"
                id="size"
                name="size"
                value={size.value}
                placeholder="select the size"
                inputRef={(node) => {
                  size = node;
                }}
              >
                {data.availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col xs={4} sm={4}>
              <Button type="submit" name="price" value={data.price}>
                Buy For {data.currencyFormat}
                {data.price}
              </Button>
            </Col>
          </Row>
        </Form.Group>
        {/* <div>{data.installments}</div>
                <div>{data.isFreeShipping}</div> */}
        <Form.Group>
          <Row>
            {data.isFreeShipping ? (
              <Col as={Form.Label} xs={8} sm={8} style={{ color: "blue" }}>
                &#10004;Free Shipping Available{" "}
              </Col>
            ) : (
              <Col as={Form.Label} xs={8} sm={8}>
                Shipping Charges $1{" "}
              </Col>
            )}
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Product;
