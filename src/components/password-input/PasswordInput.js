import React, { useState } from "react";
import TextInput from "@sinoui/core/TextInput";
import InputAdornment from "@sinoui/core/InputAdornment";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const inputAdornmentStyle = {
  cursor: "pointer",
};

/**
 * 密码输入框
 *
 * @returns
 */
export default function PasswordInput(props) {
  const [type, setType] = useState("text");
  const isPassword = type === "password";
  return (
    <TextInput
      {...props}
      type={type}
      endAdornment={
        <InputAdornment position="end" style={inputAdornmentStyle}>
          {isPassword ? (
            <MdVisibilityOff
              onClick={() => setType("text")}
              onMouseDown={(event) =>
                event.preventDefault()
              } /* 可以阻止输入框失去焦点 */
            />
          ) : (
            <MdVisibility
              onClick={() => setType("password")}
              onMouseDown={(event) =>
                event.preventDefault()
              } /* 可以阻止输入框失去焦点 */
            />
          )}
        </InputAdornment>
      }
    />
  );
}
