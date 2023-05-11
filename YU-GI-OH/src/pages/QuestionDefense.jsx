import React from "react";

function QuestionDefense({ defense, setDefense, handleDefense }) {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>

        <div className="textFormContainer"></div>
        <div className="inputContainer">
          <label htmlFor="defense">What's its power of attack?</label>
          <input
            type="number"
            id="defense"
            value={defense}
            onChange={(event) => setDefense(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default QuestionDefense;
