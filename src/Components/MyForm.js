import { TreeSelect } from "antd";
import React, { useState } from "react";
const { SHOW_PARENT } = TreeSelect;

const MyForm = () => {
  const treeData = [
    {
      title: "Node1:My Description",
      value: 1,
      key: "0-0",
      checkable: false,
      children: [
        {
          title: "Child Node1",
          value: 2,
          key: "0-0-0",
        },
      ],
    },
    {
      title: "Node2",
      value: 3,
      key: "0-1",
      checkable: false,
      children: [
        {
          title: "Child Node3",
          value: 4,
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: 5,
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: 6,
          key: "0-1-2",
        },
      ],
    },
  ];
  const [value, setValue] = useState();

  const onChange = (value) => {
    console.log("onChange ", value);
    setValue(value);
  };
  // console.log(treeData.());
  // const handleSearch = (data) => {
  //   console.log(data);
  //   const temp = treeData.flow((item) => item.title.includes(data));
  //   console.log(temp);
  // };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    // onSearch: handleSearch,
    filterTreeNode: "treeNodeFilterProp",
    treeNodeFilterProp: "title",
    showSearch: true,
    style: {
      width: "100%",
    },
  };

  return (
    <div>
      <TreeSelect {...tProps} />
      <div>This is a test application</div>
    </div>
  );
};

export default MyForm;
