/* eslint-disable no-unused-vars */
// import Header from "../../components/Header/Header";
import Article from "../../components/Article/Article";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import { useEffect, useState } from "react";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (noProduct) => {
    // console.log(noProduct);
    const updateProduct = products.filter((product) => product.no != noProduct);
    setProducts(updateProduct);
  };

  const detailProduct = (product) => {
    localStorage.setItem("detailArticle", JSON.stringify(product));
  };

  const [isEdit, setIsEdit] = useState(false);
  const [productEdit, setProductEdit] = useState({});

  // useEffect(() => {
  //   if (isEdit) {
  //     localStorage.setItem("product", JSON.stringify(productEdit));
  //   } else {
  //     localStorage.removeItem("product");
  //   }
  // }, [isEdit, productEdit]);

  const editHandler = (product = null) => {
    setIsEdit(!isEdit);
    console.log(product);
    setProductEdit(product);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-8">
            <Article />
            <div className="row d-flex justify-content-center">
              <div className="col-md-9 px-4">
                <div
                  className="alert alert-danger alert-dismissible fade"
                  role="alert"
                >
                  <strong>Input Failed!</strong> Please check your input.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <Form
                  isEdit={isEdit}
                  productEdit={productEdit}
                  editHandler={editHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table
        products={products}
        isEdit={isEdit}
        editHandler={editHandler}
        detailProduct={detailProduct}
      />
    </>
  );
};

export default CreateProduct;
