import Cards from "../card/Cards";
import "../home/home.css";
import CarouselComponent from "./Carousel";


const Home = () => {
    return (
        <div className="home">
            <CarouselComponent />
            <Cards />
        </div>
    );
}

export default Home;
