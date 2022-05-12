import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ProfileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.profile?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="fullName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full name
        </Label>

        <TextField
          name="fullName"
          defaultValue={props.profile?.fullName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fullName" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>

        <TextField
          name="gender"
          defaultValue={props.profile?.gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="oldId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Old id
        </Label>

        <TextField
          name="oldId"
          defaultValue={props.profile?.oldId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="oldId" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.profile?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.profile?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="facebookId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Facebook id
        </Label>

        <TextField
          name="facebookId"
          defaultValue={props.profile?.facebookId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="facebookId" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.profile?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="birthday"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birthday
        </Label>

        <DatetimeLocalField
          name="birthday"
          defaultValue={formatDatetime(props.profile?.birthday)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="birthday" className="rw-field-error" />

        <Label
          name="joinDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Join date
        </Label>

        <DatetimeLocalField
          name="joinDate"
          defaultValue={formatDatetime(props.profile?.joinDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="joinDate" className="rw-field-error" />

        <Label
          name="dayOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Day of birth
        </Label>

        <NumberField
          name="dayOfBirth"
          defaultValue={props.profile?.dayOfBirth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dayOfBirth" className="rw-field-error" />

        <Label
          name="monthOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Month of birth
        </Label>

        <NumberField
          name="monthOfBirth"
          defaultValue={props.profile?.monthOfBirth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="monthOfBirth" className="rw-field-error" />

        <Label
          name="yearOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year of birth
        </Label>

        <NumberField
          name="yearOfBirth"
          defaultValue={props.profile?.yearOfBirth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="yearOfBirth" className="rw-field-error" />

        <Label
          name="groupId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Group id
        </Label>

        <TextField
          name="groupId"
          defaultValue={props.profile?.groupId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="groupId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProfileForm
