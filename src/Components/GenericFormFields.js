import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";

const GenericFormFields = ({
  item = {},
  register,
  errors,
  handleSelectedIndex,
  ...props
}) => {
  return (
    <>
      {item?.as === "select" ? (
        <Form.Select
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          // {...(register
          //   ? { ...register(item.name, { ...item?.hookFormParams }) }
          //   : "")}
          ref={register(item?.hookFormParams)}
          onChange={(e) => {
            handleSelectedIndex && handleSelectedIndex(e.target.value);
          }}
          value={item.value}
          disabled={item.disabled}
          defaultValue={item.defaultValue}
        >
          {item?.as === "select" &&
            item?.child?.map((options, optionIndex) => (
              <option value={options} key={optionIndex}>
                {options}
              </option>
            ))}
        </Form.Select>
      ) : (
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
      )}
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

export default GenericFormFields;
