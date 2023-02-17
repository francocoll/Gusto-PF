import React from 'react'
import TeamCard from './TeamCard'
import franco from '../../assets/franco.png'
import rocio from '../../assets/rocio.jpg'
const Team = () => {

    const teamInfo = [
        {
            name: 'Franco Coll',
            role: 'Fullstack Developer',
            linkedin: 'https://www.linkedin.com/in/franco-coll/',
            github: 'https://www.github.com/francocoll',
            foto: franco
        },
        {
            name: 'Tobias Azcurra',
            role: 'Fullstack Developer',
            linkedin: 'https://www.linkedin.com/in/franco-coll/',
            github: 'https://www.github.com/francocoll',
            foto: rocio
        },
        {
            name: 'Rocio Turturro',
            role: 'Fullstack Developer',
            linkedin: 'https://www.linkedin.com/in/franco-coll/',
            github: 'https://www.github.com/francocoll',
        },
        {
            name: 'Emiliano Re',
            role: 'Fullstack Developer',
            linkedin: 'https://www.linkedin.com/in/franco-coll/',
            github: 'https://www.github.com/francocoll',
        }
    ]

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {teamInfo.map((member, index) => {
                return (
                    <TeamCard
                        key={index}
                        name={member.name}
                        image={member.foto}
                        role={member.role}
                        linkedin={member.linkedin}
                        github={member.github}
                    />
                )
            })
            }
        </div>
    )
}

export default Team