import { useCallback, useState, ChangeEvent } from 'react';
import { ValuesErrorsType, RegExType } from '../../types';

export function useFormWithValidation() {
  const [values, setValues] = useState<ValuesErrorsType>({email: '', password: ''});
  const [errors, setErrors] = useState<ValuesErrorsType>({email: '', password: ''});
  const [isValid, setIsValid] = useState(false);
  const [isRegEx, setIsRegEx] = useState<RegExType>({email: false, password: false});

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
    (newValues = {}, newErrors = {}, newIsValid = false, newIsRegEx = {}) => {
      setValues(newValues as ValuesErrorsType);
      setErrors(newErrors as ValuesErrorsType);
      setIsValid(newIsValid);
      setIsRegEx(newIsRegEx as RegExType);
    },
    [setValues, setErrors, setIsValid, setIsRegEx]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid, isRegEx };
}
