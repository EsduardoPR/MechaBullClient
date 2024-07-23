import React, { useState } from 'react';
import Select from 'react-select';

export function SelectDevice({ options, onDispositivoSeleccionado }){
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);

        // Llama a la función onDispositivoSeleccionado con el dispositivo seleccionado
        onDispositivoSeleccionado(selectedOption ? { id: selectedOption.value, name: selectedOption.label } : null);
    };

    return (
        <div>
            <label htmlFor="dispositivo">Selecciona un dispositivo:</label>
            {/* Componente Select de react-select */}
            <Select
                id="dispositivo"
                name="dispositivo"
                options={options} // Opciones para el Select
                value={selectedOption} // Valor seleccionado
                onChange={handleSelectChange} // Función para manejar el cambio de selección
                placeholder="Selecciona un dispositivo..." // Placeholder cuando no hay selección
            />
        </div>
    );
};


