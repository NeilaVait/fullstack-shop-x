import React, { Component } from 'react';
import Button from './common/button/button';
import SocialLinks from './common/socialLinks';
import YouMayAlsoLike from './youMayAlsoLike';
import Price from './common/price/price';
import { getSingleItem, addToCart } from './../utils/requests';
import { toast } from 'react-toastify';

class ShopSingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      images: [],
      currentItemId: '',
      currentItem: {},
      selectedSize: 'small',
      selectedColor: 'green',
      currentUserId: '',
    };
  }

  setCurrentUserId(params) {
    const currentUserId = sessionStorage.getItem('loggedInUserId');
    if (currentUserId) this.setState({ currentUserId });
  }

  async componentDidMount() {
    this.setCurrentUserId();
    const currentItemId = this.props.match.params.id;
    const item = await getSingleItem(currentItemId);

    const { images, image } = item;
    const imagesRequired = images.map((imgNo) => require(`../static/shop/${image}${imgNo}.jpg`).default);

    this.setState({
      images: imagesRequired,
      mainImage: imagesRequired[2],
      currentItem: item,
    });
  }

  async updateItemQuantityAfterAddToCart() {
    const item = await getSingleItem(this.state.currentItem._id);
    this.setState({ currentItem: item });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentUserId } = this.state;
    if (currentUserId !== sessionStorage.getItem('loggedInUserId')) {
      this.setCurrentUserId();
    }
  }

  handleMainImage = (img) => {
    this.setState({ mainImage: img });
  };

  handleSize = (event) => {
    this.setState({ selectedSize: event.target.value });
    toast.dark('size changed');
  };

  handleColor = (event) => {
    this.setState({ selectedColor: event.target.value });
    toast.dark('color changed');
  };

  handleAddToCart = async () => {
    const { currentUserId, currentItem } = this.state;

    // console.log('add to cart please');
    // siusti i back end itema irasymui i cart
    const ats = await addToCart(currentUserId, currentItem);
    // pasitikriname ar gavom atsakyma
    if (!ats) {
      toast.error('error adding item');
    } else {
      toast.dark('Item added to cart');
      this.props.onCartCount();
      // atnaujinti item su updated quantity
      this.updateItemQuantityAfterAddToCart();
    }
  };

  render() {
    const { socialLinksData, items } = this.props;
    const { currentItem: item } = this.state;

    return (
      <div className="single-item ">
        <div className="d-flex single__image-desc">
          <div className="single__images-part w-50 pos-rel">
            {item.salePrice && <span className="sale">Sale</span>}
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
                <select onChange={this.handleColor} value={this.state.selectedColor} name="colors" id="colors">
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="sizes">Sizes</label>
                <br />
                <select onChange={this.handleSize} value={this.state.selectedSize} name="sizes" id="sizes">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div>
                <h4>In stock </h4>
                <p>{item.quantity}</p>
              </div>
            </div>
            {item.quantity !== 0 && (
              <Button onClick={this.handleAddToCart} outline>
                Add to cart
              </Button>
            )}
            <br />
            <Button disabled={item.quantity === 0}>{item.quantity ? 'buy it now' : 'out of stock'}</Button>

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
