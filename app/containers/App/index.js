import React from 'react';

import About from 'routes/About';
import { injectAsyncReducers } from 'store';
import translationsReducer from 'modules/translate';
import imagesReducer from 'modules/images';
import videoReducer from 'modules/video';

import './style.scss';

// inject reducers that might not have been originally there
injectAsyncReducers({
  translation: translationsReducer,
  images: imagesReducer,
  video: videoReducer
});

const App = () => (
    <main>
      <About/>
    </main>
);

export default App;
