import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { BiDollar } from "react-icons/bi";
import "./style.css";

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Card
        style={{ boxSizing: "border-box", padding: "10px", display: "flex" }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              to={`/${product.slug}/${product._id}/p`}
              className="caImgContainer"
            >
              <img
                src={generatePublicUrl(product.productPictures[0].img)}
                alt=""
              />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiDollar />
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
