import React from 'react'
import './Button.css';

// Signup, Signin, Shop Now, Add to Cart, View Details, Continue Shopping,
// Update Cart, Close Cart, Calculate Shipping, Proceed to Checkout 

function Button({action, onSubmit, ...props}) {
    // const handleClick = () => {
        // switch (action) {
        //     case "Sign Up":
        //         signup();
        //         break;
        //     case "Signin":
        //         signin();
        //         break;
        //     case "Shop Now":
        //         shopNow();
        //         break;
        //     case "Add To Cart":
        //         addToCart();
        //         break;
        //     case "View Details":
        //         viewDetails();
        //         break;
        //     case "Continue Shopping":
        //         continueShopping();
        //         break;
        //     case "Update Cart":
        //         updateCart();
        //         break;
        //     case "Close Cart":
        //         closeCart();
        //         break;
        //     case "Calculate Shipping":
        //         calculateShipping();
        //         break;
        //     case "Proceed To Checkout":
        //         proceedToCheckout();
        //         break;
            
        //     default:
        //         break;
        // }
    // }
    return (
        <button 
            style={{
                backgroundColor: action === 'Proceed To Checkout' || action === 'View Details' ? "#08D15F" : "#FB2E86"
            }} 
            className={`text-white py-2.5 px-14 rounded w-full`}
            onClick={onSubmit}
            type="submit"
        >
            {action || "Login"}
        </button>
    )
}

export default Button