import { ChangeEvent, FormEvent, useState } from 'react';
import { loginAction } from '../../../store/api-action';
import { useDispatch } from 'react-redux';

const EMAIL_PATTERN = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{2,}$/;

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const re = EMAIL_PATTERN;

    if (!re.test(evt.target.value)) {
      evt.target.setCustomValidity('Enter a valid email like "example@domain.com"');
    }
    else {
      evt.target.setCustomValidity('');
    }

    setEmail(evt.target.value);
    evt.target.reportValidity();
  };

  const handlePasswordInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const re = PASSWORD_PATTERN;

    if (!re.test(evt.target.value)) {
      evt.target.setCustomValidity('Password must contain at least one letter and number, no spaces');
    }
    else {
      evt.target.setCustomValidity('');
    }

    setPassword(evt.target.value);
    evt.target.reportValidity();
  };


  const dispatch = useDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(loginAction({
      email: email,
      password: password,
    }));
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#" method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleEmailInputChange}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handlePasswordInputChange}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
