import React from 'react';
import transactionReducer from 'modules/transactions';
import categoryReducer from 'modules/categories';
import { injectAsyncReducers } from 'store';
import Animation from 'components/Animation/Space';

const SpaceContainer = () => (
  <section>
    <Animation width={window.innerWidth} height={window.innerHeight}/>
  </section>
);

export default SpaceContainer;
