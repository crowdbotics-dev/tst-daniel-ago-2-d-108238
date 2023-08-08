import React, { useContext } from "react";
import { OptionsContext } from "@options";

const Settings = () => {
  const { title } = useContext(OptionsContext);
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Settings;
