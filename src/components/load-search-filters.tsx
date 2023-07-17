import { Button, Col, Form, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
type loadSearchProps = {
  open: boolean;
  toggle: () => void;
};
export const LoadSearch = ({ open, toggle }: loadSearchProps) => {
  return (
    <>
      {open && (
        <div
          className="form-container new-popup p-3"
          id="newPopup"
          style={{ backgroundColor: "#E9F3FB" }}
        >
          <Form className="d-flex small align-items-start gap-3">
            <div className="flex-item">
              <h4 className="text-primary">Search Filters</h4>
            </div>
            <div className="flex-item">
              <h6 className="">Pick Up</h6>
              <Form.Group className="mb-2">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" size="sm" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" size="sm" placeholder="" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>State</Form.Label>
                    <Form.Select size="sm">
                      <option value="select">Select State</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="flex-item">
              <h6 className="">Delivery</h6>
              <Form.Group className="mb-2">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" size="sm" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" size="sm" placeholder="" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>State</Form.Label>
                    <Form.Select size="sm">
                      <option value="select">Select State</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="flex-item">
              <h6 className="">Broker</h6>
              <Form.Group className="mb-2">
                <Form.Label>Broker</Form.Label>
                <Form.Select size="sm">
                  <option value="select">Select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>PO#</Form.Label>
                <Form.Control type="text" size="sm" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="text" size="sm" placeholder="" />
              </Form.Group>
            </div>
            <div className="flex-item">
              <h6 className="">Driver</h6>
              <Form.Group className="mb-2">
                <Form.Label>Driver</Form.Label>
                <Form.Select size="sm">
                  <option value="select">Select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Truck</Form.Label>
                <Form.Select size="sm">
                  <option value="select">Select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Trailer</Form.Label>
                <Form.Select size="sm">
                  <option value="select">Select</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="flex-item">
              <h6 className="">Notes</h6>
              <Form.Group className="mb-2">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" size="sm" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label></Form.Label>
                <div className="d-flex gap-3">
                  <Button variant="outline-primary" size="sm">
                    <Check size={20} />
                    Create Load
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => toggle()}
                  >
                    Close
                  </Button>
                </div>
              </Form.Group>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};
