import { ArrowForward } from "@mui/icons-material";
import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <a href="/about" className={`Animatedbutton Animated `}>
        Read More &nbsp;
        <ArrowForward
          fontSize="14px"
          style={{ marginBottom: "-3px", fontWeight: "800" }}
        />
      </a>
    </div>
  );
};

export default Button;
