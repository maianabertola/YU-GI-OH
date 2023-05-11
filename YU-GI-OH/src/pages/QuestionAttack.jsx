import React from "react";

function QuestionAttack({ attack, setAttack }) {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>

        <div className="textFormContainer"></div>
        <div className="inputContainer">
          <label htmlFor="attack">What's its power of attack?</label>
          <input
            type="number"
            id="attack"
            value={attack}
            onChange={(event) => setAttack(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default QuestionAttack;
