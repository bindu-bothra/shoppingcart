import renderer from "react-test-renderer";
import Product from './Product';
import SelectedProduct from './SelectedProduct';
import React from 'react';
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { App } from './App' 
  const data= [{
    "id": 4,
    "sku": 9197907543445677,
    "title": "Born On The Streets",
    "description": "14/15 s/n� - Jogador",
    "availableSizes": ["XL"],
    "style": "Branco com listras pretas",
    "price": 25.9,
    "installments": 12,
    "currencyId": "USD",
    "currencyFormat": "$",
    "isFreeShipping": false
  },
  {
    "id": 9,
    "sku": 11600983276356165,
    "title": "Crazy Monkey Grey",
    "description": "",
    "availableSizes": ["L", "XL"],
    "style": "",
    "price": 134.9,
    "installments": 5,
    "currencyId": "USD",
    "currencyFormat": "$",
    "isFreeShipping": true
  }]

const selectedData=[{
    "id":9,
    "cartId":0.52,
    "price": 134.9,
    "quantity": 1,
    "isFreeShipping": true,
    "selectedSize":"L"
},{
  "id":4,
  "cartId":0.51,
  "price": 25.9,
  "quantity": 1,
  "isFreeShipping": false,
  "selectedSize":"XL"
}
]
  const mockfn = jest.fn();
  const mockfn1 = jest.fn();
describe("Component Snapshot", () => {
    test("renders Product without description ", () => {
      const component = renderer.create(<Product data={data[1]} onClickBuy={mockfn}/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("renders Product with description ", () => {
      const component = renderer.create(<Product data={data[0]} onClickBuy={mockfn}/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });


    test("renders Selected Product without description ", () => {
        const component = renderer.create(<SelectedProduct selectedData={selectedData[0]} data={data} onClickRemove={mockfn}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      test("renders Selected Product with description", () => {
        const component = renderer.create(<SelectedProduct selectedData={selectedData[1]} data={data} onClickRemove={mockfn}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
  });



describe("Click Submit",()=>{
      test("Click remove in SelectedProduct",()=>{
        const wrapper = shallow(<SelectedProduct  selectedData={selectedData[0]} data={data} onClickRemove={mockfn1}/>);
        wrapper.find('#RemoveForm').simulate('submit',{preventDefault(){}})
        expect(mockfn1.mock.calls.length).toBe(1)
    })
      test("Click buy in Product",()=>{
        const wrapper = shallow(<Product  data={data[0]} onClickBuy={mockfn}/>);
        wrapper.find('#BuyForm').simulate('submit',{preventDefault(){}})
        expect(mockfn.mock.calls.length).toBe(1)
    })
    test("Click handleSelect in App",()=>{
      const wrapper = shallow(<App handleSelect={mockfn} handleSort={mockfn}/>);
      wrapper.find('#basic-nav-dropdown-filter').simulate('select',{preventDefault(){}})
      expect(mockfn.mock.calls.length).toBe(2)
  })
  test("Click handleSort in App",()=>{
    const wrapper = shallow(<App handleSelect={mockfn} handleSort={mockfn}/>);
    wrapper.find('#basic-nav-dropdown-sort').simulate('select',{preventDefault(){}})
    expect(mockfn.mock.calls.length).toBe(3)
})  
})