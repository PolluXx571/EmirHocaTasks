import React from "react";
import FormGroupCheck from "./FormGroupCheck";
import FormLabelKeyInput from "./FormLabelKeyInput";
import Button from "react-bootstrap/Button";

function FormPurpose() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column "
      style={{ height: "100vh" }}
    >
      <form
        action=""
        className="d-flex-column p-3 border w-15 h-60 rounded-5"
        style={{ backgroundColor: "#D596FF" }}
      >
        <label className="d-flex justify-content-center align-items-center  fs-4 fw-bold">
          Purpose
        </label>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <FormGroupCheck purpose={"Client"} />
          <FormGroupCheck purpose={"Group"} />
          <FormGroupCheck purpose={"Agent"} />
        </div>
        <div className="d-flex flex-column">
          <FormLabelKeyInput labelHead={"Label:"} />
          <FormLabelKeyInput labelHead={"Key:"} />
        </div>
        <label className="d-flex  justify-content-center  align-items-center mb-1 mt-4 fs-4 fw-bold">
          Status
        </label>
        <div className="d-flex justify-content-center  align-items-center w-100 mb-2">
          <FormGroupCheck purpose={"Active"} />
          <FormGroupCheck purpose={"Passive"} />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            className="justify-content-center align-items-center w-100 fs-4 p-2 mt-4 rounded-4"
            variant="success"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormPurpose;
