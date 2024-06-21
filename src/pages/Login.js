import React from "react";
import LoginForm from "../components/loginPage/LoginForm";
import { styled } from "@mui/system";

const WallPaper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: `linear-gradient(-45deg, ${theme.palette.thematic.black}, ${theme.palette.thematic.green}, ${theme.palette.thematic.yellow}, ${theme.palette.thematic.blue})`,
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",

  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

function Login() {
  return (
    <WallPaper>
      <LoginForm></LoginForm>
    </WallPaper>
  );
}

export default Login;
