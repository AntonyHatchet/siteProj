import React, {Component} from 'react';

import About from 'routes/About';
import { injectAsyncReducers } from 'store';
import translationsReducer from 'modules/translate';
import imagesReducer from 'modules/images';
import videoReducer from 'modules/video';
import visitorReducer from 'modules/visitor';

import styles from './style.scss';

// inject reducers that might not have been originally there
injectAsyncReducers({
  translation: translationsReducer,
  images: imagesReducer,
  video: videoReducer,
  visitor: visitorReducer
});

export default class App extends Component{

  render(){

    return(
    <main>
      <About/>
    </main>
    )
  }
}

