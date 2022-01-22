import React from "react";
import { useParams } from "react-router-dom";

const ContractPage = () => {
  let params = useParams();
  return <h1>Contract {params.contractID}</h1>;
};

export default ContractPage;
