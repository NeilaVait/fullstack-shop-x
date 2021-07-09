import React, { Component } from 'react';
// import Button from './common/button/button';

class AddItemForm extends Component {
  state = {
    formData: {
      title: 'ss',
      price: 50,
      quantity: 1,
    },
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-item">
        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <h3>Fill to add item to shop</h3>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="price" placeholder="Price" />
          {/* <input type="text" placeholder="image" />
          <input type="text" placeholder="color" />
          <label htmlFor="">Choose size and quantity</label>
          <label htmlFor="">small</label>
          <input type="number" name="small" id="small" />
          <label htmlFor="">medium</label>
          <input type="number" name="medium" id="medium" />
          <label htmlFor="">large</label>
          <input type="number" name="large" id="large" />
          <input type="number" placeholder="number of images" />
          <input type="text" placeholder="sku" />
          <select name="category" id="category">
            <option value="accesories">accessories</option>
            <option value="denim">denim</option>
            <option value="jeans">jeans</option>
            <option value="footwear">footwear</option>
            <option value="jackets">jackets</option>
          </select> */}
        </form>
        <button type="submit">add</button>
      </div>
    );
  }
}

export default AddItemForm;
