import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Profile/ProfilesCell'

const DELETE_PROFILE_MUTATION = gql`
  mutation DeleteProfileMutation($id: String!) {
    deleteProfile(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const ProfilesList = ({ profiles }) => {
  const [deleteProfile] = useMutation(DELETE_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('Profile deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete profile ' + id + '?')) {
      deleteProfile({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full name</th>
            <th>Gender</th>
            <th>Old id</th>
            <th>Slug</th>
            <th>Email</th>
            <th>Facebook id</th>
            <th>Phone number</th>
            <th>Birthday</th>
            <th>Join date</th>
            <th>Day of birth</th>
            <th>Month of birth</th>
            <th>Year of birth</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{truncate(profile.id)}</td>
              <td>{truncate(profile.fullName)}</td>
              <td>{truncate(profile.gender)}</td>
              <td>{truncate(profile.oldId)}</td>
              <td>{truncate(profile.slug)}</td>
              <td>{truncate(profile.email)}</td>
              <td>{truncate(profile.facebookId)}</td>
              <td>{truncate(profile.phoneNumber)}</td>
              <td>{timeTag(profile.birthday)}</td>
              <td>{timeTag(profile.joinDate)}</td>
              <td>{truncate(profile.dayOfBirth)}</td>
              <td>{truncate(profile.monthOfBirth)}</td>
              <td>{truncate(profile.yearOfBirth)}</td>
              <td>{timeTag(profile.createdAt)}</td>
              <td>{timeTag(profile.updatedAt)}</td>
              <td>{truncate(profile.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.profile({ id: profile.id })}
                    title={'Show profile ' + profile.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProfile({ id: profile.id })}
                    title={'Edit profile ' + profile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete profile ' + profile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(profile.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfilesList
