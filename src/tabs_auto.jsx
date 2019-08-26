import React, {useEffect, useState} from 'react'
import Tabs from './tabs.jsx'
import Autocomplete from './autocomplete.jsx'

const TabsAuto = props => {
  const {tabs} = props
  
  const content = (
    <div className="tabs-auto">
      <Tabs tabs={tabs}/>
      <Autocomplete />
    </div>
  )
  return content;
}

export default TabsAuto;