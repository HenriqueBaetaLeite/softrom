import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Card,
  Container,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Checkbox,
  Box,
} from '@material-ui/core';

const classes = {
  form: { background: 'black' },
};

const Login = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push('/home');
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex">
        <Card>
          <img
          width="100px"
            src="https://softrom.com.br/wp-content/uploads/2020/01/softrom1x1.png"
            alt="softrom logo"
          />
          <h4>22 anos de experiência no mercado</h4>
        </Card>
        <Card>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
