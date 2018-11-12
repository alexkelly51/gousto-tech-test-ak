import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import './App.css';
import ItemList from './ItemList'
import CategoryDisplay from './CategoryDisplay'

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      categories: [],
      items: [],
      selectedCategoryId: null,
      selectedItemId: null
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectCategory(id) {
  this.setState({
      selectedCategoryId: id,
    });
  }

  onSelectItem(id) {
    this.setState({
      selectedItemId: id
    });
  }

  componentWillMount() {
    axios.get(`https://api.gousto.co.uk/products/v2.0/categories`)
      .then(res => {
        const allData = res.data;
        const categories = _.sortBy(allData.data, 'title');
        this.setState({ categories: categories });
      });
    axios.get(`https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attri`)
      .then(res => {
        const allDataItems = res.data;
        const items = _.sortBy(allDataItems.data, 'title');
        this.setState({ items: items });
      })
  }

  render() {
    const { categories, items, selectedCategoryId, selectedItemId} = this.state;

    return (
      <div className="wrapper">
        <div className="store container">
          <div className="titles">
            <img src="./gousto_text_logo.png" alt="Gousto" />
            <h1> Store Cupboard</h1>
          </div>
            <h2>Click on a category:</h2>
            <CategoryDisplay categories={categories} items={items} onSelectCategory={this.onSelectCategory} selectedCategory={selectedCategoryId}/>
            <ItemList items={items} onSelectItem={this.onSelectItem}
            selectedCategory={selectedCategoryId} selectedItem={selectedItemId} />
        </div>
      </div>
    );
  }
}


export default App
