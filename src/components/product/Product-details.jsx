const ProductDetails = () => {
  return (
    <div className="product_details_container">
      <div className="catalog">Điện thoại</div>
      <div className="product_name">Siêu Iphone phân thân</div>
      <div className="product_stars_rate">5 Sao</div>
      <div className="product_price">99.99 $</div>
      <div className="product_size">
        <select name="" id="">
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
        </select>
      </div>
      <div className="product_promo">
        <select name="" id="">
          <option value="">Giảm 50%</option>
        </select>
      </div>
      <div className="product_button">
        <button>Mua ngay</button>
      </div>
    </div>
  );
};

export { ProductDetails };
