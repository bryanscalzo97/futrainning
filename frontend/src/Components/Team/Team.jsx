import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Team({ team }) {
  console.log(team)
  return (
      <Card className='col-4' style={{ width: '18rem', margin: '1em', padding: '1em' }}>
        <Card.Body>
        <Card.Text>{team.lugar}</Card.Text>
        </Card.Body>
        {/* <div>
          {team.players.map((e) => (
            <Card style={{ width: '18rem' }} key={e.__id}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{e.name}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>)
          )}
        </div> */}
    </Card>
  )
}
export default Team
