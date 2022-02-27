import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GreeterContext } from "../hardhat/SymfoniContext";

export interface IProps {

}

export default function Greeter(props: IProps) {
  const greeter = useContext(GreeterContext);
  const [message, setMessage] = useState("");
  const [inputGreeting, setInputGreeting] = useState("");

  useEffect(() => {
    const doAsync = async () => {
      if (!greeter.instance) return;
      console.log("Greeter is deployed at ", greeter.instance.address);
      setMessage(await greeter.instance.greet());
    };
    doAsync();
  }, [greeter]);

  const handleSetGreeting = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!greeter.instance) throw Error("Greeter instance not ready");
    if (greeter.instance) {
      const transaction = await greeter.instance.setGreeting(inputGreeting);
      console.log("setGreeting tx", transaction);
      await transaction.wait();
      const _message = await greeter.instance.greet();
      console.log("New greeting mined, result: ", _message);
      setMessage(_message);
      setInputGreeting("");
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography textAlign="center" variant="h4">Greeting Example</Typography>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Grid item>
          <TextField
            label="Greeting Input Field"
            variant="standard"
            value={inputGreeting}
            onChange={(e) => setInputGreeting(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button onClick={(e) => handleSetGreeting(e)} style={{ marginTop: 10, marginLeft: 10 }}>Set greeting</Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="center">Current Greeting Value: <b>{message}</b></Typography>
      </Grid>
    </Grid>
  );
};
