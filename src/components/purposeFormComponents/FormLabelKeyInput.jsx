import React from "react";

function LabelKeyInput(props) {
  return (
    <div>
      <div className="d-flex flex-column w-100 mb-2">
        <label className="fs-4 fw-bold mb-1" htmlFor="label">
          {props.labelHead}
        </label>
        <input
          type="text"
          className="label-control form-control  form-control-lg "
          required
        />
        <div className="fs-6 fw-medium ">Please write label to here</div>
        <div className="valid-feedback">Looks good!</div>
      </div>
    </div>
  );
}

export default LabelKeyInput;
