import React from 'react';

import Chunk from 'components/Chunk';

const loadContactsPanel = () => import('components/ReportsPanel' /* webpackChunkName: "reports" */);

const Contacts = () => <Chunk load={loadContactsPanel} />;

export default Contacts;
