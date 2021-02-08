import React from 'react'
import Albums from './components/Albums'
import DataPagination from './components/common/DataPagination'
import Form from './components/common/Form'
import ProductForm from './components/ProductForm'

const App = () => {

    return (
        <div className="container">
                <ProductForm/>
                <Albums/>
{/*                 <DataPagination/>
 */}        </div>
    )
}

export default App;
