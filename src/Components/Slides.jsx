import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picfiles.alphacoders.com/622/62263.jpg"
          alt="First slide"    
        />
        <Carousel.Caption>
          <h3>Harry Potter</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/EG2CzybUYAAvz8B.jpg:large"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pirates of the caribbean</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images8.alphacoders.com/116/1164638.jpg"
          alt="Third slide"

        />

        <Carousel.Caption>
        <h3>Lucifer</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;