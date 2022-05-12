import { Link, routes } from '@redwoodjs/router'

import Profiles from 'src/components/Profile/Profiles'

export const QUERY = gql`
  query FindProfiles {
    profiles {
      id
      fullName
      gender
      oldId
      slug
      email
      facebookId
      phoneNumber
      birthday
      joinDate
      dayOfBirth
      monthOfBirth
      yearOfBirth
      createdAt
      updatedAt
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No profiles yet. '}
      <Link to={routes.newProfile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ profiles }) => {
  return <Profiles profiles={profiles} />
}
