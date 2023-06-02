import React, {useState} from 'react'
import Button from '../components/Button';
function FormRegister() {
  const [users, setUsers] = useState(
    []
  );
  const [form,setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    state: ''
  })
  function onChangeForm(e) {
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  function onSubmit(e) {
    e.preventDefault();
    setUsers(prevState => {
      const userItem ={...form}
      console.log(userItem)
      return [...prevState, userItem]
    });
    
  }
  return (
    <div className = 'container'>
      <h4>Form Register</h4>
      <form onSubmit = {onSubmit}>
        <div className="mb-3">
          <label>First name :</label>
          <input className="form-control" placeholder = "Enter firstname" type="text" name="firstName" value={form.firstName} onChange={onChangeForm} />
        </div>
        <div className="mb-3">
          <label>Last name :</label>
          <input className="form-control" placeholder= "Enter lastname" type="text" name="lastName" value={form.lastName} onChange={onChangeForm} />
        </div>
        <div className="mb-3">
          <label>Email :</label>
          <input className="form-control" placeholder= "Enter mail" type="text" name="email" value={form.email} onChange={onChangeForm} />
        </div>

        <div className="mb-3">
          <label>Gender :</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value = "true" onChange={onChangeForm} />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value = "false" onChange={onChangeForm} />
            <label className="form-check-label" htmlFor="female">
              Female
          </label>
        </div>
        <div className="mb-3"></div>
        <label>State :</label>
          <select className="form-select" name="state" onChange={onChangeForm} value={form.state}>
            <option defaultValue>Choose ...</option>
            <option value="HCM">HCM</option>
            <option value="HN">HN</option>
          </select>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form> 
       
      <br />
      <h4>List User</h4>  
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (<>
            {users.map (user=> {
            return (
              <>
                <tr key = {user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender ? (<>Male</>): (<>Female</>)}</td>
                  <td>{user.state}</td>
                </tr> 
              </> 
            )
          })}
          </>):(<div>No Data</div>)
          }
          
          
        </tbody>
      </table>
      
    </div>
  )
}

export default FormRegister