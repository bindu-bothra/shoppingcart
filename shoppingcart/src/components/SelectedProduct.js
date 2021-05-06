import React from "react";
// import { connect } from 'react-redux'
// import {removeItems} from '../actions'
import "./App.css";
import { FormGroup, FormLabel, Form, Col, Button, Row } from "react-bootstrap";

let SelectedProduct = ({ data, selectedData, onClickRemove }) => {
  // let size,price

  let dataModified = data.filter((element) => element.id === selectedData.id);
  dataModified = dataModified[0];
  // console.log(dataModified)
  return (
    <div className={"display-cart"}>
      <Form
        id="RemoveForm"
        horizantal="true"
        onSubmit={(e) => {
          e.preventDefault();
          onClickRemove(
            selectedData.cartId,
            selectedData.price,
            selectedData.quantity,
            selectedData.isFreeShipping
          );
        }}
      >
        <h3>{dataModified.title}</h3>
        <FormGroup>
          <Row>
            {dataModified.description ? (
              <div>
                <Col componentClass={FormLabel} xs={8} sm={8}>
                  Description:{" "}
                </Col>
                {dataModified.description}
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            {dataModified.style ? (
              <div>
                <Col componentClass={FormLabel} xs={8} sm={8}>
                  Style:{" "}
                </Col>
                {dataModified.style}
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col componentClass={FormLabel} xs={8} sm={8}>
              Selected Size :{" "}
            </Col>
            {selectedData.selectedSize}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col componentClass={FormLabel} xs={8} sm={8}>
              Quantity :{" "}
            </Col>
            {selectedData.quantity}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col componentClass={FormLabel} xs={8} sm={8}>
              Price :{" "}
            </Col>
            {dataModified.currencyFormat}
            {dataModified.price}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col componentClass={FormLabel} xs={8} sm={8}>
              No. of installments:{" "}
            </Col>
            {dataModified.installments}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            {dataModified.isFreeShipping ? (
              <Col
                componentClass={FormLabel}
                xs={12}
                sm={12}
                style={{ color: "blue" }}
              >
                &#10004;Free Shipping Available{" "}
              </Col>
            ) : (
              <Col componentClass={FormLabel} xs={12} sm={12}>
                Shipping Charges: $1{" "}
              </Col>
            )}
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col xs={4} sm={4}>
              <Button type="submit" name="Remove" value={data.price}>
                Remove
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SelectedProduct;
