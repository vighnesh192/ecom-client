import React, { useEffect, useState } from 'react'
import { toCamelCase } from '../../utils'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Form({fields, action, onSubmit, handleOnChange, initialValues, ...props}) {
    // Get onChange from props and pass to Input component
    const [Fields, setFields] = useState(fields)
    useEffect(() => {
    //   console.log("FORM FIELDS ", fields)
      setFields(fields)
    //   console.log("FIELDS ", Fields)
      console.log("FORM initialValues:---", initialValues)
    }, [])
    
    return (
        <form onSubmit={onSubmit}>
            {
                Fields.map(({fieldName, type, initialVal, twoCols, options}, ind, arr) => {
                    if(!twoCols) {
                        return(
                            <React.Fragment key={ind}>
                                <Input handleOnChange={handleOnChange} fieldName={fieldName} type={type} initialValue={initialValues[toCamelCase(fieldName)]} options={options} />
                            </React.Fragment>
                        )
                    }
                    if((ind === 0 && twoCols) || (twoCols && !arr[ind-1].twoCols)) {
                        return (
                            <div className="grid grid-cols-2 gap-4" key={ind}>
                                <Input handleOnChange={handleOnChange} fieldName={fieldName} type={type} initialVal={initialVal} initialValue={initialValues[toCamelCase(fieldName)]} options={options} />
                                <Input handleOnChange={handleOnChange} fieldName={arr[ind+1].fieldName} type={arr[ind+1].type} initialVal={arr[ind+1].initialVal} initialValue={initialValues[toCamelCase(arr[ind+1].fieldName)]} options={options} />
                            </div>
                        )
                    }
                    else return;
                })    
            }
            <Button onSubmit={props.handleSubmit} action={action} />
        </form>
    )
}

export default Form