import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   let [fullName, setFullName] = useState("Shubham");
  //   let [userName, setUserName] = useState("");

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };
  //   let handleUserNameChange = (event) => {
  //     setUserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    // let fildName = event.target.name;
    // console.log(fildName);
    // let newValue = event.target.value;
    // console.log(newValue);

    setFormData((currData) => {
      // currData[fildName] = newValue;
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventdefault();
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Enter your fullName..."
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <br /> <br />
      <label htmlFor="userName">userName</label>
      <input
        id="userName"
        name="userName"
        type="text"
        placeholder="Enter your userName..."
        value={formData.userName}
        onChange={handleInputChange}
      />
      <br /> <br />
      <label htmlFor="Passward">Passward</label>
      <input
        id="Passward"
        name="Passward"
        type="passward"
        placeholder="Enter your Passward..."
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
