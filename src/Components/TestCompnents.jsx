import React, { useEffect, useState } from "react";

const TestCompnents = () => {
  const [first, setFirst] = useState("hi");
  useEffect(() => {
    console.log("Component Rendered", first);
  }, []);

  useEffect(() => {
    handleChange();
    console.log("Component Rendered", first);
  }, []);

  const handleChange = () => {
    setFirst("hello");
  };

  return <div>{first}</div>;
};

export default TestCompnents;
