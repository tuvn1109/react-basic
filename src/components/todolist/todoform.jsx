import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm({ onSubmit }) {
    const [value, setValue] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            id: v4(),
            title: value,
            isCompleted: false,
        }
        onSubmit(formValues);
        setValue('');
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;