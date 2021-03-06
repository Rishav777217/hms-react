import { useState } from "react";
import { Staff, Patient } from "./Login.Forms";
import { login } from "../../Auth/Auth";
import { useHistory } from "react-router-dom";
import "./Forms.css";

//helper
//staff
const SLForm = () => {
  const [state, setState] = useState({
    s_id: "",
    s_pass: "",
    role: "reception",
  });

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    props.preventDefault();
    console.log(state);
  };

  return <Staff state={state} handle_change={handle_change} handle_submit={handle_submit} />;
};

//patient

const PLForm = () => {
  const history = useHistory();
  const [state, setState] = useState({
    p_id: "",
    p_pass: "",
  });
  const [msg, setMsg] = useState("");

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    props.preventDefault();
    console.log(state);

    const send = {
      id: state.p_id,
      password: state.p_pass,
      role: "patient",
    };
    login(send).then(
      () => {
        history.push("/patient_dashboard");
      },
      (err) => {
        const errmsg = (err.response && err.response.data && err.response.data) || err.message || err.toString();
        setMsg(errmsg.msg);
      }
    );
  };

  return <Patient state={state} msg={msg} handle_change={handle_change} handle_submit={handle_submit} />;
};

export { SLForm, PLForm };
