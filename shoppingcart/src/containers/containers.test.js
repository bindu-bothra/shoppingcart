import React from "react";
import Product from '../components/Product';
import {Sort} from "./Sort";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import data from '../productsData.json';
import {ProductList} from './ProductList'
import { Filtering } from "./Filtering";
import { FloatingCart } from "./FloatingCart";
import SelectedProduct from '../components/SelectedProduct';
configure({ adapter: new Adapter() });

let dataFiltered= [{
  "id": 13,
  "sku": 51498472915966366,
  "title": "Dark Thug Blue-Navy T-Shirt",
  "description": "",
  "availableSizes": ["M"],
  "style": "Front print and paisley print",
  "price": 29.45,
  "installments": 5,
  "currencyId": "USD",
  "currencyFormat": "$",
  "isFreeShipping": true
}]
const selectedData=[{
  "id":13,
  "cartId":0.52,
  "price": 29.45,
  "quantity": 1,
  "isFreeShipping": true,
  "selectedSize":"M"
}]

describe("Containers Test", () => {
    const mockClickBuyfn = jest.fn();
    test("renders the Product wrapper from Sort component", () => {
        const wrapper = shallow(<Sort data={data.products} onClickBuy={mockClickBuyfn}/>);
        expect(wrapper.find(Product).length).toEqual(17);
      });
    
    test("renders the Product wrapper from ProductList component", () => {
        const wrapper = shallow(<ProductList data={data.products} onClickBuy={mockClickBuyfn}/>);
        expect(wrapper.find(Product).length).toEqual(17);
      });

    test("renders the Product wrapper from Filtering component", () => {
        const wrapper = shallow(<Filtering data={dataFiltered} onClickBuy={mockClickBuyfn}/>);
        expect(wrapper.find(Product).length).toEqual(1);
      });
    
      test("renders the SelectedProduct wrapper from Floating Cart component", () => {
        const wrapper = shallow(<FloatingCart data={dataFiltered} selectedData={selectedData} amount={29.45} onClickRemove={mockClickBuyfn}/>);
        expect(wrapper.find(SelectedProduct).length).toEqual(1);
      });    
   });

