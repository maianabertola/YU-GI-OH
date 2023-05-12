import "./Button.css";

function Button({ cta, onClick }) {
  return (
    <>
      <div onClick={onClick} className="button">
        {cta}
      </div>
    </>
  );
}

export default Button;
