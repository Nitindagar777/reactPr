
const UserAdmin = ({islog, isadmin}) => {

//   const loggedIn = islog === "true";
//   const admin = isadmin === "true";

  return (
    <div>
      {/* {loggedIn && admin && <h1>Welcome Admin</h1>}
      {loggedIn && !admin && <h1>Welcome User</h1>} */}
      {islog && isadmin && <h1>Welcome Admin</h1>}
      {islog && !isadmin && <h1>Welcome User</h1>}
    </div>
  )
}

export default UserAdmin;
