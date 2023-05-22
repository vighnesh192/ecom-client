import React from 'react'

function ProductsTable({products}) {
    
    return (
        <table className="border-collapse">
            <thead>
                <tr>
                    <th className='text-left px-8 py-4'>Product</th>
                    <th className='text-left px-8 py-4'>Price</th>
                    <th className='text-left px-8 py-4'>Quantity</th>
                    <th className='text-left px-8 py-4'>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(prod => {
                        return <tr key={prod.id}>
                            <td className='border-bottom text-left px-8 py-4'>{prod.name}</td>
                            <td className='border-bottom text-left px-8 py-4'>{prod.price}</td>
                            <td className='border-bottom text-left px-8 py-4'>{prod.stock}</td>
                            <td className='border-bottom text-left px-8 py-4'>{prod.price * prod.stock}</td>
                        </tr>
                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default ProductsTable