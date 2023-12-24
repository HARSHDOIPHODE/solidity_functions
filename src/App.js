import React, { useState } from "react";
import Web3 from "web3";
import "./App.css";
import ContractABI from "./abi.json";


function App() {
  
  const [inputCourseVal, setinputCourseVal] = useState("");

  const web3 = new Web3(window.ethereum);
  const RemixContract = new web3.eth.Contract(
    ContractABI,
    "0x9e9558adE04D6C5a3abf1B8B373302047cd1B6aE"
  );

  const InputCoursefun = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const gas = await RemixContract.methods.inputCource(inputCourseVal).estimateGas();
    const result = await RemixContract.methods
      .inputCource(inputCourseVal)
      .send({ from: account, gas });
  
    console.log(result);
  };

  const getData = async (e) => {
    const message = await RemixContract.methods.CourceValue().call();
    console.log(message)
  };

  return (
    <>
        <form onSubmit={InputCoursefun}>
          <label>
            Set cource Code:
            <input
              type="text"
              name="inputCourseVal"
              value={inputCourseVal}
              onChange={(e) => setinputCourseVal(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Message" />
        </form>
        <br />
        <button onClick={getData} type="button">
          Get cource Code
        </button>
        </>
  );
}

export default App;