import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import Error from '../../helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('');
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const response = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Nova Senha"
            type="password"
            name="password"
            {...password}
          />
          {loading ? (
            <Button disabled>Resetando...</Button>
          ) : (
            <Button>Resetar</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </div>
  );
};

export default LoginPasswordReset;
