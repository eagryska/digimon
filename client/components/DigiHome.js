import React from 'react';
import Digimon from './Digimon'
import Create from './Create'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = { digimon: [] };
  }
  

  componentDidMount() {
    this.refresh();
  }

  refresh(){
    fetch('/api/digimon', {headers: {'token': localStorage.token}})
    .then(r => r.json())
    .then(j => {
      this.setState({ digimon: j.digimon });
    });
  }

  render() {
    return (
      <div>
        <h2>Are YOU Digi Destined</h2>
        <Create refresh={this.refresh} />
        <table>
          <tbody>
            {this.state.digimon.map((d,i) => <Digimon key={i} digimon={d}/>)}
          </tbody>
        </table>
      </div>
    );
  }

}
