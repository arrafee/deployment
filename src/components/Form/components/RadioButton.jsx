import { useState } from "react";

const RadioButton = ({ name, id, label, value, className, onChange }) => {
  const [radio, setRadio] = useState([
    "Brand New",
    "Second Hand",
    "Refufbished",
  ]);
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        {radio.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className={className}
              type="radio"
              name={name}
              id={id + index}
              defaultValue={item}
              required=""
              checked={value === item}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor={name + index}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioButton;
