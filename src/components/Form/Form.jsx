/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Input from "./components/Input";
import Select from "./components/Select";
import RadioButton from "./components/RadioButton";
import TextArea from "./components/TextArea";
import { useEffect, useState } from "react";
import { addProduct, editProduct } from "../../redux/slice/productSlice";
import { useDispatch } from "react-redux";

const Form = ({ isEdit, productEdit, editHandler }) => {
  const dispatch = useDispatch();

  const [dataProductEdit, setDataProductEdit] = useState({});

  useEffect(() => {
    setDataProductEdit({
      ...productEdit,
    });
  }, [isEdit]);

  const [newProduct, setNewProduct] = useState({
    productName: "",
    productCategory: "",
    imageProduct: "",
    additionalDescription: "",
    productFreshness: "",
    productPrice: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    productName: "",
    productCategory: "",
    imageProduct: "",
    additionalDescription: "",
    productFreshness: "",
    productPrice: "",
  });

  const [isError, setIsError] = useState(false);

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    if (isEdit) {
      if (name === "imageProduct") {
        const file = e.target.files[0];
        setDataProductEdit({
          ...dataProductEdit,
          [name]: URL.createObjectURL(file),
        });
        if (dataProductEdit.imageProduct) {
          URL.revokeObjectURL(dataProductEdit.imageProduct);
        }
      } else {
        setDataProductEdit({
          ...dataProductEdit,
          // no: Math.floor(Math.random() * 90000) + 10000,
          [name]: value,
        });
      }
    } else {
      if (name === "imageProduct") {
        const file = e.target.files[0];
        setNewProduct({
          ...newProduct,
          [name]: URL.createObjectURL(file),
        });
      } else {
        setNewProduct({
          ...newProduct,
          // no: Math.floor(Math.random() * 90000) + 10000,
          [name]: value,
        });
      }
    }
    validationInput(e);
  };

  const validationInput = (e) => {
    const { name, value } = e.target;
    const productNameRegex = /^[a-zA-Z0-9\s-]*$/;
    const productPriceRegex = /^\d+$/;

    if (name === "productName") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          productName: "Product name tidak boleh kosong",
        });
      } else if (!productNameRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          productName: "Product name tidak valid",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          productName: "",
        });
      }
    } else if (name === "productCategory") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          productCategory: "Product category tidak boleh kosong",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          productCategory: "",
        });
      }
    } else if (name === "imageProduct") {
      const file = e.target.files[0];
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          imageProduct: "Image Product tidak boleh kosong",
        });
      } else if (!file.type.startsWith("image/")) {
        setErrorMsg({
          ...errorMsg,
          imageProduct: "Ekstensi file tidak sesuai",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          imageProduct: "",
        });
      }
    } else if (name === "productFreshness") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          productFreshness: "Product freshness tidak boleh kosong",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          productFreshness: "",
        });
      }
    } else if (name === "additionalDescription") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          additionalDescription: "Description tidak boleh kosong",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          additionalDescription: "",
        });
      }
    } else if (name === "productPrice") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          productPrice: "Product price tidak boleh kosong",
        });
      } else if (!productPriceRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          productPrice: "Product price tidak valid",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          productPrice: "",
        });
      }
    }
  };

  const cekInput = () => {
    if (
      newProduct.productName === "" ||
      newProduct.productCategory === "" ||
      newProduct.imageProduct === "" ||
      newProduct.productFreshness === "" ||
      newProduct.additionalDescription === "" ||
      newProduct.productPrice === ""
    ) {
      setIsError(true);
      return false;
    } else {
      setIsError(false);
      return true;
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log("Kilk submit");
    const id = Math.floor(Math.random() * 90000) + 10000;
    // addProduct();
    const data = {
      id: id,
      ...newProduct,
    };
    if (cekInput()) {
      // console.log(data);
      dispatch(addProduct(data));
      setNewProduct({
        productName: "",
        productCategory: "",
        imageProduct: "",
        additionalDescription: "",
        productFreshness: "",
        productPrice: "",
      });
    }
  };

  const updateProduct = (e) => {
    e.preventDefault();
    const data = { ...dataProductEdit };
    dispatch(editProduct(data));
    setDataProductEdit({
      id: "",
      productName: "",
      productCategory: "",
      imageProduct: "",
      additionalDescription: "",
      productFreshness: "",
      productPrice: "",
    });
    editHandler();
  };

  return (
    <>
      {isError ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Peringatan! Form tidak boleh ada yang kosong</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      ) : (
        <></>
      )}
      <form
        action=""
        encType="multipart/form-data"
        className="needs-validation"
        method="post"
        noValidate=""
      >
        <h5>Detail Product</h5>
        <div className="col-md-7">
          <Input
            type="text"
            name="productName"
            id="productName"
            className={`form-control ${
              errorMsg.productName ? "is-invalid" : ""
            } input-product`}
            addons="off"
            label="Product Name"
            // value={newProduct.productName}
            value={
              isEdit ? dataProductEdit.productName : newProduct.productName
            }
            onChange={(e) => onChangeValue(e)}
          />
          <small className="text-danger">{errorMsg.productName}</small>
          <Select
            name="productCategory"
            className={`form-select ${
              errorMsg.productCategory ? "is-invalid" : ""
            } input-product`}
            id="productCategory"
            label="Product Category"
            // value={newProduct.productCategory}
            value={
              isEdit
                ? dataProductEdit.productCategory
                : newProduct.productCategory
            }
            onChange={(e) => onChangeValue(e)}
          />
          <small className="text-danger">{errorMsg.productCategory}</small>
          <Input
            type="file"
            name="imageProduct"
            className={`form-control ${
              errorMsg.imageProduct ? "is-invalid" : ""
            } input-product`}
            id="imageProduct"
            label="Image of Product"
            // value={newProduct.imageProduct}
            // value={isEdit ? dataProductEdit.imageProduct : newProduct.imageProduct}
            onChange={(e) => onChangeValue(e)}
          />
          <small>
            File:{" "}
            {isEdit ? dataProductEdit.imageProduct : newProduct.imageProduct}
          </small>
          <small className="text-danger">{errorMsg.imageProduct}</small>
          <RadioButton
            name="productFreshness"
            className={`form-check-input ${
              errorMsg.productFreshness ? "is-invalid" : ""
            } input-product`}
            id="productFreshness"
            label="Product Freshness"
            // value={newProduct.productFreshness}
            value={
              isEdit
                ? dataProductEdit.productFreshness
                : newProduct.productFreshness
            }
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <small className="text-danger">{errorMsg.productFreshness}</small>
        <TextArea
          name="additionalDescription"
          className={`form-control ${
            errorMsg.additionalDescription ? "is-invalid" : ""
          } input-produ`}
          id="additionalDescription"
          label="Additional Description"
          // value={newProduct.additionalDescription}
          value={
            isEdit
              ? dataProductEdit.additionalDescription
              : newProduct.additionalDescription
          }
          onChange={(e) => onChangeValue(e)}
        />
        <small className="text-danger">{errorMsg.additionalDescription}</small>
        <Input
          type="number"
          name="productPrice"
          id="productPrice"
          className={`form-control ${
            errorMsg.productPrice ? "is-invalid" : ""
          } input-prod`}
          addons="on"
          label="Product Price"
          // value={newProduct.productPrice}
          value={
            isEdit ? dataProductEdit.productPrice : newProduct.productPrice
          }
          onChange={(e) => onChangeValue(e)}
        />
        <small className="text-danger">{errorMsg.productPrice}</small>
        <div className="d-grid px-3" style={{ marginTop: 100 }}>
          {isEdit ? (
            <button
              type="button"
              id="submit"
              className="btn btn-primary"
              onClick={(e) => updateProduct(e)}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              id="submit"
              className="btn btn-primary"
              onClick={(e) => sendData(e)}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
