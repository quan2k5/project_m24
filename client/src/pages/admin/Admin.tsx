import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './Admin.scss'
export default function Admin() {
    return <div className='admin_part'>
         <div className='grid_row'>
            <div className='grid-column-2'></div>
            <div className='grid-column-10'>
                <Outlet></Outlet>
            </div>
         </div>
    </div>
}
