import { useCallback, useState, ChangeEvent } from 'react';
import { ValuesErrorsType } from '../../types';

export function useFormWithValidation() {
  const [values, setValues] = useState<ValuesErrorsType>({email: '', password: ''});
  const [errors, setErrors] = useState<ValuesErrorsType>({email: '', password: ''});
  const [isValid, setIsValid] = useState(false);
  const [isRegEx, setIsRegEx] = useState({});

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.checkValidity());
    setIsRegEx({...isRegEx, [name]: target.validity.typeMismatch});
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newIsRegEx = false) => {
      setValues(newValues as ValuesErrorsType);
      setErrors(newErrors as ValuesErrorsType);
      setIsValid(newIsValid);
      setIsRegEx(newIsRegEx);
    },
    [setValues, setErrors, setIsValid, setIsRegEx]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid, isRegEx };
}
