import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../assets/assets'
import './sidebar.css' 
import { useLocation } from 'react-router-dom';

function Sidebar(){
	let location = useLocation();
	console.log("location =", location)
	return(
		<div className='sidebar'>
			<ul className='list-unstyled'>
				<li>
					<Link to="/" className={`${location.pathname === "/" && "active" } d-flex align-items-center`}>
						<span className="sidebar-icons">
							<img src={Images.home_icon} alt='' className='black-icon img-fluid' />
							<img src={Images.home_icon_1} alt='' className='red-icon img-fluid' />
						</span>
						<span className="sidebar-tag">Home</span>
					</Link>
				</li>
				<li>
					<Link to="/tokenList" className={`${location.pathname === "/tokenList" && "active" } d-flex align-items-center`}>
						<span className="sidebar-icons">
							<img src={Images.chat_icon} alt='' className='black-icon img-fluid' />
							<img src={Images.chat_icon_1} alt='' className='red-icon img-fluid' />
						</span>
						<span className="sidebar-tag">Token List</span>
					</Link>
				</li>
				<li>
					<Link to="/wallets" className={`${location.pathname === "/wallets" && "active" } d-flex align-items-center`}>
						<span className="sidebar-icons">
							<img src={Images.community_icon} alt='' className='black-icon img-fluid' />
							<img src={Images.community_icon_1} alt='' className='red-icon img-fluid' />
						</span>
						<span className="sidebar-tag">Wallets-Info</span>
					</Link>
				</li>
				<li>
					{/* <Link to="/proposals" className="d-flex align-items-center"> */}
					<Link to="/transactions" className={`${location.pathname === "/transactions" && "active" } d-flex align-items-center`}>
						<span className="sidebar-icons">
							<img src={Images.proposal_icon} alt='' className='black-icon img-fluid' />
							<img src={Images.proposal_icon_1} alt='' className='red-icon img-fluid' />
						</span>
						<span className="sidebar-tag">Transactions</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}
export default Sidebar