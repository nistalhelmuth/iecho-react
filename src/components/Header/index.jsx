import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Formik } from 'formik';
import * as textActions from '../../actions/text';
import styles from './header.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
}

const Header = ({
  registerText,
}) => (
  <div className={`row justify-content-center align-items-center ${styles.header}`} data-test="headerComponent">
    <Formik 
      data-test="unAuthorizedComponent"
      initialValues={{
        text: undefined,
      }}
      onSubmit={(values) => {
        registerText(values);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
        <form
          className="col-md-12 col-lg-6"
          onSubmit={handleSubmit}
        >
          <div className="row justify-content-center align-items-center">
            <input
              id="text"
              name="text"
              type="text"
              className="col-7"
              onChange={handleChange}
              value={values.text}
            />
            <button className="col-2" type="submit" >Send</button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

Header.propTypes = customPropTypes;

export default connect(
  undefined,
  (dispatch) => ({
    registerText(values) {
      dispatch(textActions.registerText({
        text: values.text,
      }))
    },
  }),
)(Header);
