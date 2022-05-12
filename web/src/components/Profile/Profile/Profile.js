import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PROFILE_MUTATION = gql`
  mutation DeleteProfileMutation($id: String!) {
    deleteProfile(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Profile = ({ profile }) => {
  const [deleteProfile] = useMutation(DELETE_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('Profile deleted')
      navigate(routes.profiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete profile ' + id + '?')) {
      deleteProfile({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Profile {profile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{profile.id}</td>
            </tr>
            <tr>
              <th>Full name</th>
              <td>{profile.fullName}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{profile.gender}</td>
            </tr>
            <tr>
              <th>Old id</th>
              <td>{profile.oldId}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{profile.slug}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <th>Facebook id</th>
              <td>{profile.facebookId}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{profile.phoneNumber}</td>
            </tr>
            <tr>
              <th>Birthday</th>
              <td>{timeTag(profile.birthday)}</td>
            </tr>
            <tr>
              <th>Join date</th>
              <td>{timeTag(profile.joinDate)}</td>
            </tr>
            <tr>
              <th>Day of birth</th>
              <td>{profile.dayOfBirth}</td>
            </tr>
            <tr>
              <th>Month of birth</th>
              <td>{profile.monthOfBirth}</td>
            </tr>
            <tr>
              <th>Year of birth</th>
              <td>{profile.yearOfBirth}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(profile.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(profile.updatedAt)}</td>
            </tr>
            <tr>
              <th>Group id</th>
              <td>{profile.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProfile({ id: profile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(profile.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Profile
