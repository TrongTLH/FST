import React from 'react'
import "./DashBoard.css"
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RightSide/RightSide';


const DashBoard = () => {
  return (
    <div className='DashBoard'>
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
     
  );
}

export default DashBoard