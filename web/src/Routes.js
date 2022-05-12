// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import ProfilesLayout from 'src/layouts/ProfilesLayout'
import GroupsLayout from 'src/layouts/GroupsLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/attendace" page={AttendancePage} name="attendance" />
      <Set wrap={[HomeLayout]}>
        <Set wrap={ProfilesLayout}>
          <Route path="/profiles/new" page={ProfileNewProfilePage} name="newProfile" />
          <Route path="/profiles/{id}/edit" page={ProfileEditProfilePage} name="editProfile" />
          <Route path="/profiles/{id}" page={ProfileProfilePage} name="profile" />
          <Route path="/profiles" page={ProfileProfilesPage} name="profiles" />
        </Set>
        <Set wrap={GroupsLayout}>
          <Route path="/groups/new" page={GroupNewGroupPage} name="newGroup" />
          <Route path="/groups/{id}/edit" page={GroupEditGroupPage} name="editGroup" />
          <Route path="/groups/{id}" page={GroupGroupPage} name="group" />
          <Route path="/groups" page={GroupGroupsPage} name="groups" />
        </Set>
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
