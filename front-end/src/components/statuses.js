import React from 'react'


import { Card, Image } from 'semantic-ui-react'
import { Navbar } from 'react-bootstrap';
import favicon from '../resources/favicon.ico'
const Statuses = ({ statuses }) => {
    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={favicon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
            DownDetector
            </Navbar.Brand>
            </Navbar>
            <Card.Group className="card-group">
                {statuses.map((status) => (

                    <Card>
                        <Image src={require('../resources/' + status.name + '.svg')} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{status.name}</Card.Header>
                            <Card.Description>
                                {status.status.description}
                            </Card.Description>
                            <Card.Description>
                                {status.status.indicator}
                            </Card.Description>

                        </Card.Content>
                        {/* <Card.Content extra>
                <a>
                <Icon name='user' />
                22 Friends
                </a>
            </Card.Content> */}
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
};

export default Statuses