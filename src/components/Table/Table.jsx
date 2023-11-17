/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Row from "./components/Row";

const Table = ({ isEdit, editHandler, detailProduct }) => {
  const data = useSelector((state) => state.products);
  const { products } = data;

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5 flex justify-content-center">
          <h4 className="text-center mb-4">List Product</h4>
          <div className="col-md-11">
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Image of Product</th>
                  <th>Product Freshness</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <Row
                      key={index}
                      product={product}
                      id={product.id}
                      productName={product.productName}
                      productCategory={product.productCategory}
                      imageProduct={product.imageProduct}
                      productFreshness={product.productFreshness}
                      additionalDescription={product.additionalDescription}
                      productPrice={product.productPrice}
                      detailProduct={detailProduct}
                      // isEdit={isEdit}
                      editHandler={editHandler}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} align="center">
                      Empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <form action="" method="post">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="form-control"
                    placeholder="Search by Product Name"
                  />
                </div>
              </div>
              <div className="d-flex mt-2">
                <button className="btn btn-primary rounded-0">Deletion</button>
                <button className="btn btn-light rounded-0 border-primary border-2">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
