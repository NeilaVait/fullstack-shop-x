import React, { Component } from 'react';
import Button from './common/button/button';
import SocialLinks from './common/socialLinks';
import YouMayAlsoLike from './youMayAlsoLike';
import Price from './common/price/price';

class ShopSingleItem extends Component {
  constructor() {
    super();
    this.state = {
      mainImage: '',
      images: [],
      currentItemId: '',
      currentItem: {},
    };
  }

  componentDidMount() {
    const currentItemId = +this.props.match.params.id;
    const item = this.props.items.find((i) => i._id === currentItemId);

    const { images, image } = item;
    const imagesRequired = images.map((imgNo) => require(`../static/shop/${image}${imgNo}.jpg`).default);

    // const images = require(`../static/shop/${image}3.jpg`).default
    // nustatyti default image
    // atvaozduoti main image componente
    // pakeisti main image su paspaudimu ant nuotraukos
    // padaryti kad images butu nedidli ir tilptu 3 po nuotrauka
    this.setState({
      images: imagesRequired,
      mainImage: imagesRequired[2],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update');
  }

  handleMainImage = (img) => {
    this.setState({ mainImage: img });
  };

  render() {
    const { socialLinksData, items } = this.props;
    const currentItemId = +this.props.match.params.id;
    const item = this.props.items.find((i) => i._id === currentItemId);
    return (
      <div className="single-item ">
        <div className="d-flex">
          <div className="single__images-part w-50">
            <img className="single__main-image" src={this.state.mainImage} alt="main item" />
            <div className="single__photos d-flex flex-wrap">
              {this.state.images.map((img) => (
                <img
                  onClick={() => this.handleMainImage(img)}
                  key={img}
                  className="single__item-image"
                  src={img}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">{item.title}</h2>
            <Price salePrice={item.salePrice}>{item.price}</Price>
            <div className="item-info__options d-flex ">
              <div>
                <label htmlFor="colors">Colors</label>
                <br />
                <select name="colors" id="colors">
                  <option value="1">Green</option>
                  <option value="2">Red</option>
                  <option value="3">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="sizes">Sizes</label>
                <br />
                <select name="sizes" id="sizes">
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
            </div>
            <Button outline>Add to cart</Button>
            <br />
            <Button>Buy it now</Button>
            <SocialLinks titles socialLink={socialLinksData} />
          </div>
        </div>
        <p className="single-item__description">
          Our navy S.P.C.C logo flat peak cap is crafted from high quality Acrylic twill with a contrast white 3D
          S.P.C.C embroidery on the crown. The crown is cut from six panels for the perfect shape and has an adjustable
          PU back strap with metal clip to ensures a comfortable fit. Our Flat Peak cap is finished off with an SPCC
          metal clip label, an SPCC woven label, twill sweatband and the tonal embroidered eyelets ensure ventilation.
        </p>
        <YouMayAlsoLike relatedItems={items} />
      </div>
    );
  }
}

export default ShopSingleItem;
