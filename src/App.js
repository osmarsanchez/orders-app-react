
import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation';
import Form from './components/Form';
import Swal from 'sweetalert2';

const orders =
	[
		{
			"id": "Orden  1️⃣ ",
			"customer": "John Smith",
			"product": "iPhone X",
			"price": 999.99,
			"quantity": 1,
			"status": "pending"
		},
		{
			"id": "Orden  2️⃣ ",
			"customer": "Jane Doe",
			"product": "Macbook Pro",
			"price": 1299.99,
			"quantity": 1,
			"status": "pending"
		},
		{
			"id": "Orden  3️⃣ ",
			"customer": "Peter Parker",
			"product": "iPad Pro",
			"price": 899.99,
			"quantity": 1,
			"status": "success"
		},
		{
			"id": "Orden  4️⃣ ",
			"customer": "Bruce Wayne",
			"product": "Watch",
			"price": 199.99,
			"quantity": 1,
			"status": "success"
		},
	]


class App extends Component {
	constructor() {
		super();
		this.state = {
			orders
		};
		this.handleAddOrder = this.handleAddOrder.bind(this);

	}
	handleAddOrder(order) {
		if (order.id !== '' && order.customer !== '' && order.product !== '' && order.price !== '' && order.quantity !== '') {
			this.setState({
				orders: [...this.state.orders, order]

			})
			//mensaje con sweetalert
			Swal.fire({
				title: '¡Saved!',
				text: 'The order has been saved',
				icon: 'success',
				confirmButtonText: 'OK'
			});
		} else {
			//mensaje con sweetalert
			Swal.fire({
				title: '¡Error!',
				text: 'The order is not saved, please check the fields',
				icon: 'error',
				confirmButtonText: 'OK'
			});
		}
	}
	handleRemoveOrder(id) {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				)
				this.setState({
					orders: this.state.orders.filter((order, i) => {
						return i !== id;
					})
				})
			}
		})


	}

render() {
	const orders = this.state.orders.map((order, i) => {
		return (
			<div className='col-md-4' key={i}>
				<div className='card mt-4'>
					<div className='card-header'>
						<h3>{order.id}</h3>
						<span className='badge badge-pill bg-warning ml-2'> {order.status}</span>
					</div>
					<div className='card-body text-start'>
						<h5 className='card-title'> <strong>Product:</strong> {order.product}</h5>
						<p className='card-text'><strong>Customer:</strong> {order.customer}</p>
						<p className='card-text'><strong>Quantity:</strong> {order.quantity}</p>
						<p className='card-text'><strong>Total:</strong> $ {order.price * order.quantity}</p>
					</div>
					<div className='card-footer'>
						<button className='btn btn-danger' onClick={this.handleRemoveOrder.bind(this, i)}>Delete </button>
					</div>
				</div>
			</div>
		)
	}

	)
	return (
		<div className="App">

			<Navigation counter={this.state.orders.length} />
			

			<div className="container">
				<div className="row mt-4">
					<div className="col-md-4">
						<Form onAddOrder={this.handleAddOrder} />
					</div>


					<div className='col-md-8'>
						<div className='row'>
							{orders}
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}
}

export default App;
