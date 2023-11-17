/* eslint-disable react/prop-types */
import "./Input.css";
const Input = ({
  label,
  type,
  name,
  id,
  className,
  onChange,
  addons,
  value,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <div className="input-group mb-3">
          {addons == "on" ? (
            <span
              className="input-group-text bg-white border-end-0"
              id="basic-addon1"
            >
              $
            </span>
          ) : (
            <></>
          )}
          <input
            type={type ? type : "text"}
            className={className ? className : ""}
            name={name ? name : ""}
            id={id ? id : ""}
            value={value ? value : ""}
            required=""
            onChange={onChange}
            // accept="image/*"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
