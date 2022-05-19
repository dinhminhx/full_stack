import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
class Restaurant extends Component
{

    state ={
        name: '',
        phone: '',
        email: '',
        detail: '',
    }

    handleInput = e=> {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    saveRestaurantData = async (e)=> {
        e.preventDefault();
        const res =  await axios.post('http://localhost:8000/api/Add',this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                phone: '',
                email: '',
                detail: '',
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Data
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit = {this.saveRestaurantData}>
                                    <div className="form-group mb-3">
                                        <label>Restaurant Name</label>
                                        <input type="text" onChange={this.handleInput}  name ="name" value={this.state.name} className="form-control" placeholder="Restaurant Name"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Restaurant Phone</label>
                                        <input type="text" onChange={this.handleInput} name ="phone" value={this.state.phone} className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Restaurant Email</label>
                                        <input type="text" onChange={this.handleInput} name ="email" value={this.state.email}  className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Restaurant Details</label>
                                        <TextareaAutosize type="text" onChange={this.handleInput} name ="detail" value={this.state.detail}  className="form-control" placeholder="Detail" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="sumbit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Restaurant;