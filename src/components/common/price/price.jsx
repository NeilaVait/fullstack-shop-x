import css from './price.module.css';

const Price = (props) => {
  const { salePrice, children } = props;

  return (
    <p className="price">
      <span className={salePrice ? css.salePrice : ''}>{formatPrice(salePrice)}</span>{' '}
      <span className={salePrice ? css.price : ''}>{formatPrice(children)}</span> eur
    </p>
  );
};

function formatPrice(price) {
  if (!price) return;
  const roundPrice = +price.toFixed(2);
  return roundPrice;
}

export default Price;
