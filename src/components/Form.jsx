import React, {Component} from 'react';


//crear componente de formulario
class Form extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            customer: '',
            product: '',
            price: '',
            quantity: '',
            status: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.onAddOrder(this.state); 
    }
    
    
    render() {

        

        return (
            <div className="card mt-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group ">
                        <input type="text" name="id" className="form-control" placeholder="Order" onChange={this.handleInputChange} /> 
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" name="customer" className="form-control" placeholder="Customer" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group mt-2">
                        <select type="text" name="product" className="form-control" placeholder="Product" onChange={this.handleInputChange} >
                        <option value="">Select a product</option>
                        <option value="1">iPhone X</option>
                        <option value="2">Macbook Pro</option>
                        <option value="3">iPad Pro</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" name="price" className="form-control" placeholder="Price" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group mt-2">
                        <input type="number" name="quantity" className="form-control" placeholder="Quantity" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group mt-2">
                        <select type="text" name="status" className="form-control" placeholder="Status" onChange={this.handleInputChange} >
                        <option value="">Select a status</option>
                        <option value="1">Pending</option>
                        <option value="2">Delivered</option>
                        <option value="3">Cancelled</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success mt-4" >Save</button>
                    
                </form>
            </div>
        );
    }
}
export default Form;