import React, { useState } from "react";
import { Button, theme } from "antd";

const CustomButton = () => {
  const { useToken } = theme;
  const [style, setStyle] = useState({});
  const { token } = useToken();

  return (
    <button
      style={{ color: style ? token.colorPrimary : "black" }}
      onClick={() => {
        setStyle((x) => {
          return !x;
        });
      }}>
      Use Token Themed
    </button>
  );
};

export default CustomButton;
