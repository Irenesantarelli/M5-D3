import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from "../Data/carouselData";
import "../stile/carousel.css"

function Mycarousel() {
    return (
        <Carousel fade>
            {
                carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100 object-fit-cover"
                                src= {item.img}
                                alt= {item.title}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    )
                })
            }
        </Carousel>
    );
}

export default Mycarousel;