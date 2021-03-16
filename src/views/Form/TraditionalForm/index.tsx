import { ChangeEvent, FormEvent, useState } from 'react';
import Background from '../../../components/Background';

const TraditionalForm = () => {
  const [value, setValue] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Background color="#E3FFFD">
        <form onSubmit={handleFormSubmit}>
          <label>Username</label>
          <input
            className="form-input"
            id={'username'}
            name={'username'}
            type={'text'}
            onChange={handleChange}
            placeholder={'Masukkan username'}
          />
        </form>
      </Background>
    </>
  );
};

export default TraditionalForm;
