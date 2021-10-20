import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function SideBar() {
    const router = useRouter();

    return (

        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src="Dubai Desk1.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                    <span className="brand-text font-weight-light">Dubai Desk</span>
                </a>

                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <Link href="dashboard" className="nav-link active">
                                    <p className={router.pathname == '/dashboard' ? "nav-link active" : "nav-link"}>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item menu-open">
                                <Link href="RegisteredUsers" className="nav-link active">
                                    <p className={router.pathname == '/RegisteredUsers' ? "nav-link active" : "nav-link"}>
                                        Registered users
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item menu-open">
                                <Link href="Workspaces" className="nav-link active">
                                    <p className={router.pathname == '/Workspaces' ? "nav-link active" : "nav-link"}>
                                        Workspace Management
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item menu-open">
                                <Link href="bookingRequests" className="nav-link active">
                                    <p className={router.pathname == '/bookingRequests' ? "nav-link active" : "nav-link"}>
                                        Booking Requests
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item menu-open">
                                <Link href="Saleshistory" className="nav-link active">
                                    <p className={router.pathname == '/Saleshistory' ? "nav-link active" : "nav-link"}>
                                        Sales History
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}