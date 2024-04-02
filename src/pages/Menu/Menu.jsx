import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import entrante from "../../img/entrante.jpg";
import sarmale from "../../img/sarmale.jpg";
import tochitura from "../../img/tochitura.jpg";
import eclere from "../../img/eclere.jpg";
import bebidas from "../../img/bebidas.avif";

import "./Menu.scss";

export const Menu = () => {
  return (
    <>
      <Container fluid className="Container_Main_Menu ">
        <Row className="d-flex justify-content-center align-items-center text-center Menu_Design">
          <Row>
            <Col className="pb-5">
              <h4>Entrantes</h4>
            </Col>
          </Row>
          <Col>
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Croquetas</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>1.1 Croquetas con Jamon y Queso</p>
                </Row>
                <Row>
                  <p>1.2 Croquetas con Pollo</p>
                </Row>
                <Row>
                  <p>1.3 Croquetas con Bacalao</p>
                </Row>
                <Row>
                  <p>1.4 Croquetas Trufadas</p>
                </Row>
                <Row>
                  <p>1.5 Variado de Corquetas</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Patats</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>2.1 Patatas Fritas</p>
                </Row>
                <Row>
                  <p>2.2 Patatas Gajo</p>
                </Row>
                <Row>
                  <p>2.3 Patatas de la Casa</p>
                </Row>
                <Row>
                  <p>2.4 Patatas Mixtas</p>
                </Row>
                <Row>
                  <p>2.5 Patatas con Huevo, Bacon y Queso</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Para Compartir</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>3.1 Aperitivo Tradiciónal</p>
                </Row>
                <Row>
                  <p>3.2 Nachos</p>
                </Row>
                <Row>
                  <p>3.3 Ensalada de Boeuf</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-right" src={entrante} alt="entrante" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={12} className="d-flex justify-content-center align-items-center text-center title_padding">
            <h4>Primeros</h4>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center Menu_Design Column_Reverse">
          <Col xs={12} md={6}>
            <img className="img-left" src={sarmale} alt="entrante" />
          </Col>
          <Col>
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Menú</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Fabada</p>
                </Row>
                <Row>
                  <p>* Arroz con Ternera</p>
                </Row>
                <Row>
                  <p>* Pimiento Relleno</p>
                </Row>
                <Row>
                  <p>* Ensalada</p>
                </Row>
                <Row>
                  <p>* Humus</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Especiales</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Sarmale</p>
                </Row>
                <Row>
                  <p>* Lasaña</p>
                </Row>
                <Row>
                  <p>* Estofado de Ternera</p>
                </Row>
                <Row>
                  <p>* Filete Empanado</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center Menu_Design">
          <Row>
            <Col xs={12} md={12} className="pb-5">
              <h4>Segundos</h4>
            </Col>
          </Row>
          <Col>
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Menú</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Mici</p>
                </Row>
                <Row>
                  <p>* Tochitura (Carne de Cerdo)</p>
                </Row>
                <Row>
                  <p>* Pastrama (Carne de Overja)</p>
                </Row>
                <Row>
                  <p>* Costillas</p>
                </Row>
                <Row>
                  <p>* Chuletón de Ternera</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Especiales</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Barbacoa XXL</p>
                </Row>
                <Row>
                  <p>* Chuletón De Buey</p>
                </Row>
                <Row>
                  <p>* Pomana Porcului (Carne de Cerdo Variado)</p>
                </Row>
                <Row>
                  <p>* Hamburguesa Gourmet</p>
                </Row>
                <Row>
                  <p>* Pizza Italiana</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-right" src={tochitura} alt="entrante" />
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center title_padding">
          <Col xs={12} md={12}>
            <h4>Postres</h4>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center Menu_Design Column_Reverse">
          <Col xs={12} md={6}>
            <img className="img-left" src={eclere} alt="entrante" />
          </Col>
          <Col>
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Menú</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Tarta de Queso</p>
                </Row>
                <Row>
                  <p>* Profiteroles con Chocolate</p>
                </Row>
                <Row>
                  <p>* Frutas</p>
                </Row>
                <Row>
                  <p>* Helado</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Especiales</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Eclere</p>
                </Row>
                <Row>
                  <p>* Ensalada de Frutas</p>
                </Row>
                <Row>
                  <p>* Nueces de Chocolate Foundant</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center Menu_Design">
          <Row>
            <Col xs={12} md={12} className="pb-5">
              <h4>Bebidas</h4>
            </Col>
          </Row>
          <Col>
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Refrescos</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Cocacola (original, zero o light)</p>
                </Row>
                <Row>
                  <p>* Fanta (Naranja, Limón o Uva)</p>
                </Row>
                <Row>
                  <p>* Nestea (original, zero o maracya)</p>
                </Row>
                <Row>
                  <p>* Aquarius (Limón o Naranja)</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Vinos</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Tinto</p>
                </Row>
                <Row>
                  <p>* Verdejo</p>
                </Row>
                <Row>
                  <p>* Rosado</p>
                </Row>
                <Row>
                  <p>* Reserva</p>
                </Row>
                <Row>
                  <p>* Blanco</p>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5>Cerveza</h5>
              </Col>
              <Col xs={12} md={6} className="text-start">
                <Row>
                  <p>* Mahoo</p>
                </Row>
                <Row>
                  <p>* Coronita</p>
                </Row>
                <Row>
                  <p>* Bucegi</p>
                </Row>
                <Row>
                  <p>* Skol</p>
                </Row>
                <Row>
                  <p>* Timisoreana</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-right" src={bebidas} alt="entrante" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h1>Footer</h1>
      </Container>
    </>
  );
};
