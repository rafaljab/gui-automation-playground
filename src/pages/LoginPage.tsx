import {
  Alert,
  Avatar,
  Box,
  Button,
  Collapse,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorAlertOpend, setErrorAlertOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Incorrect credentials!");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    setErrorAlertOpened(false);

    if (isRegistering) {
      const passwordConfirm = data.get("password_confirm") as string;
      if (password !== passwordConfirm) {
        setErrorMessage("Passwords do not match");
        setErrorAlertOpened(true);
        return;
      }
      try {
        const res = await register({ username, password });
        if (res.ok) {
          navigate("/");
        } else {
          const errData = await res.json();
          setErrorMessage(
            "Registration failed: " + JSON.stringify(errData.errors || errData),
          );
          setErrorAlertOpened(true);
        }
      } catch (err: any) {
        setErrorMessage(err.message || "Registration failed");
        setErrorAlertOpened(true);
      }
    } else {
      try {
        const res = await login({ username, password });
        if (res.ok) {
          navigate("/");
        } else {
          setErrorMessage("Incorrect credentials!");
          setErrorAlertOpened(true);
        }
      } catch (err: any) {
        setErrorMessage(err.message || "Login failed");
        setErrorAlertOpened(true);
      }
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" gutterBottom>
        {isRegistering ? "Sign Up" : "Log in"}
      </Typography>
      <Collapse sx={{ width: "100%" }} in={errorAlertOpend}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErrorAlertOpened(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 1, mt: 1 }}
        >
          {errorMessage}
        </Alert>
      </Collapse>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, width: "100%" }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          key="username"
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          key="password"
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete={isRegistering ? "new-password" : "current-password"}
        />
        {isRegistering && (
          <TextField
            margin="normal"
            required
            fullWidth
            key="password_confirm"
            name="password_confirm"
            label="Confirm Password"
            type="password"
            id="password_confirm"
            autoComplete="new-password"
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {isRegistering ? "Sign Up" : "Log In"}
        </Button>
        <Grid container>
          <Grid size="grow">
            {!isRegistering && (
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            )}
          </Grid>
          <Grid size="auto">
            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setErrorAlertOpened(false);
              }}
            >
              {isRegistering
                ? "Already have an account? Log In"
                : "Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
