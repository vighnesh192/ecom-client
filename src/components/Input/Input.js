import React, { useRef, useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { toCamelCase } from '../../utils'
// import { FcCheckmark } from "react-icons/fa";
import './Input.css'

function Input({fieldName, type, initialVal, initialValue, options, ...props}) {
  // const [InitialVal, setInitialVal] = useState(initialVal)
  // useEffect(() => { console.log('InitialVal', InitialVal); setInitialVal(initialVal) }, [initialVal])
  
  // console.log("initialVal", initialVal, ",,,", InitialVal)
  // console.log("initialValue:---", initialValue)
  // console.log("FieldName", fieldName)

  const [image, setImage] = useState({image: '', imageDetails: ''})

  useEffect(() => {
    console.log("INPUT IMAGE:- ", image);
  }, [image])
  

  const onImageChange = (e) => {
    if (e.target?.files && e.target?.files[0]) {
      if((e.target.files[0].size / 1000) < 250) {
        props.handleImageChange(e);
        let reader = new FileReader();
        setImage({image: e.target?.result, imageDetails: e.target?.files[0]});
        // reader.onload = (e) => {
        //   document.getElementById('done-icon').style.display = 'block'
        // };
        reader.readAsDataURL(e.target.files[0]);
        console.log("Image", image)
      }
      else alert('File size cannot be greater than 250KB');
    }
  }

  //  @Desc useRef doesn't cause re-render, useState does
  const imageInput = useRef( null );
  
  const onChooseImageClick = () => {
    imageInput.current.click();
  }
  
  return (
    <div className='form-group mb-6'>
      {/* Add name attr */}
      {/* Add onChange attr and pass event param to onChange() from props */}
      {
        initialValue || initialValue == null || initialValue?.length >= 0 ? 
          type == 'select' ? 
            <select value={initialValue} onChange={props.handleOnChange} name={toCamelCase(fieldName)} className="focus:outline-none focus:ring-primary focus:ring-1 form-input px-4 py-3 w-full rounded-sm">
              {
                options?.map((val, ind) => {
                  return <option value={val} key={ind}>{val}</option>
                })
              }
            </select>
            :
            type == 'file' ? 
              <div className='flex justify-between'>
                <input ref={imageInput} type="file" hidden onChange={onImageChange}/>
                <button type='button' onClick={onChooseImageClick}>Chose Image</button>
                {
                  image.imageDetails?.name?.length > 0 ? <span className='mt-1'> <FaCheck color='green'/> </span> : ''
                }
              </div>
              :
              <input value={initialValue} onChange={props.handleOnChange} name={toCamelCase(fieldName)} placeholder={`${fieldName}`} type={`${type}`} className="focus:outline-none focus:ring-primary focus:ring-1 form-input px-4 py-3 w-full rounded-sm" />
        :
        <></>
      }
    </div>
  )
}

export default Input