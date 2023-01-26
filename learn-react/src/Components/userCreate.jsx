import { useState } from "react";

const initialinputs = {
  email: "",
  name: "",
};

function UserCreate({ onChange }) {
  const [inputs, setInputs] = useState(initialinputs);
  const { email, name } = inputs;
  const handkeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs(initialinputs);
  };

  const handleSubmit = () => {
    onChange(name, email);
    handleReset();
  };
  return (
    <div>
      <input onChange={handkeInputs} name="name" type="text" value={name} />
      <input onChange={handkeInputs} name="email" type="text" value={email} />
      <button onClick={handleSubmit}>등록</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}

export default UserCreate;
