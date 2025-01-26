/**
 * @copyright 2024 SuryaVashisth 
 * @license Apache-2.0
 */

/**
 * 
 * Node modules 
 * 
 */

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Primary Button 
 */
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

/**
 * Outline Button 
 */


const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  const renderIcon = () => {
    if (icon?.type === FontAwesomeIcon) {
      // If the icon is a FontAwesomeIcon component
      return <span className="ml-2"><FontAwesomeIcon icon={icon.props.icon} /></span>;
    }
    return (
      <span className="material-symbols-rounded ml-2" aria-hidden="true">
        {icon}
      </span>
    );
  };

  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}
        {icon && renderIcon()}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon && renderIcon()}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // Supports Material Design strings or JSX elements like FontAwesomeIcon
  classes: PropTypes.string,
};




const ButtonFooter = ({
  href,
  target = "_self",
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-Footer ${classes}`}
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-Footer ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonFooter.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

const ButtonConnect = ({
  href,
  target = "_self",
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-connect ${classes}`}
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-connect ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonConnect.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};
/**
 * Primary Button with Arrow
 */
const ButtonWithArrow = ({
    href,
    target = "_self",
    label,
    classes
  }) => {
    return href ? (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}
        <span
          className="material-symbols-rounded ml-2 transform rotate-[315deg]"
          aria-hidden="true"
        >
          arrow_forward
        </span>
      </a>
    ) : (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        <span
          className="material-symbols-rounded ml-2 transform rotate-[315deg]"
          aria-hidden="true"
        >
          arrow_forward
        </span>
      </button>
    );
  };
  
  ButtonWithArrow.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    classes: PropTypes.string
  };
  
ButtonWithArrow.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  classes: PropTypes.string
};

export { ButtonPrimary, ButtonOutline, ButtonWithArrow, ButtonFooter, ButtonConnect  };
