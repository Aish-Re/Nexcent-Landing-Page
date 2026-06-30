import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Clients from "../components/Clients/Clients";
import Community from "../components/Community/Community";
import Feature1 from "../components/Feature/Feature1";
import Stats from "../components/Stats/Stats";
import Feature2 from "../components/Feature/Feature2";
import Customers from "../components/Customers/Customers";
import Footer from "../components/Footer/Footer";
import Blogs from "../components/Blogs/Blogs";

function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <Clients />
            <Community />
            <Feature1 />
            <Stats />
            <Feature2 />
            <Customers />
            <Blogs />
            <Footer />
        </>
    );
}

export default Home;