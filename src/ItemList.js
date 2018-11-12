import _ from 'lodash';
import React from 'react';
import ItemDescription from './ItemDescription'

let ItemList = ({items, onSelectItem, selectedCategory, itemActivate, selectedItem}) => {
  const currentItems = items
    .filter(item => item.categories.find(itemCategory => itemCategory.id === selectedCategory));
  return (
    <div className="items_list ">
      {_.size(currentItems) === 0 ? (
        <div className="noItems">
          <h3> No products in this category  </h3>
        </div>
      ) : (
        <div>
          {currentItems.map(item => (
            <ItemDescription
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              onSelect={() => onSelectItem(item.id)}
              active={selectedItem === item.id ? "show" : "hide"}
              headerActive={selectedItem === item.id ? "bold" : "not_bold"} />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default ItemList
