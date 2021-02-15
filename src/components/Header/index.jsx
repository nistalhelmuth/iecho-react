import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as userActions from '../../actions/user';
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
      dispatch(userActions.doLogin({
        text: values.email,
      }))
    },
  }),
)(Header);
