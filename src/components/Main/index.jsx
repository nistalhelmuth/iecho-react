import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as selectors from '../../reducers';
import styles from './main.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
}

const Main = ({
  textList,
}) => (
  <div className={`row justify-content-center ${styles.main}`} data-test="mainComponent">
    <div className={`col-8 ${styles.test}`}>
      <h3 className={`col-8 ${styles.title}`}>
        RESULTS:
      </h3>
      <div className={`row justify-content-center ${styles.test2}`}>
        {
          textList.length ? (
            <>
              {
                textList.map((text) => (
                  <div className={`col-7 ${styles.test3}`}>
                    {text.text}
                  </div>
                ))
              }
            </>
          ) : (
            <h4 className={`col-7`}>
              No text to show...
            </h4>
          )
        }
      </div>
    </div>
  </div>
);

Main.propTypes = customPropTypes;

export default connect(
  (state) => ({
    textList: selectors.getAllText(state),
  }),
  undefined,
)(Main);
