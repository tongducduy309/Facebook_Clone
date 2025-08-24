"use client";
import {Button as MButton} from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type CustomType = "primary" | "default";

interface CustomButtonProps extends ButtonProps {
  layout?: CustomType;
}

const StyledButton = styled(MButton, {
  shouldForwardProp: (prop) => prop !== "layout", // tránh đẩy prop custom xuống DOM
})<CustomButtonProps>(({ theme, layout }) => ({
  textTransform: "none",
  borderRadius: "8px",
  fontWeight: 600,
  width:'100%',

  ...(layout === "primary" && {
    backgroundColor: "var(--primary)",
    color: "var(--primary-text-3)",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),

  ...(layout === "default" && {
    backgroundColor: "var(--default)",
    color: "var(--primary-text)",
    "&:hover": {
      backgroundColor: "#d8dadf",
    },
  }),
}));

export default function FBButton(props: CustomButtonProps) {
  return <StyledButton {...props} />;
}
