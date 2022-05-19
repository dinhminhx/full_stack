import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Restaurant.css';
class Restaurant extends Component
{
    state = {
        restaurants: [],
        loading: true,
    }
    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/Restaurant');
        if(res.data.status === 200)
        {
            this.setState({
                restaurants: res.data.restaurants,
                loading: false,
            });
        }
    }
    render() {
        var restaurant_HTMLTABLE = "";
        if(this.state.loading){
            restaurant_HTMLTABLE =<tr><td colSpan="7"><h2>Restaurants Loading</h2></td></tr>
        }
        else
        {
            restaurant_HTMLTABLE = 
            this.state.restaurants.map((item)=>{
                return (
                    <tr key = {item.id}>
                        <td className="M1">{item.id}</td>
                        <td className="M2">{item.name}</td>
                        <td className="M3">{item.phone}</td>
                        <td className="M4" >{item.email}</td>
                        <td className="M5">{item.detail}</td>
                        <td>
                            <Link to={`edit/${item.id}`} className="btn btn-success btn-sm">Edit</Link> 
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Restaurant Data
                                <Link to={'Add'} className="btn btn-primary btn-sm float-end">Add</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                            <th>Description</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {restaurant_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Restaurant;