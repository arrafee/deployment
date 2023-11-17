import { useEffect } from "react";
import Card from "../../components/Card/Card";

const DetailProduct = () => {
  const product = JSON.parse(localStorage.getItem("detailArticle"));
  useEffect(() => {
    console.log(product);
  });

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-7">
            <Card
              id={product.id}
              name={product.productName}
              category={product.productCategory}
              image={product.imageProduct}
              freshness={product.productFreshness}
              additionalDescription={product.additionalDescription}
              price={product.productPrice}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
