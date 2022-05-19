import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';

class Edit extends Component
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
    async componentDidMount(){
        const restaurant_id = this.props.match.params.id;
        console.log(restaurant_id);
    }

    updateRestaurant = async (e)=> {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Data
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit = {this.updateRestaurant}>
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
export default Edit;