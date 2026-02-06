import './styles.css';

function Input({ label, name, type = 'text', placeholder }) {
  return (
    <div className="input_wrapper">
      {label && <label className="input_label">{label}</label>}
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;