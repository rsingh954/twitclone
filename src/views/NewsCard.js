import React from 'react'
import Card from 'react-bootstrap/Card'
const NewsCard = ({item}) => {
  return (
    <Card style={{ width: "100%" }}>
    <Card.Header as = 'h3' style = {{textAlign: "center"}}>{item.title}</Card.Header>
    <Card.Img style={{ width: "18rem" }} variant = 'top' src = {item.urlToImage} alt = "img" />
      <Card.Body>
        <Card.Title>{item.description}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.source[1]}</Card.Subtitle>
        <Card.Text>
        {item.content}
        </Card.Text>
        <Card.Link href="#">{item.url}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default NewsCard
