import React, { Component } from 'react';

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

  handleTextChange = ({ target }) => {
    const formDataCopy = { ...this.state.formData };
    formDataCopy[target.name] = target.value;
    this.setState({ formData: formDataCopy });
  };

  render() {
    const { title, price, quantity } = this.state.formData;
    return (
      <div className="add-item">
        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <h3>Fill to add item to shop</h3>
          <input onChange={this.handleTextChange} value={title} type="text" name="title" placeholder="Title" />
          <input onChange={this.handleTextChange} value={price} type="number" name="price" placeholder="Price" />
        </form>
        <button type="submit">add</button>
      </div>
    );
  }
}

export default AddItemForm;
