import "./Button.css";

function ButtonHero({ cta, theFunction }) {
  return (
    <>
      <div onClick={theFunction} className="button-49">
        {cta}
      </div>
    </>
  );
}

export default ButtonHero;
