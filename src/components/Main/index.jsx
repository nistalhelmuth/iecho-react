import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from './main.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
}

const Main = ({
  postText,
}) => (
  <div className={styles.header} data-test="mainComponent">
    Header
  </div>
);

Main.propTypes = customPropTypes;

export default connect(
  (state) => ({
    textList: [],
  }),
  undefined,
)(Main);
