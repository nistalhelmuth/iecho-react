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
  <div className={`row justify-content-center ${styles.main}`} data-test="mainComponent">
    <div className={`col-8 ${styles.test}`}>
      <h3 className={`col-8 ${styles.title}`}>
        RESULTS:
      </h3>
      <div className={`row justify-content-center ${styles.test2}`}>
        <div className={`col-7 ${styles.test3}`}>
          Text 1
        </div>
        <div className={`col-7 ${styles.test3}`}>
          Text 1
        </div>
        <div className={`col-7 ${styles.test3}`}>
          Text 1
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = customPropTypes;

export default connect(
  (state) => ({
    textList: [],
  }),
  undefined,
)(Main);
