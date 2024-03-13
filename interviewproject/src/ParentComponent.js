import React, { useState } from "react";
import FlexibleInputRender from "./FlexibleInputRender";
import './App.css';

const ParentComponent = () => {
    const [formData, setFormData] = useState({
        textInput:'',
        numberInput:0,
        passwordInput:'',
        selectInput:'',
        radioInput:'',
        checkboxInput:false,
        currencyInput:''
    })

    const handleInputChange = (name, value) =>{
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return(
        <div className="form-container">
            <h1 className="form-title">Registration Form</h1>
            <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
                {/* Below input field is for the text input */}
                    <div>
                        <FlexibleInputRender
                            inputType="text"
                            scenario="create"
                            inputTitle="Full Name:"
                            required={true}
                            customchangeFunction={(value) => handleInputChange('textInput', value)}
                        />
                    </div>
                    {/* Below input field is for the Number input */}
                    <div>
                        <FlexibleInputRender 
                            inputType='number'
                            scenario='edit'
                            inputTitle='Phone Number:'
                            customchangeFunction={(value) => handleInputChange('numberInput', value)}
                        />
                    </div>
                    {/* Below input field is for the password input */}
                    <div>
                        <FlexibleInputRender 
                            inputType='password'
                            scenario='disable'
                            inputTitle='Create Password:'
                            value={formData.passwordInput}
                            disable={true}
                        />
                    </div>
                    {/* Below input field is for the Select input */}
                    <div>
                        <FlexibleInputRender 
                            inputType='select'
                            scenario='create'
                            inputTitle="Currency Type:"
                            options={[
                                {value:'INR', label:'INR'},
                                {value:'$', label:'$'},
                                {value:'EUD', label:'EUD'},
                            ]}
                            customchangeFunction={(value) => handleInputChange('selectInput', value)}
                        />
                    </div>
                    {/* Below input field is for the Currency input */}
                    <div>
                        <FlexibleInputRender 
                            inputType="currency"
                            scenario="edit"
                            inputTitle="Currency :"
                            customchangeFunction={(value)=> handleInputChange('currencyInput', value)}
                        />
                    </div>
                    {/* Below input field is for the Radio input */}
                    <div>
                        <FlexibleInputRender 
                            inputType='radio'
                            scenario='create'
                            inputTitle="Gender:"
                            value={'male'}
                            options={[
                                {value:'male', label:'Male'},
                                {value:'femlae', label:'Female'},
                                {value:'others', label:'Others'},
                            ]}
                            customchangeFunction={(value) => handleInputChange('radioInput', value)}
                        />
                    </div>
                    {/* Below input field is for the Checkbox input */}
                    <div>
                        <FlexibleInputRender 
                            inputType="checkbox"
                            scenario="create"
                            inputTitle="Terms Aggrement:"
                            customchangeFunction={(value)=> handleInputChange('checkboxInput', value)}
                        />
                    </div>
            </div>
        </div>
    )
}
export default ParentComponent