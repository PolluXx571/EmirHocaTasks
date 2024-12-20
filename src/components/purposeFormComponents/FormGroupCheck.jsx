import React from "react";

function formControl(props) {
  return (
    <div className="d-flex justify-content-center align-items-center  ms-3 me-1 w-50 fs-5">
      <input
        className="form-check-input me-2 "
        type="radio"
        name="client_purpose"
      />
      <label className="form-check-label fw-medium " htmlFor="client_purpose">
        {props.purpose}
      </label>
    </div>
  );
}

export default formControl;
