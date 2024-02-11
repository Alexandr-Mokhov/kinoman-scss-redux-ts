import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../types';
import { FormEventHandler, ReactNode } from 'react';

type FormPropsTypes = {
  children: ReactNode,
  name: string,
  buttonText: string,
  onSubmit: FormEventHandler<HTMLFormElement>,
  isDisabledButton: boolean,
}

export default function Form({
  children,
  name,
  buttonText,
  onSubmit,
  isDisabledButton
}: FormPropsTypes) {
  const isRegister = name === 'register';
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const errorText = useSelector((state: RootState) => state.error.errorText);
    
  return (
    <form className="form" onSubmit={onSubmit} name={name} noValidate>
      <div className="form__container">
        {children}
      </div>
      <div className="form__buttons-container">
        <span className="form__error">{errorText}</span>
        <button
          className={`form__button form__button_type_${isLoading || isDisabledButton ? 'inactive' : 'active'}`}
          type="submit"
          disabled={isLoading || isDisabledButton}
        >
          {buttonText}
        </button>
        <p className="form__login">
          {isRegister ? 'Уже зарегистрированы? ' : 'Еще не зарегистрированы? '}
          <Link
            className="form__login-link"
            to={isRegister ? '/sign-in' : '/sign-up'}
          >
            {isRegister ? 'Войти' : 'Регистрация'}
          </Link>
        </p>
      </div>
    </form>
  )
}
