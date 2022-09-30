import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const TeamGrid = () => {
    const team = {
        "members": [
            {
                "name": "Németh Tamás",
                "email": "swtjxf@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/Nemeth-Tamas"
                    }
                ]
            },
            {
                "name": "Riszterer István",
                "email": "gwlxts@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": ""
                    }
                ]
            },
            {
                "name": "Maár Dávid",
                "email": "ssqod1@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/Exclusivefrog28"
                    }
                ]
            },
        ]
    }

    return (
        <div>
            <Container>
                <Row>
                    {team.members.map((member) => (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Email: {member.email}</Card.Subtitle>
                                    {member.links.map((link) => (
                                        <Card.Link href={link.url}>{link.name}</Card.Link>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamGrid;