import React, { useState } from 'react';
import RadioButton from '../atoms/auths/RadioButton';

const RadioButtonGroup = () => {
    const [selectedValue, setSelectedValue] = useState('opcion1');
    const [spinnerClass, setSpinnerClass] = useState('spinner'); // Estado para la clase del spinner
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      // Cambia la clase del spinner al presionar un botón
      setSpinnerClass(`spinner ${event.target.value}`);
    };

  return (
    <div>
      <RadioButton
        label="Opción 1"
        value="opcion1"
        checked={selectedValue === 'opcion1'}
        onChange={handleChange}
      />
      <RadioButton
        label="Opción 2"
        value="opcion2"
        checked={selectedValue === 'opcion2'}
        onChange={handleChange}
      />
      <RadioButton
        label="Opción 3"
        value="opcion3"
        checked={selectedValue === 'opcion3'}
        onChange={handleChange}
      />
    </div>
  );
};

export default RadioButtonGroup;
