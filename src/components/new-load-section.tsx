import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
type NewLoadProps = {
  isOpen: boolean;
  onClose?: () => void;
};
export const NewLoad = ({ isOpen, onClose }: NewLoadProps) => {
  return (
    isOpen && (
      <div
        className="form-container new-popup p-3 mb-3"
        id="newPopup"
        style={{ backgroundColor: "#E9F3FB" }}
      >
        <Form>
          <Container fluid>
            <Row>
              <h4 className="text-primary">Create New Load</h4>
            </Row>
            <Row className="mb-3">
              <Col className="align-self-end">
                <div className="flex-item">
                  <Form.Group className="mb-2">
                    <Form.Label>Status</Form.Label>
                    <Form.Select size="sm">
                      {[
                        "All",
                        "New",
                        "Canceled",
                        "TONU",
                        "Dispatched",
                        "En-Route",
                        "Picked-Up",
                        "Delivered",
                        "Closed",
                      ].map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Billing Status</Form.Label>
                    <Form.Select size="sm">
                      {[
                        "Pending",
                        "BOL received",
                        "Invoiced",
                        "Sent to Factoring",
                        "Funded",
                        "Paid",
                      ].map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Dispatcher</Form.Label>
                    <Form.Select size="sm">
                      {["AK Yadav", "ACP Pradyuman", "Daya", "Abhijeet"].map(
                        (item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Form.Group>
                </div>
              </Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>

              <Col>
                <div className="flex-item">
                  <h6 className="">Notes</h6>
                  <Form.Group className="mb-2">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      size="sm"
                      placeholder=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Attachments</Form.Label>
                    <Form.Control type="file" size="sm" placeholder="" />
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
              <Col className="align-self-end">
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
                      onClick={() => onClose()}
                    >
                      Close
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    )
  );
};
