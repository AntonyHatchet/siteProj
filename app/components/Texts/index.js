import React from 'react';

import styles from './style.scss';

export const SectionHeader = (props) => (
  <h1 className={(props.className)?props.className:styles.sectionHeader}>{props.text}</h1>
);

export const SectionSubheader = (props) => (
  <h3 className={(props.className)?props.className:styles.sectionSubheader}>{props.text}</h3>
);

export const PlainText = (props) => (
  <p className={(props.className)?props.className:styles.plainText}>{props.text}</p>
);