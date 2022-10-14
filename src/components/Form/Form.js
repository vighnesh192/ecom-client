import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Form({fields, action, onSubmit, handleOnChange, ...props}) {
    // Get onChange from props and pass to Input component
    return (
        <form onSubmit={onSubmit}>
            {
                fields.map(({fieldName, type, twoCols}, ind, arr) => {
                    if(!twoCols) {
                        return(
                            <React.Fragment key={ind}>
                                <Input handleOnChange={handleOnChange} fieldName={fieldName} type={type} />
                            </React.Fragment>
                        )
                    }
                    if((ind === 0 && twoCols) || (twoCols && !arr[ind-1].twoCols)) {
                        return (
                            <div className="grid grid-cols-2 gap-4" key={ind}>
                                <Input handleOnChange={handleOnChange} fieldName={fieldName} type={type} />
                                <Input handleOnChange={handleOnChange} fieldName={arr[ind+1].fieldName} type={arr[ind+1].type} />
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