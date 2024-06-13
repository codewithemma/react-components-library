import React from "react";
import SingleOrder from "./SingleOrder/SingleOrder";
const MoreInfo = ({ params }) => {
  const { id } = params;
  return <SingleOrder id={id} />;
};

export default MoreInfo;
