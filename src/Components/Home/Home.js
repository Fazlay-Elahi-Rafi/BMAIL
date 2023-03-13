import "./Home.css";
import subImg from "../../Assets/Rectangle-596.png";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const sub = [
    {
      name: "Subject",
      id: 1,
      img: subImg,
      details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      date: "19 Feb",
    },
  ];

  return (
    <div className="home-page-main">
      <Container>
        <div className="title">
          <div>
            <p className="title-text">UPDATE YOURSELF WITH THE LATEST NEWS</p>
            <p className="title-text">AI NEWS</p>
          </div>
        </div>
        <div>
          <Row>
            {sub.map((s) => (
              <Col xs={12} md={6} lg={3}>
                <div key={s.id} className="card">
                  <img src={s.img} alt="" className="subImg" />
                  <div className="text-sec">
                    <p className="subName">{s.name}</p>
                    <p className="subDetails">{s.details}</p>
                    <p className="date">{s.date}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
