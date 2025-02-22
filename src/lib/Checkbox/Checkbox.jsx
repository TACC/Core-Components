import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import styles from './Checkbox.module.css';

// RFE: Use (and style) an actual checkbox… `<input type="checkbox">`
//      and still support `DataFilesListingCells`'s button usage (how?)
//      (this would also resolve the aria/lint complications noted below)
const Checkbox = ({className= '', isChecked= false, tabIndex= 0, role= 'checkbox', ...props }) => {
  const rootStyleNames = [
    styles['root'],
    isChecked ? styles['is-checked'] : '',
  ].join(' ');

  return (
    <span
      className={`icon-set ${className} ${rootStyleNames}`}
      aria-checked={isChecked}
      // HELP: Should use `tabIndex={0}`, but that causes unable-to-disable
      //       lint error `jsx-ally/no-noninteractive-tabindex`
      //       (need for a `onClick`, `onKeyDown`, et cetera).
      tabIndex={tabIndex}
      role={role}
      // So users can pass `onClick` and `onKeyDown`
      // FAQ: Adding those as props introduces inaccurate jsx-a11y lint error
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Icon className={styles['check']} name="approved-boxed-reverse" />
      <Icon className={styles['box']} name="boxed" />
    </span>
  );
};
Checkbox.propTypes = {
  /** Additional className for the root element */
  className: PropTypes.string,
  /** Whether box should be checked */
  isChecked: PropTypes.bool,
  /** Standard HTML attribute [tabindex] */
  tabIndex: PropTypes.number,
  /** Standard HTML attribute [role] */
  role: PropTypes.string,
};

export default Checkbox;
