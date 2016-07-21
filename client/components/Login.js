/* eslint-disable new-cap, react/prop-types, max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  create(e){
      e.preventDefault();
      const email = this.refs.email.value;
      const password = this.refs.password.value;
      const body = JSON.stringify({ email, password });;

    fetch('/api/login', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
        localStorage.clear();
        localStorage.setItem('token', r.token);
        browserHistory.push('/digimon');
    });

  }

  render() {
    return (
      <div className='row'>
        <h3>Log-digi-in</h3>
         <form className='col-xs-6'>
          <div className='form-group'>
            <label>Digi-mail</label>
            <input className='form-control' ref='email' type='text' />
          </div>
          <div className='form-group'>
            <label>Digi-password</label>
            <input className='form-control' ref='password' type='password' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Digi Do It</button>
        </form>
       
      </div>
    );
  }

}