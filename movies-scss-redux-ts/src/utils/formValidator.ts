import { useCallback, useState, ChangeEvent } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isRegEx, setIsRegEx] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.validity.typeMismatch);
    
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.checkValidity());
    setIsRegEx({...isRegEx, [name]: target.validity.typeMismatch});
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newIsRegEx = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsRegEx(newIsRegEx);
    },
    [setValues, setErrors, setIsValid, setIsRegEx]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid, isRegEx };
}
