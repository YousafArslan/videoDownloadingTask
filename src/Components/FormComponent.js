import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";
import GenericFormFields from "./GenericFormFields";
import GenericCheckBox from "./GenericCheckBox";
import GenericTextArea from "./GenericTextArea";
export const FormComponent = ({ dataObject }) => {
  const [checked, setChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const { register, errors, handleSubmit } = useForm({
    defaultValue: dataObject,
  });

  function handleChecked(value) {
    setChecked(value);
  }
  function handleSelectedIndex(value) {
    setSelectedIndex(value);
  }
  const onSubmit = (data) => console.log(data);

  const repeatObj = {
    Yearly: [
      {
        name: "start",
        label: "Starts",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "end",
        label: "Ends",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    "Donot Repeat": [],
    Daily: [
      {
        name: "from",
        label: "From",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "to",
        label: "To",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    "Every WeekDay(Mon-Fri)": [
      {
        name: "start",
        label: "Starts",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "end",
        label: "Ends",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    "Every Mon., Wed., Fri.": [
      {
        name: "start",
        label: "Starts",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "end",
        label: "Ends",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    "Every Tues. And Thurs.": [
      {
        name: "start",
        label: "Starts",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "end",
        label: "Ends",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    "Recurring Appointment": [
      {
        name: "from",
        label: "From",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "to",
        label: "To",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    Weekly: [
      {
        name: "from",
        label: "From",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "to",
        label: "To",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
    ],
    Monthly: [
      {
        name: "from",
        label: "From",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "to",
        label: "To",
        type: "date",
        hookFormParams: { required: "This is required." },
      },
      {
        name: "onthe",
        label: "On The",
        as: "select",
        child: ["1st", "2nd", "3rd", "4th", "5th"],
        hookFormParams: { required: "This is required." },
      },
    ],
  };

  const repeatArray = [
    "Yearly",
    "Donot Repeat",
    "Daily",
    "Every WeekDay(Mon-Fri)",
    "Every Mon., Wed., Fri.",
    "Every Tues. And Thurs.",
    "Recurring Appointment",
    "Weekly",
    "Monthly",
  ];
  const patientOptions = ["No Shows", "Cancelattions"];
  const titleOptions = ["Case1", "Case2"];
  const durationOptions = ["5", "10", "15", "20", "30", "60"];
  const typeOptions = ["Initial Evaluation", "Follow Up", "Re Assessment"];
  const selectedtherapistOptions = ["", "John", "Rauther", "Sion", "Treved"];

  const formObject = {
    formHeading: "Schedule",
    formFields: [
      {
        name: "patientName",
        label: "Patient Name",
        placeholder: "Patient Name",
        as: "select",
        child: [...patientOptions],
        value: dataObject.patientName,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "title",
        label: "Title",
        placeholder: "Title",
        as: "select",
        child: [...titleOptions],
        value: dataObject.title,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "duration",
        label: "Duration",
        placeholder: "Minutes",
        as: "select",
        child: [...durationOptions],
        value: dataObject.duration,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "defaultDuration",
        type: "checkbox",
        as: "checkbox",
        label: "Make this duration Patient’s default",
        value: dataObject.defaultDuration,
        defaultValue: false,
      },
      {
        name: "schedule",
        label: "Schedule",
        type: "date",
        value: dataObject.schedule,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "schedule2",
        label: "To",
        type: "date",
        value: dataObject.schedule2,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "type1",
        label: "Type",
        as: "select",
        child: [...typeOptions],
        value: dataObject.type1,
        hookFormParams: { required: "This is required." },
      },
      {
        name: "fuseAppointment",
        label: "Fuse Appointment",
        type: "checkbox",
        as: "checkbox",
        value: dataObject.fuseAppointment,
        defaultValue: false,
        child1: [
          {
            name: "selectedtherapist",
            label: "Selected Therapist",
            as: "select",
            child: [...selectedtherapistOptions],
            value: dataObject.selectedtherapist,
            hookFormParams: { required: "This is required." },
          },
          {
            name: "coThreatingTherapist",
            label: "Co-Threating Therapist",
            as: "select",
            child: [...selectedtherapistOptions],
            value: dataObject.coThreatingTherapist,
            hookFormParams: { required: "This is required." },
          },
          {
            name: "documentingTherapist",
            label: "Documenting Therapist",
            as: "select",
            child: [...selectedtherapistOptions],
            value: dataObject.documentingTherapist,
            hookFormParams: { required: "This is required." },
          },
        ],
        child2: [
          {
            name: "repeat",
            label: "Repeat",
            as: "select",
            child: [...repeatArray],
            value: dataObject.repeat,
            hookFormParams: { required: "This is required." },
          },
        ],
      },
      {
        name: "notes",
        label: "Notes",
        as: "textarea",
        value: dataObject.notes,
        hookFormParams: { required: "This is required." },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h2>{formObject.formHeading}</h2>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex align-items-center justify-content-center"
          >
            {formObject.formFields.map((item, index) => (
              <div key={index} className="d-flex">
                <FormGroup>
                  <Col lg={4}>
                    {" "}
                    <Form.Label>{item.label}</Form.Label>
                  </Col>
                  <Col lg={8}>
                    {item && item?.as === "checkbox" ? (
                      <>
                        <GenericCheckBox
                          item={item}
                          register={register}
                          errors={errors}
                          checked={checked}
                          handleChecked={handleChecked}
                        />
                        {checked
                          ? item.child1 &&
                            item.child1.map((field, idx) => (
                              <GenericFormFields
                                item={field}
                                register={register}
                                errors={errors}
                                key={idx}
                              ></GenericFormFields>
                            ))
                          : item.child2 &&
                            item.child2.map((field, idx) => (
                              <>
                                <GenericFormFields
                                  item={field}
                                  register={register}
                                  errors={errors}
                                  key={idx}
                                  handleSelectedIndex={handleSelectedIndex}
                                />
                                {selectedIndex &&
                                repeatObj &&
                                field.name === "repeat" ? (
                                  (repeatObj[selectedIndex] || []).map(
                                    (showitem, showindex) => {
                                      return (
                                        <GenericFormFields
                                          item={showitem}
                                          register={register}
                                          errors={errors}
                                          key={showindex}
                                        />
                                      );
                                    }
                                  )
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                      </>
                    ) : (
                      <>
                        <GenericFormFields
                          item={item}
                          register={register}
                          errors={errors}
                          handleSelectedIndex={handleSelectedIndex}
                        />

                        {selectedIndex &&
                        repeatObj &&
                        item.name === "repeat" ? (
                          (repeatObj[selectedIndex] || []).map(
                            (showitem, showindex) => (
                              <GenericFormFields
                                item={showitem}
                                register={register}
                                errors={errors}
                                handleSelectedIndex={handleSelectedIndex}
                                key={showindex}
                              />
                            )
                          )
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </Col>
                  {/* <GenericTextArea item={textar} /> */}
                </FormGroup>
              </div>
            ))}

            <Button type="submit">submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
