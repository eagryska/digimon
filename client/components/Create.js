/* eslint-disable new-cap, react/prop-types, max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear(){
    this.refs.name.value = "";
    this.refs.picture.value = "";
  }

  create(e){
      e.preventDefault();
      const name = this.refs.name.value;
      const picture = this.refs.picture.value;
      const body = JSON.stringify({ name, picture });;

    fetch('/api/digimon', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      this.clear();
      this.props.refresh();
    });

  }

  render() {
    return (
      <div>
        <h3>Digiator</h3>
         <form>
          <div className='form-group'>
            <label>Diginame</label>
            <input className='form-control' ref='name' type='text' />
          </div>
          <div className='form-group'>
            <label>Digipic</label>
            <input className='form-control' ref='picture' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Digi Do It</button>
        </form>
       
      </div>
    );
  }

}