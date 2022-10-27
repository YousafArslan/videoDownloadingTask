import React,{useState,useCallback} from 'react'
import {Col,Row,Card,Button ,} from 'react-bootstrap'
import produce from "immer";

  
const MyComponent = () => {
    const [first, setFirst] = useState([
        //form page 1
        [
        
          {
            cardTitle: "Personal Information",
              cardFields: [
                [
                {
                  name: "dob",
                  Label: "Date Of Birth",
                  type: "date",
                  placeholder: "dd/mm/yyyy",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "phone",
                  Label: "Phone",
                  type: "tel",
                  placeholder: "( _ _ _ ) _ _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "email",
                  Label: "Email",
                  type: "email",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "address",
                  Label: "Address",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "ssn",
                  Label: "Social Security Number",
                  type: "text",
                  placeholder: "_ _ _ - _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "occupation&Employer",
                  Label: "Occupation & Employer",
                  type: "text",
                  placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "gender",
                  Label: "Gender",
                  type: "",
                  // placeholder: "Stsrt Typing...",
                  as: "select",
                  child: ["Male", "Female", "Other"],
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "ethnicity",
                  Label: "Ethnicity",
                  // type: "text",
                  as: "select",
                  child: ["White British", "British Chinese", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "language",
                  Label: "Language",
                  // type: "text",
                  as: "select",
                  child: ["English", "Polish", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "maritalStatus",
                  Label: "Marital Status",
                  // type: "text",
                  as: "select",
                  child: ["Single", "Married", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
              ],
             
              
            ],
          },
          {
            cardTitle: "Patient Guardian",
            cardFields: [
              [
                {
                  name: "firstName",
                  Label: "First Name",
                  type: "text",
                  defaultValue: "",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "lastName",
                  Label: "Last Name",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "phone",
                  Label: "Phone",
                  type: "tel",
                  placeholder: "( _ _ _ ) _ _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "email",
                  Label: "Email",
                  type: "email",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "address",
                  Label: "Address",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "streetAddress",
                  Label: "Street Address",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "city",
                  Label: "City",
                  type: "text",
                  placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "state",
                  Label: "State",
                  // type: "",
                  // placeholder: "Stsrt Typing...",
                  as: "select",
                  child: ["California", "Texas", "Other"],
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "zip",
                  Label: "Zip",
                  type: "number",
                  placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "relationship",
                  Label: "Relationship",
                  // type: "text",
                  as: "select",
                  child: ["Father", "Brother", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
              ]
             
            ],
          },
          {
            cardTitle: "Emergency Contact",
            cardFields: [
              [   {
                name: "firstName",
                Label: "First Name",
                type: "text",
                placeholder: "Start typing...",
                hookFormParams: { required: "This is required." },
              },
              {
                name: "lastName",
                Label: "Last Name",
                type: "text",
                placeholder: "Start typing...",
                hookFormParams: { required: "This is required." },
              },
              {
                name: "phone",
                Label: "Phone",
                type: "tel",
                placeholder: "( _ _ _ ) _ _ _ - _ _ _ _",
                hookFormParams: { required: "This is required." },
              },
              {
                name: "relationship",
                Label: "Relationship",
                // type: "text",
                as: "select",
                child: ["Father", "Brother", "Other"],
                // placeholder: "Start Typing...",
                hookFormParams: { required: "This is required." },
              },]
           
            ],
          },
          {
            cardTitle: "Consent",
            cardFields: [
              [
                {
                  name: "firstName",
                  Label: "First Name",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "lastName",
                  Label: "Last Name",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "phone",
                  Label: "Phone",
                  type: "tel",
                  placeholder: "( _ _ _ ) _ _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "relationship",
                  Label: "Relationship",
                  // type: "text",
                  as: "select",
                  child: ["Father", "Brother", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
              ]
              
            ],
          },
        ],
      ]);

   
   
    const handleAdd = useCallback(() => {
        setFirst(         
          produce((draft) => {
                
            draft[0][0].cardFields.push(
           [
            
                {
                  name: "dob",
                  Label: "Date Of Birth",
                  type: "date",
                  placeholder: "dd/mm/yyyy",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "phone",
                  Label: "Phone",
                  type: "tel",
                  placeholder: "( _ _ _ ) _ _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "email",
                  Label: "Email",
                  type: "email",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "address",
                  Label: "Address",
                  type: "text",
                  placeholder: "Start typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "ssn",
                  Label: "Social Security Number",
                  type: "text",
                  placeholder: "_ _ _ - _ _ - _ _ _ _",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "occupation&Employer",
                  Label: "Occupation & Employer",
                  type: "text",
                  placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "gender",
                  Label: "Gender",
                  type: "",
                  // placeholder: "Stsrt Typing...",
                  as: "select",
                  child: ["Male", "Female", "Other"],
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "ethnicity",
                  Label: "Ethnicity",
                  // type: "text",
                  as: "select",
                  child: ["White British", "British Chinese", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "language",
                  Label: "Language",
                  // type: "text",
                  as: "select",
                  child: ["English", "Polish", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
                {
                  name: "maritalStatus",
                  Label: "Marital Status",
                  // type: "text",
                  as: "select",
                  child: ["Single", "Married", "Other"],
                  // placeholder: "Start Typing...",
                  hookFormParams: { required: "This is required." },
                },
              ],
            );
          })
        );
      }, []);
   
      
      console.log(first[0][0].cardFields[0])


  return (
      <>
    {first.map((item, index) => (
        item.map((item,index)=>(
            <Card className="shadow col-md-12">
          <Row>
            <Col md={12}>
              <h5>{
              item?.cardTitle}</h5>
            </Col>
            <Col md={12}>
              <Row>
                {item.cardFields.map((itm, index) => (
                 
                 <>
                 {index!==0?<hr/>:<></>}
                  {itm.map((itm, index)=>(
                  
                  <Col
                  sm={6}
                  md={4}
                  xl={itm?.ColumnWidthXL ? itm.ColumnWidthXL : 3}
                >
               
                                
                      <small>{itm?.Label}</small>
                                                  
            
                </Col>
                ))}
                 </>
                
                ))}
              </Row>
            </Col>
            <Col md={12} className="d-flex justify-content-end">
              <Button
                className="form-btn"
            onClick={handleAdd}
              >
                + Add More
              </Button>
            </Col>
          </Row>
        </Card>
        ))
        
      ))}</>
  )
}

export default MyComponent