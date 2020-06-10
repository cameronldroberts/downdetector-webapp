import React from 'react'

const Statuses = ({statuses}) => {
    return (
        <div>
            <center><h1>Service Status</h1></center>
            {statuses.map((status) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{status.name}</h5>
                        {/* <h6 class="card-subtitle mb-2 text-muted">{status.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p> */}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Statuses