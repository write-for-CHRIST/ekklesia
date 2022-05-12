import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ProfileForm from 'src/components/Profile/ProfileForm'

export const QUERY = gql`
  query EditProfileById($id: String!) {
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
const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfileMutation($id: String!, $input: UpdateProfileInput!) {
    updateProfile(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ profile }) => {
  const [updateProfile, { loading, error }] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Profile updated')
        navigate(routes.profiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProfile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Profile {profile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProfileForm
          profile={profile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
