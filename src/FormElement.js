import React from 'react';

function FormComponent(prop) {
  return (
    <div className=''>
      <label>{prop.name}</label>
      <input
        type={prop.type}
        name={prop.inputname}
        placeholder={prop.placeholder}
        id={prop.id}
        className={prop.className}
        value={prop.value}
        onChange={prop.changeHandler}
      />
      <span>{prop.error}</span>
    </div>
  );
}

export default FormComponent;