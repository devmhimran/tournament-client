import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  bg-slate-100  p-5 m-2 lg:p-10 rounded-lg">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border rounded-lg m-2">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link className='border-b' to='/dashboard/'>My Profile</Link></li>
                        {/* {
                            admin ?
                                <>
                                    <li><Link className='border-b' to='/dashboard/manageallorders'>Manage All Orders</Link></li>
                                    <li><Link className='border-b' to='/dashboard/manageproducts'>Manage Products</Link></li>
                                    <li><Link className='border-b' to='/dashboard/addproduct'>Add A Product</Link></li>
                                    <li><Link className='border-b' to='/dashboard/makeadmin'>Make Admin</Link></li>
                                </> :
                                <>
                                    <li><Link className='border-b' to='/dashboard/myorders'>My Orders</Link></li>
                                    <li><Link className='border-b' to='/dashboard/addareview'>Add a review</Link></li>
                                </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;