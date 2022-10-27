import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";

const GenericCheckBox = ({
  item,
  register,
  errors = null,
  checked,
  handleChecked,
  ...props
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check
          name={item.name}
          type={item.type}
          ref={register(item?.hookFormParams)}
          // {...(register
          //   ? { ...register(item.name, { ...item?.hookFormParams }) }
          //   : "")}
          onChange={(e) => {
            item.child1 &&
              item.child2 &&
              handleChecked &&
              handleChecked(e.target.checked);
          }}
          value={item.value}
          disabled={item.disabled}
          defaultValue={item.defaultValue}
        ></Form.Check>
      </Form.Group>
      {errors && (
        <ErrorMessage
          errors={errors}
          name={item.name}
          render={({ message }) => <p>{message}</p>}
        />
      )}
    </>
  );
};

export default GenericCheckBox;
