import React from 'react'



const Icon = (props) => {
  const getIcon = name => {
    return {
      icon1: <img src="/img/icons/frequency.svg" alt="frequency"/>
    
    }
  }

  const IconComponent = getIcon(props.name);
  return (
    <IconComponent />
  );
}

export default Icon;