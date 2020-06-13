// import React from 'react'

// // import  from 'react-bootstrap/Card'
// // import {Card, CardGroup } from 'react-bootstrap'
// import { Card , Image, Icon } from 'semantic-ui-react'
// const GitHub = require('../resources/GitHub.svg');
// const Twitter = require('../resources/Twitter.svg')

// const Statuses = ({statuses}) => {
//     return (
//         <div>
//             <center><h1>Service Status</h1></center>
//             <Card.Group className="card-group"> 
//             {statuses.map((status) => (

//             <Card>
//             <Image src={Twitter} wrapped ui={false} />
//             <Card.Content>
//                 <Card.Header>{status.name}</Card.Header>
//                 <Card.Description>
//                 { status.status.description}
//                 </Card.Description>
//                 <Card.Description>
//                 { status.status.indicator}
//                 </Card.Description>
                
//             </Card.Content>
//             <Card.Content extra>
//                 <a>
//                 <Icon name='question icon' />
//                 More information
//                 </a>
//             </Card.Content>
//             </Card>
//             ))}
//             </Card.Group>
//         </div>
//     )
// };

// export default Statuses
import React from 'react'

// import  from 'react-bootstrap/Card'
// import {Card, CardGroup } from 'react-bootstrap'
import { Card , Image, Icon } from 'semantic-ui-react'
const GitHub = require('../resources/GitHub.svg');
const Twitter = require('../resources/Twitter.svg')

const Statuses = ({statuses}) => {
    return (
        <div>
            <center><h1>Service Status</h1></center>

            {statuses.map((status) => (

            <Card>
            <Image src={Twitter} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{status.name}</Card.Header>
                <Card.Description>
                { status.status.description}
                </Card.Description>
                <Card.Description>
                { status.status.indicator}
                </Card.Description>
                
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='question icon' />
                More information
                </a>
            </Card.Content>
            </Card>
            ))}
        </div>
    )
};

export default Statuses