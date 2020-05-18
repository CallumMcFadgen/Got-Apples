
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

class Test extends React.Component {
  render() {
    const items = [
      {
        src: './../images/home_page_slider/apples_on_branch.jpg',
      },
      {

        src: './../images/home_page_slider/apples_on_chopping_board.jpg',
      },
      {
        src: './../images/home_page_slider/apples_on_ground.jpg',
      },
      {
        src: './../images/home_page_slider/girl_by_trees.jpg',
      },
      {
        src: './../images/home_page_slider/red_apples.jpg',
      }
    ];
    return (
      <div style={{ background: 'white', textAlign: 'center' }}>
        <UncontrolledCarousel items={items} />
        <br />
        <h1>Test</h1>
        <p>Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?” Engari, ko te whakautu o ona tuakana ki a ia ano</p>
        <br />
      </div>
    );
  }
}
export default Test;
