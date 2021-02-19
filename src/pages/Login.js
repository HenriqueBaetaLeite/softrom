import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, TextField, Button, Grid, Link, Box } from '@material-ui/core';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('userLogin', JSON.stringify({ email }));

    history.push('/home');
  };

  return (
    <Container maxWidth="sm">
      <Box m={2} display="flex" justifyContent="space-between" alignItems="center">
        <h2>Login</h2>
        <img
          height="30px"
          src="https://softrom.com.br/wp-content/uploads/2020/01/softrom1x1.png"
          alt="softrom logo"
        />
      </Box>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
        />
        <Box my={2}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Não tem conta? Inscreva-se!
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
