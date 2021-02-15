import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as textActions from '../../actions/text';
import styles from './header.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
}

const Header = ({
  postText,
}) => (
  <div className={styles.header} data-test="headerComponent">
    Header
  </div>
);

Header.propTypes = customPropTypes;

export default connect(
  undefined,
  (dispatch) => ({
    postText(values) {
      dispatch(textActions.registerText({
        text: values.text,
      }))
    },
  }),
)(Header);
