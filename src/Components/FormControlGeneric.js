import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import { ZulluFormatDatePicker, TimePicker24 } from "./zulluFormatDatePicker";

export default function FormControlGeneric({
  item,
  register = null,
  ...props
}) {
  return (
    <React.Fragment>
      {item.type === "date" || item.type === "time" ? (
        <React.Fragment>
          {item.type === "date" ? (
            <ZulluFormatDatePicker
              name={item.name}
              defaultValue={item?.defaultValue}
              required={item?.required}
              register={register}
            />
          ) : (
            <TimePicker24
              name={item.name}
              required={item?.required}
              register={register}
              defaultValue={item?.defaultValue}
              errors={props.errors}
              isValid={props.isValid}
            />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {item.as === "select" ? (
            <Form.Control
              as={item?.as}
              className={item?.className}
              label={item?.label}
              style={{
                ...item?.style,
                borderColor:
                  props?.errors && props.errors[item.name] ? "#a80000" : "",
              }}
              type={item?.type}
              rows={item?.rows}
              name={item?.name}
              disabled={item?.disabled}
              ref={
                register &&
                register({
                  required:
                    item?.required != null
                      ? item?.required
                      : "This is required",
                  pattern: item?.pattern,
                })
              }
              onChange={item?.onChange && ((e) => item.onChange(e))}
              value={item?.value}
              defaultValue={item?.defaultValue}
            >
              <option value="">{"Select..."}</option>
              {item.as === "select" &&
                item?.child?.map((items, idx) => (
                  <option value={items?.value != null ? items.value : items}>
                    {items?.name != null ? items.name : items}
                  </option>
                ))}
            </Form.Control>
          ) : (
            <Form.Control
              as={item?.as}
              className={item?.className}
              label={item?.label}
              rows={item?.rows}
              type={item?.type}
              style={{
                ...item?.style,
                borderColor:
                  props?.errors && props.errors[item.name] ? "#a80000" : "",
              }}
              name={item?.name}
              disabled={item?.disabled}
              ref={
                register &&
                register({
                  required:
                    item?.required != null
                      ? item?.required
                      : "This is required",
                  pattern:
                    item?.pattern != null
                      ? item?.pattern
                      : { value: /[^\s]+/, message: "invalid entry" },
                  maxLength: item?.max,
                  minLength: item?.min,
                })
              }
              onChange={
                item?.onChange &&
                ((e) => {
                  item?.onChange(e);
                })
              }
              value={item?.value}
              defaultValue={item?.defaultValue}
            />
          )}
        </React.Fragment>
      )}
      {item.type === "date" || item.type === "time" ? (
        ""
      ) : (
        <React.Fragment>
          {props?.errors && (
            <ErrorMessage
              errors={props.errors}
              name={item.name}
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
          )}
          {props?.isValid === false && !props?.errors ? (
            <ErrorMessage
              errors={props.errors}
              name={item.name}
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
