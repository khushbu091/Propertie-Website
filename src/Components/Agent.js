import React from "react";
import "../Styles-css/Agent.css";
import team1 from "../Image/team-1.jpg";
import team2 from "../Image/team-2.jpg";
import team3 from "../Image/team-3.jpg";
import team4 from "../Image/team-4.jpg";
const Agent = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      img: team1, // Replace with actual image URL
      email: "abc@domain.com",
      phone: "(9009) 899 889",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    },
    {
      id: 2,
      name: "John Smith",
      img: team2, // Replace with actual image URL
      email: "abc@domain.com",
      phone: "(9009) 899 889",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    },
    {
      id: 3,
      name: "John Smith",
      img: team3, // Replace with actual image URL
      email: "abc@domain.com",
      phone: "(9009) 899 889",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    },
    {
        id: 4,
        name: "John Smith",
        img: team4, // Replace with actual image URL
        email: "abc@domain.com",
        phone: "(9009) 899 889",
        description:
          "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
      },
  ];

  return (
    <div className="container">
    <div className="team-list">
      {teamMembers.map((member) => (
        <div className="team-member" key={member.id}>
          <img src={member.img} alt={member.name} className="team-img" />
          <div className="team-details">
            <h3>{member.name}</h3>
            <p className="team-description">{member.description}</p>
          </div>
          <div className="team-contact">
            <p>
              📧 <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
            <p>📞 {member.phone}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Agent;
