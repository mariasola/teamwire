import React from "react";
import InputUI from "./InputUI";
import ButtonUI from "./ButtonUI";

const AddWish = props => {
  const { newInput, handleNewInput, handleClick } = props;
  return (
    <div>
      <InputUI newInput={newInput} handleNewInput={handleNewInput} />
      <ButtonUI handleClick={handleClick} />
    </div>
  );
};

export default AddWish;
