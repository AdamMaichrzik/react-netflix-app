import Navbar from "../components/navbar/Navbar";
import "./home.scss";

function Home() {
	return (
		<div className="home">
			<Navbar />
			<img
				width="100%"
				src="https://geekcat.pl/wp-content/uploads/2021/04/Dr-House.jpeg"
				alt="Dr House photo"
			/>
		</div>
	);
}

export default Home;
