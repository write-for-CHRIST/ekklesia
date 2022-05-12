import Profile from 'src/components/Profile/Profile'

export const QUERY = gql`
  query FindProfileById($id: String!) {
    profile: profile(id: $id) {
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

export const Empty = () => <div>Profile not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ profile }) => {
  return <Profile profile={profile} />
}
