import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Form/Button';
import Input from '../Form/Input';

const LoginForm = () => {
  const {username, setUsername} = React.useState('');
  const {password, setPassword} = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/token', {
      method: 'POST',
      headers: {
        'Contet-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
    })
  }
  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuario" name="username" value={username} onChange={({target}) => setUsername(target.value)}/>
        <Input type="password" label="Senha" name="password" value={password} onChange={({target}) => setPassword(target.value)}/>
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;