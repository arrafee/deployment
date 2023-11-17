const Select = ({ name, id, label, value, className, onChange }) => {
  const option = ["One", "Two", "Three"];
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <select
          value={value}
          className={className}
          name={name}
          id={id}
          aria-label="Default select example"
          required=""
          onChange={onChange}
        >
          <option value="">Choose..</option>
          {option.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
