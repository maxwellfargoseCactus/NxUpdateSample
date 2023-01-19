import * as React from 'react';
import './welcome-page.scss';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
// import { Component } from 'react';
import { BasicInfo } from '../basic-info/basic-info'
// import { RemoteEntryComponent } from '../../entry.component';



export function WelcomePage(props: any) {




  return (
    <>
      <div className='cls_reactApp'> React App Welcome Page</div>
      <ul className="remote-menu">

        <Link to='/reactapp/basicInfo'>Basic Info</Link>
      </ul>

      {/* <ul className="remote-menu">

        // <Link to='/reactapp/basicInfo'>Basic Info</Link>
      </ul>
      <Routes>

        <Route path="basicInfo" element={<BasicInfo />} />


      </Routes> */}
      {/* <Outlet /> */}
    </>)
}


