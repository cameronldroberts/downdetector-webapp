import React from 'react'

// import  from 'react-bootstrap/Card'
// import {Card, CardGroup } from 'react-bootstrap'
import { Card , Image } from 'semantic-ui-react'

// const Twitter = require('../resources/Twitter.svg')

const Statuses = ({statuses}) => {
    return (
        <div>
            <center><h1>Services Status</h1></center>
            <Card.Group className="card-group">
            {statuses.map((status) => (

            <Card>
            <Image src={require('../resources/'+status.name+'.svg')} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{status.name}</Card.Header>
                <Card.Description>
                { status.status.description}
                </Card.Description>
                <Card.Description>
                { status.status.indicator}
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