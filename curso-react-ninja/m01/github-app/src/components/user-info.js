import React, { PropTypes } from 'react'

const UserInfo = ({ userInfo }) => (
  <div className='user-info'>
    <img src={userInfo.photo} />
    <h1 className='username'><a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a></h1>
    <ul className='repos-info'>
      <li>Repositories: {userInfo.repos}</li>
      <li>Followers: {userInfo.followers}</li>
      <li>Following: {userInfo.following}</li>
    </ul>
  </div>
)

UserInfo.prototypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
