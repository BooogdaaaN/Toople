import "../stylesheets/Home.scss";

import mainPhoto from "../img/p/main_desc.svg";

function Home() {
    return (
        <div className="home">
            <picture>
                <img src={mainPhoto} alt="main_image" />
            </picture>
        </div>
    );
}

export default Home;
