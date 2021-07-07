const Price = (props) => {
  return (
    <p className="price">
      {props.children} eur salePrice: {props.salePrice}
    </p>
  );
};

export default Price;
