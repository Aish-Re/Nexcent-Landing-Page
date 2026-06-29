import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Clients from "../components/Clients/Clients";
import Community from "../components/Community/Community";
import Feature1 from "../components/Feature1/Feature1";

function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <Clients />
            <Community />
            <Feature1 />
        </>
    );
}

export default Home;