import {
  Card,
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
// import { CiSearch } from "react-icons/ci";
import Img from "../Assets/Img.png";
import Img1 from "../Assets/Img-1.png";
import Img2 from "../Assets/Img-2.png";
import Img3 from "../Assets/Img-3.png";
import Img4 from "../Assets/Img-4.png";
import Img5 from "../Assets/Img-5.png";
import Img6 from "../Assets/Img-6.png";
import Img7 from "../Assets/Img-7.png";
import CardImg from "../Assets/cardThum.png";
import Webdev from "../Assets/Webdev.png";
import software from "../Assets/Software dev.png";
import MobDev from "../Assets/Mob Dev.png";
import uiux from "../Assets/UIUX.png";
import StrongExperties from "../Assets/Strong expertise.png";
import Ownership from "../Assets/Ownership & Feedback.png";
import OnTime from "../Assets/On Time Delivery.png";
import ResultFocuse from "../Assets/Result Focused.png";
import ClientFirst from "../Assets/Client First.png";
import Effective from "../Assets/Effective Synergy.png";
import Tech from "../Assets/Tech.png";
import Carosol from "../Assets/Carosol.png";
import walmart from "../Assets/walmart.png";
import Deloite from "../Assets/Deloite.png";
import okta from "../Assets/Deloite.png";

import digitalmarketing from "../Assets/Digital Marketing.png";
import contentmarketing from "../Assets/Content.png";
import cardImg1 from "../Assets/CardImg1.png";
import contactUs from "../Assets/contact us.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiFacebook, CiLocationOn, CiTwitter } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
// import ContactUs from "../Assets/contact us.png";

+(<div className="3"></div>);
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  var jasonData = [
    {
      id: 1,
      title: "Strong Expertise",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: StrongExperties,
    },
    {
      id: 2,
      title: "Ownership & Feedback",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: Ownership,
    },
    {
      id: 3,
      title: "On Time Delivery",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: OnTime,
    },
    {
      id: 4,
      title: "Result Focused",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: ResultFocuse,
    },
    {
      id: 5,
      title: "Client First",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: ClientFirst,
    },
    {
      id: 6,
      title: "Effective Synergy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      image: Effective,
    },
  ];
  const ExampleCarouselImage = () => {
    return (
      <div>
        {/* Center the text */}
        <Container className="carosolBg">
          <Row>
            <Col className="d-flex justify-content-center align-items-center vh-100">
              <Col lg={8} className="text-center">
                <div>
                  <h3>
                    <span>
                      <FaQuoteLeft className="quote" />
                    </span>{" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to{" "}
                    <span>
                      <FaQuoteRight className="quote" />
                    </span>
                  </h3>
                </div>
                <div>
                  <img src={Carosol} alt="carosol" className="img-fluid mt-5" />
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  function ControlledCarousel() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //   setIndex(selectedIndex);
    // };

    return (
      // <Carousel activeIndex={index} onSelect={handleSelect}>
      <Row>
        <Col >
          <Card className="bg-dark text-white p-4 rounded-4 " style={{width:"30rem"}}>
            <Card.Img variant="top" src={cardImg1} />
            <Card.Body>
              <Card.Text>Alex Karev | Nov 18, 2022</Card.Text>
              <Card.Text className="fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Card.Text>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white p-4 rounded-4" style={{width:"30rem"}}>
            <Card.Img variant="top" src={cardImg1} />
            <Card.Body>
              <Card.Text>Alex Karev | Nov 18, 2022</Card.Text>
              <Card.Text className="fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Card.Text>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      // </Carousel>
    );
  }

  return (
    <>
      {/* Section 1 */}
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center text-center vh-100 ">
            <Col lg={8}>
              <h1 className="mainHeading">
                Enterprises Application <br />
                <span className="orangeText">Development</span>
              </h1>
              <p className="fs-6 my-4">
                We are 30+ professional software engineers with more than
                8+years of experience in delivering superior products.
              </p>
              <div className=" border-5 p-2 bg-grey rounded-4  my-5 mx-5">
                <InputGroup size="sm">
                  <Form.Control className=" border-5 rounded-4 py-2"></Form.Control>
                  <button className="rounded-3 border-0 serchButton text-warning ms-2">
                    Search
                  </button>
                </InputGroup>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <img src={Img} alt="" width={50} height={50} />
                <img src={Img1} alt="" width={50} height={50} />
                <img src={Img2} alt="" width={50} height={50} />
                <img src={Img3} alt="" width={50} height={50} />
                <img src={Img4} alt="" width={50} height={50} />
                <img src={Img5} alt="" width={50} height={50} />
                <img src={Img6} alt="" width={50} height={50} />
                <img src={Img7} alt="" width={50} height={50} />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* Section 2 */}
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center text-center ">
            <Col lg={6}>
              <h1 className="fw-bold">
                Top <span className="orangeText"> Software Development </span>
                Company in Bangalore
              </h1>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* Section 3 */}
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center text-center py-5 mb-5">
            <Col
              lg={7}
              className="d-flex justify-content-center align-items-center text-center"
            >
              <Row className="g-5">
                <Col className="d-flex align-items-center position-relative">
                  <div className="d-flex">
                    <h1>500+</h1>
                    <span className="mt-3 ms-3">Client</span>
                  </div>
                  <div className="position-absolute veticalLine"></div>
                </Col>
                <Col className="d-flex align-items-center position-relative">
                  <div className="position-absolute veticalLine"></div>
                  <div className="d-flex">
                    <h1>1000+</h1>
                    <span className="mt-3 ms-3">Projects</span>
                  </div>
                </Col>
              </Row>
              <Row className="g-5">
                <Col md>
                  <div className="d-flex">
                    <h1>20+</h1>{" "}
                    <span className="mt-3 ms-3">Professionals</span>
                  </div>
                </Col>
                <Col md>
                  <div className="d-flex">
                    <h1>25+</h1> <span className="mt-3 ms-3">Countries</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <Card className="border-0 rounded-4 carosolBg">
                <Card.Body>
                  <img
                    src={CardImg}
                    alt=""
                    className="rounded-4 border_color  "
                  />
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* Section 3*/}
      <Container fluid className="bg-dark text-white py-5 vh-100">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center  ">
              <Col lg={8} className="text-center my-5">
                <h1>Our Services</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to
                </p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center gap-5 align-items-center ">
              <div className="text-center">
                <img src={Webdev} alt="" width={75} height={75} />
                <p className="mt-4">Web Development</p>
              </div>
              <div className="text-center">
                <img src={software} alt="" width={75} height={75} />
                <p className="mt-4">Software Development</p>
              </div>
              <div className="text-center">
                <img src={MobDev} alt="" width={75} height={75} />
                <p className="mt-4">App Development</p>
              </div>
              <div className="text-center">
                <img src={uiux} alt="" width={75} height={75} />
                <p className="mt-4">UIUX Design</p>
              </div>
              <div className="text-center">
                <img src={digitalmarketing} alt="" width={75} height={75} />
                <p className="mt-4">Digital Marketing</p>
              </div>
              <div className="text-center ">
                <img src={contentmarketing} alt="" width={75} height={75} />
                <p className="mt-4">Content Marketing</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center my-5">
              <button className="rounded-5 btn_border bg-dark p-2 ">
                EXPLORE ALL <FaArrowRightLong className="ms-3" />
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Section 4 */}

      <Container fluid className="mt-5">
        <Row className="d-flex justify-content-center align-items-center ">
          <Col className="text-start mx-5">
            <h3 className="orangeText">The World’s Most Intuitive User Data</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <button className="p-2 knownBtn">Know More</button>
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={Tech} alt="Technology" />
          </Col>
        </Row>
      </Container>
      {/* Section 5 */}
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col className="d-flex justify-content-center">
            <img src={Tech} alt="Technology" />
          </Col>
          <Col className="text-start mx-5">
            <h3 className="orangeText">The World’s Most Intuitive User Data</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <button className="p-2 knownBtn">Know More</button>
          </Col>
        </Row>
      </Container>
      {/* Section 6 */}
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col className="text-start mx-5">
            <h3 className="orangeText">The World’s Most Intuitive User Data</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <button className="p-2 knownBtn">Know More</button>
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={Tech} alt="Technology" />
          </Col>
        </Row>
      </Container>
      {/* Section 7*/}
      <Container fluid>
        <Row className="py-5">
          <Col className="d-flex justify-content-center align-items-center my-5">
            <Col lg={9} className="text-center">
              <h1>
                A Diverse Team of <span className="orangeText">Passionate</span>{" "}
                Engineers Who Are Here To Provide You The
                <span className="orangeText"> Best Service</span>
              </h1>
            </Col>
          </Col>
        </Row>
        <Row className="py-5">
          {jasonData.map((item) => (
            <Col key={item.id} lg={4} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="my-3"
              />
              <h5>{item.title}</h5>
              <p className="text-secondary">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Section 8 */}
      <Container className="">
        <Row>
          <Col className="text-center mb-5">
            <h2>
              Browse our latest <span className="orangeText">Articles</span>
            </h2>
          </Col>
        </Row>

        {ControlledCarousel()}
      </Container>
      {/* Section 9 */}
      <Container className="my-5">
        <Row>
          <Col className="d-flex justify-content-center align-items-center vh-100">
            <Carousel>
              <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      {/* Section 10*/}
      <Container className="vh-100">
        <Row>
          <Col className="d-flex justify-content-center align-items-center text-center py-5 my-5">
            <Col lg={5} className="text-center">
              <h3>Trusted by Many clients</h3>
              <p>
                Powering the world s best teams, from next generation startups
                to established enterprises.
              </p>
              <a href="">
                Read Customer Stories <FaArrowRightLong />
              </a>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center text-center">
            <Col
              lg={9}
              className=" gap-5 d-flex justify-content-center align-items-center "
            >
              <img
                src={walmart}
                alt=""
                width={100}
                height={100}
                className="logoColor"
              />
              <img
                src={Deloite}
                alt=""
                width={150}
                height={60}
                className="logoColor"
              />
              <img
                src={okta}
                alt=""
                width={100}
                height={100}
                className="logoColor"
              />
              <img
                src={walmart}
                alt=""
                width={100}
                height={100}
                className="logoColor"
              />
              <img
                src={walmart}
                alt=""
                width={100}
                height={100}
                className="logoColor"
              />
            </Col>
          </Col>
        </Row>
      </Container>
      {/* Section 11 */}
      <Container className="vh-100">
        <Row>
          <Col className="d-flex justify-content-center align-items-center ">
            <Col lg={6} className="text-center">
              <h2 className="mb-3">
                Got A <span className="orangeText">Project?</span> Start Working
                with us Project? <span className="orangeText">Today!</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button className="rounded-2 p-2 btn btn-sm orange_button text-white mt-5">
                GET STARTED
              </button>
              <img src={contactUs} alt="" className="img-fluid" />
            </Col>
          </Col>
        </Row>
      </Container>

      {/*Footer Section  */}
      <Container className="my-5 rounded-5  p-5 footerBg">
        <Row>
          <Col lg={4}>
            <h1>Logo</h1>
            <div className="p-2 border bg-light rounded-4  my-5">
              <InputGroup size="sm">
                <Form.Control
                  className=" border-0 rounded-4 py-2"
                  placeholder="Work@gmail.com"
                ></Form.Control>
                <button className="rounded-3 border-0 serchButton text-warning ms-2">
                  Subscribe
                </button>
              </InputGroup>
            </div>
          </Col>
          <Col></Col>
          <Col lg={7} className="d-flex  gap-5">
            <div>
              <h6>Company</h6>
              <p>About Us</p>
              <p>Products</p>
              <p>Careers</p>
              <p>Blogs</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h6>Customer Services</h6>
              <p>Privacy py</p>
              <p>Terms of Services</p>
              <p>Careers</p>
              <p>Pricing</p>
              <p>FAQs</p>
            </div>
            <div>
              <h6>Reach Out Us</h6>
              <p>
                <CiLocationOn className="me-2" />
                Bangalore Office
              </p>
              <p className="opacityP">
                811, Techno Plaza, Indiranagar, Bengaluru, Karnataka 560038
              </p>
              <p>
                <IoCallOutline className="me-2" />
                +91 69855 54687 +91 69855 54687
              </p>
              <p className="text-white">
                <MdOutlineMailOutline className="me-2" />
                <a href="" className="text-white">
                  infotechnothinksupsolution@gmail.inc
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <hr className="py-1" />
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">&copy; 2023 Technothinksup Solution Inc</p>
              <div className="d-flex gap-3">
                <CiFacebook size={24} />
                <FaInstagram size={24} />
                <CiTwitter size={24} />
                <FaLinkedinIn size={24} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
