import React from 'react';

class Item extends React.Component {
  render() {
    const {tab, desc} = this.props
    console.log(tab , desc)
    return (
      <div>
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">List Of Item</h3>
          </div>
          <h2>123</h2>
          <div className="panel-body">
          </div>
        </div>
      </div>    
    );
  }
}

export default Item;