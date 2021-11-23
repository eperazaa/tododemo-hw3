import React from 'react'
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'



function UserEntry (userentry) {
  
  return (
    <Card>
        <Card.Body>
            <Card.Title><Link href={`/users/${userentry.id}`}>{userentry.username}</Link>
            </Card.Title>
    </Card.Body>
    </Card>
 )
}

export default React.memo(UserEntry);