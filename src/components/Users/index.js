import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class users extends Component {

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('respuesta', response.data);
        this.setState({
            users: response.data


        })

    }

    putRows = () => [

        this.props.users.map((user) => ( 
            <tr key = { user.id_number }>
            <td> { user.last_name } </td> 
            <td> { user.second_last_name } </td>
            <td> {user.name } </td>
            <td> {user.country } </td>
            </tr>
        ))


    ];

    render() {
        console.log(this.props);
        return ( 
            <div >
            <table className = "table" >
              <thead>
                <tr>
                  <th>
                    Name 
                  </th> 
                  <th>
                  Email
                  </th> 
                  <th>
                  Website 
                  </th> 
                </tr>
              </thead>
              <tbody > 
                { this.putRows() } 
              </tbody>
            </table>
            </div>


        );
    }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
}
export default connect(mapStateToProps, {})(users);