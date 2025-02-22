import React, { useState } from 'react';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Badge,
  InputGroup,
} from 'reactstrap';
import Button from '../Button';

import { useField } from 'formik';
import PropTypes from 'prop-types';
import './FormField.global.css';

/** A limited-choice wrapper for `FormField` */
const FormFieldWrapper = ({ children, type = 'FormGroup' }) => {
  let wrapper;

  switch (type) {
    case 'InputGroup':
      wrapper = <InputGroup>{children}</InputGroup>;
      break;

    case 'FormGroup':
    default:
      wrapper = <FormGroup>{children}</FormGroup>;
  }

  return wrapper;
};
FormFieldWrapper.propTypes = {
  /** The content for the wrapper */
  children: PropTypes.node.isRequired,
  /** Which wrapper to use */
  type: PropTypes.oneOf(['InputGroup', 'FormGroup', '']),
};

/**
 * A standard form field that supports some customization and presets.
 *
 * Customizations:
 * - providing an `<InputGroupAddon>` (can not use with "Agave File Selector")
 *
 * Presets:
 * - Agave File Selector (requires `agaveFile` and `SelectModal`)
 */
const FormField = ({
  id = undefined,
  name,
  label = undefined,
  description = undefined,
  required = false,
  agaveFile = undefined,
  SelectModal = undefined,
  addon = undefined,
  addonType = undefined,
  ...props
}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);
  const [openAgaveFileModal, setOpenAgaveFileModal] = useState(false);
  const hasAddon = addon !== undefined;
  const wrapperType = hasAddon ? 'InputGroup' : '';

  const FieldLabel = () => (
    <Label
      className="form-field__label"
      for={id || name}
      size="sm"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {label}{' '}
      {required ? (
        <Badge color="danger" style={{ marginLeft: '10px' }}>
          Required
        </Badge>
      ) : null}
    </Label>
  );
  const FieldNote = () => (
    <FormText className="form-field__help" color="muted">
      {description}
      {meta.touched && meta.error && (
        <div className="form-field__validation-error">{meta.error}</div>
      )}
    </FormText>
  );

  // Allowing ineffectual prop combinations would lead to confusion
  if (addon && agaveFile) {
    throw new Error(
      'You must not pass `addon` and `agaveFile`, because `agaveFile` triggers its own field add-on'
    );
  }
  if ((!agaveFile && SelectModal) || (agaveFile && !SelectModal)) {
    throw new Error('An `agaveFile` and a `SelectModal` must both be passed');
  }

  return (
    <>
      {label && hasAddon ? <FieldLabel /> : null}
      <FormFieldWrapper type={wrapperType}>
        {label && !hasAddon ? <FieldLabel /> : null}
        {agaveFile ? (
          <>
            <SelectModal
              isOpen={openAgaveFileModal}
              toggle={() => {
                setOpenAgaveFileModal((prevState) => !prevState);
              }}
              onSelect={(system, path) => {
                helpers.setValue(`agave://${system}${path}`);
              }}
            />

            <InputGroup>
              <Button
                type="secondary"
                onClick={() => setOpenAgaveFileModal(true)}
              >
                Select
              </Button>
              <Input {...field} {...props} bsSize="sm" />
            </InputGroup>
          </>
        ) : (
          <>
            {hasAddon && addonType === 'prepend' ? addon : null}
            <Input {...field} {...props} bsSize="sm" />
            {hasAddon && addonType === 'append' ? addon : null}
          </>
        )}
        {!hasAddon ? <FieldNote /> : null}
      </FormFieldWrapper>
      {hasAddon ? <FieldNote /> : null}
    </>
  );
};
FormField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  required: PropTypes.bool,
  agaveFile: PropTypes.bool,
  SelectModal: PropTypes.func,
  /** An [`<InputGroupAddon>`](https://reactstrap.github.io/components/input-group/) to add */
  addon: PropTypes.node,
  /** The [`<InputGroupAddon>` `addonType`](https://reactstrap.github.io/components/input-group/) to add */
  addonType: PropTypes.oneOf(['prepend', 'append']),
};

export default FormField;
