import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {

  render() {
    return (
      <div>
       <div class="Filter_container">
        <span class="open-sans Filter_description">List properties with "desired rent" greator than: $</span>
            <input class="open-sans dark_green_border Filter_input" placeholder="0" type="number"/>
            <button class="open-sans lightest_green_bgc Filter_btn"> Filter </button>
            <button class="open-sans darkest_green_bgc Filter_btn Filter_btn_reset"> Reset </button>
        </div>
      </div>
    );
  }
}

