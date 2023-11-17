const TextArea = ({ name, id, label, value, className, onChange }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <textarea
          className={className}
          name={name}
          id={id}
          rows="6"
          required=""
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TextArea;
