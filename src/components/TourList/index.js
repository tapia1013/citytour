import React, { Component } from 'react';
import Tour from '../Tour';
import './TourList.scss';
import { tourData } from '../../tourData';

class TourList extends Component {
  state = {
    tours: tourData
  }

  render() {
    console.log(this.state.tours)
    return (
      <div>
        Hello From TourList
        <Tour />
      </div>
    )
  }
}

export default TourList;