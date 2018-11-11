import _ from 'lodash';
import React from 'react';
import axios from 'axios';


let ItemDescription = ({id, title, description, onSelect, active, headerActive}) => (
  <div key={id} onClick={onSelect}>
    <div className="item_container">
      <p className={headerActive}>{title}</p>
    </div>
  <div className={active}>{description}</div>
  </div>
);

export default ItemDescription
