import React from "react";
import style from "./Form.module.css";

export function Label({ title }) {
  return (
    <label htmlFor="" className={style.label}>
      {title}
      <input type="text" className={style.input} />
    </label>
  );
}

function Form() {
  return (
    <form>
      <Label title="First Name" />
      <Label title="Second Name" />
      <Label title="Time zone" />
      <Label title="Display Name" />
      <Label title="Bio" />
    </form>
  );
}
export default Form;
