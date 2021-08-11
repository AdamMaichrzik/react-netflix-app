import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
function Navbar() {
	return (
		<div className="navbar">
			<div className="container">
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt="Netflix logo photo"
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and popular</span>
					<span>My list</span>
				</div>
				<div className="right">
					<Search />
					<span>KID</span>
					<Notifications />
					<img
						src="https://avatars.githubusercontent.com/u/64159448?v=4"
						alt="Profile picture"
					/>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
