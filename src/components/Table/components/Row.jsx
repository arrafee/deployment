/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../redux/slice/productSlice";
const Row = ({
  id,
  product,
  productName,
  productCategory,
  imageProduct,
  productFreshness,
  additionalDescription,
  productPrice,
  detailProduct,
  // isEdit,
  editHandler,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>
          <Link
            to={`/product/${id}`}
            state={product}
            className="text-dark text-decoration-none"
            target="_blank"
            onClick={() => detailProduct(product)}
          >
            {id}
          </Link>
        </td>
        <td>{productName}</td>
        <td>{productCategory}</td>
        <td>
          <img src={imageProduct} alt="" width={100} height={100} />
        </td>
        <td>{productFreshness}</td>
        <td>{productPrice}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              if (confirm("Ingin hapus data?")) {
                dispatch(deleteProduct(id));
              }
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() =>
              editHandler({
                id,
                productName,
                productCategory,
                imageProduct,
                productFreshness,
                additionalDescription,
                productPrice,
              })
            }
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default Row;
