import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Form/Button';
import Input from '../Form/Input';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../helper/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../Form/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm('password');

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label="Usuario" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}> Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesButton.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
