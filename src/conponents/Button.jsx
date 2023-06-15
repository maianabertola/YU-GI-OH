import "./Button.css";

function Button({ cta, onClick }) {
  return (
    <>
      <div onClick={onClick} className="button-49">
        {cta}
      </div>
    </>
  );
}

export default Button;
