// import _ from 'lodash';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

let CategoryDisplay = ({ categories, onSelectCategory, selectedCategory}) => {
  const links = categories.map(i => (
    <Col key={i.id} xs={6} md={3} lg={1} >
      <div key={i.id} className="category_item" onClick={() => onSelectCategory(i.id)}>
        <a key={i.id} href="#" className={selectedCategory === i.id ? "text_bold" : "text_normal"}>
          { i.title }
        </a>
      </div>
    </Col>
  ));

  return (
    <Grid>
      <Row>
        { links }
      </Row>
    </Grid>
  )
};

export default CategoryDisplay
