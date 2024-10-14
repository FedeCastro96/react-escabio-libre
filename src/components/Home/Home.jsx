import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../../images/carousel1.jpg";
import Carousel2 from "../../images/carousel2.jpg";
import Carousel3 from "../../images/carousel3.jpg";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [Carousel1, Carousel2, Carousel3];

  return (
    <div className="slider">
      <h1>Bienvenidos 🍻</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
