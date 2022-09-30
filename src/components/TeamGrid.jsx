import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

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
            }
        ]
    }

    return (
        <div>
            {team.members.map((member) => (
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Email: {member.email}</Card.Subtitle>
                    {member.links.map((link) => (
                        <Card.Link href={link.url}>{link.name}</Card.Link>
                    ))}
                </Card.Body>
              </Card>
            ))}
        </div>
    );
};

export default TeamGrid;