import React from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const TeamCard = ({ name, linkLink, linkGit, image }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={image} alt='foto' style={{ borderRadius: '100%', height: '9rem', width: '9rem' }} />
      <p style={{ marginTop: '1rem' }}>{name}</p>
      <p style={{ color: 'blue' }}>Fullstack Developer</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href={linkLink}><AiFillLinkedin /></a>
        <a href={linkGit}><AiFillGithub /></a>
      </div>
    </div>
  )
}

export default TeamCard