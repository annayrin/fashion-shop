import Cards from "../card/Cards";
import "../home/home.css";
import CarouselComponent from "./Carousel";
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const {user, isAuthenticated} = useAuth0();
    console.log(user);
    console.log(isAuthenticated);
    return (
        <div className="home">
            <CarouselComponent />
            <Cards />
        </div>
    );
}

export default Home;
