import React from 'react'
import watch from '../assets/commons/watch.png'
import PropTypes from 'prop-types';

const Button = ({ text, icon, image, backgroundColor, width, border, textTransform, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#007bff', 
    width: width || 'auto', 
    border: border || 'none',
    textTransform: textTransform || 'none',
  };
  return (
    <div>
      <button className="flex items-center justify-center xl:text-base lg:text-sm xs:text-xs text-[10px] md:py-2 sm:py-[7px] py-[5px] sm:px-6 px-4 rounded-md" style={buttonStyle} onClick={onClick} >
        {icon && <span className="button-icon mr-3">{icon}</span>}
        {image && <img src={image} alt="Button Image" className="button-image mr-3" />}
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element, // React element for an icon (optional)
  image: PropTypes.string, // Image source (optional)
  backgroundColor: PropTypes.string, 
  width: PropTypes.string, // Button width (optional)
  border: PropTypes.string,
  textTransform: PropTypes.string,
  onClick: PropTypes.func, // Click event handler (optional)
};

export default Button