import React from 'react'

const SidebarOptions = ({title, Icon}) => {
  return (
    <div className="Options">
        {
            Icon && <Icon/>
        }
        {
            Icon ? <h4 className='sbopt'>{title}</h4>:<h5 className='sbLists'>{title}</h5>
        }
    </div>
  )
}

export default SidebarOptions