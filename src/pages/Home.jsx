import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import margarita from "../assets/margarita.jpg";
import española from "../assets/española.jpg";
import napolitana from "../assets/napolitana.jpg";

const Home = () => {
  return (
    <>
        <Header />
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4 mb-4">   
                    <CardPizza
                        name="Napolitana"
                        price={5950}
                        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                        img={napolitana}
                    />
                </div>
                <div className="col-12 col-md-4 mb-4">  
                    <CardPizza
                        name="Española"
                        price={6950}
                        ingredients={["mozzarella", "aceitunas", "tomate", "salchicha italiana"]}
                        img={española}
                    />
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <CardPizza
                        name="Margarita"
                        price={6950}
                        ingredients={["mozzarella", "tomate", "albahaca"]}
                        img={margarita}   
                    />
                </div>
            </div>
        </div> 
    </>
  );
};

export default Home;