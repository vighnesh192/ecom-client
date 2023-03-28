import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postProductAction } from '../actions/productActions';
import Form from '../components/Form/Form'

function AddProduct() {
  const fields = [
    {
        fieldName: 'Name',
        type: 'text',
        twoCols: false,
        initialVal: ''
    },
    {
        fieldName: 'Description',
        type: 'text',
        twoCols: false,
        initialVal: ''
    },
    {
      fieldName: 'Price',
      type: 'number',
      twoCols: false,
      initialVal: ''
    },
    {
      fieldName: 'Category',
      type: 'text',
      twoCols: false,
      initialVal: ''
    },
    {
      fieldName: 'Stock',
      type: 'number',
      twoCols: false,
      initialVal: ''
    },
    {
      fieldName: 'Image',
      type: 'file',
      twoCols: false,
      initialVal: ''
    }
  ]

  const dispatch = useDispatch();

  const [productDetails, setproductDetails] = useState({
    name: '',
    description: '',
    price: null,
    category: '',
    stock: null
  })

  const [images, setImages] = useState([]);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    console.log("Images State Effect:-", images);
  }, [images])
  
  const handleOnChange = (e) => {
    setproductDetails({
        ...productDetails,
        [e.target.name]: e.target.value
    })
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setImages([...e.target.files]);
      console.log("IMAGE STATE:-", images, ",,,", e.target.files)
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a form data object
    let formData = new FormData();

    // Append each of the files
    images.forEach((img) => {
      console.log("IMAGE:- ", img)
      formData.append('files[]', img);
    });

    for(const key in productDetails) {
      formData.append(key, productDetails[key]);
    }
    
    console.log("Form Data", formData);

    dispatch(postProductAction(token, formData));
  }
  
  return (
    <div className='flex justify-center mt-20'>
        <div className="w-96">
            <Form onSubmit={handleSubmit} imageState={images} handleImageChange={onImageChange} handleOnChange={handleOnChange} fields={fields} initialValues={productDetails} action="Submit" />
        </div>
    </div>
  )
}

export default AddProduct