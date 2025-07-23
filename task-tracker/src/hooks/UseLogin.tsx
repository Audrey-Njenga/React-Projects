import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const defaultUser = "admin";
  const defaultPassword = "admin";
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkIfValidUSer() {
    console.log(username, password);
    if (username === defaultUser) {
      if (password === defaultPassword) {
        navigate("/home");
      } else {
        setError("Invalid login credentials");
      }
    } else {
      setError("Invalid login credentials");
    }
  }
  return { checkIfValidUSer, error, setUsername, setPassword };
};
