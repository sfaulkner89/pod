import { Input as TextInput } from "@mui/material";
import React from "react";
import { tss } from "tss-react";

interface Props {
  placeholder: string;
  onChange?: (e: any) => void;
  className?: string;
  name?: string;
}

export default function Input(props: Props) {
  const { classes: s } = useStyles();

  return <TextInput {...props} className={s.container}></TextInput>;
}

const useStyles = tss.withParams().create(() => ({
  container: {
    width: "100%",
    maxWidth: "300px",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "20px",
  },
}));
