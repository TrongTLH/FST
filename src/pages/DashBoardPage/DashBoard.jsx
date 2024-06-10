import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RigtSide/RightSide'


const DashBoard = () => {
  return (
    <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
  )
}

export default DashBoard