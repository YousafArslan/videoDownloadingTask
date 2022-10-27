import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";

const GenericTextArea = ({ item, register, errors, ...props }) => {
  return (
    <>
      (
      <Form.Control
        name={item.name}
        type={item.type}
        placeholder={item.placeholder}
        ref={register({ required: "This is required." })}
        as={item.as}
        // {...(register
        //   ? { ...register(item.name, { ...item?.hookFormParams }) }
        //   : "")}
        value={item.value}
        disabled={item.disabled}
        defaultValue={item.defaultValue}
      />
      )
      {errors && (
        <ErrorMessage
          errors={errors}
          name={item.name}
          render={({ message }) => <p>{message}</p>}
          // render={({ message }) => {
          //   console.log(message);
          //   return message
          //     ? Object.entries(message).map(([type, message]) => (
          //         <p key={type}>
          //           {message}
          //           {console.log(message)}
          //         </p>
          //       ))
          //     : null;
          // }}
        />
      )}
    </>
  );
};

export default GenericTextArea;
