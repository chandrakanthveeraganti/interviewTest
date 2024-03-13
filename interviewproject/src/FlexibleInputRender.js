import React from 'react';

const FlexibleInputRender =({
  inputType,
  scenario,
  inputStyle,
  inputTitle,
  required,
  disable,
  customchangeFunction,
  holder,
  labelStyle,
  errorMessage,
  error,
  MaxLength,
  MinLength,
  options,
  value,
  pattern
}) => {

  const handleChange = (e) =>{
    if(customchangeFunction){
      customchangeFunction(e.target.value);
    }
  }

  const renderInput = () =>{
    switch(inputType){
    // The below input field is for when user wants to display text,number, password and currency format data
      case 'text':
      case 'number':
      case 'password':
      case 'currency':
        return(
          <input 
            type={inputType}
            style={inputStyle}
            placeholder={holder}
            value={value}
            onChange={handleChange}
            disabled={scenario === 'disable' || disable}
            required={required}
            maxLength={MaxLength}
            minLength={MinLength}
            pattern={pattern}
          />
        );
      case 'select':
        return(
          <select 
            style={inputStyle}
            value={value}
            onChange={handleChange}
            disabled={scenario === 'disable' || disable}
            required={required}
          >
            <option value="">Select..</option>
            {options.map((option,index)=>(
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        );
      case 'radio':
        return(
          <div>
            {options.map((option,index)=>(
              <label key={index} style={labelStyle}>
                <input 
                  type='radio'
                  name={inputTitle}
                  value={option.value}
                  checked={value === option.value}
                  onChange={handleChange}
                  disabled={scenario === 'disable'|| disable}
                  required={required}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      case 'checkbox':
        return(
          <input 
            type='checkbox'
            style={inputStyle}
            checked={value}
            onChange={handleChange}
            disabled={scenario === 'disable' || disable}
            required={required}
          />
        );
        default:
          return null;
    }
  }

  return (
    <div className="App">
      <label className='labelClass'>{inputTitle}</label>
      {renderInput()}
      {error && <span style={{color:'red'}}>{errorMessage}</span>}
    </div>
  );
}

export default FlexibleInputRender;
