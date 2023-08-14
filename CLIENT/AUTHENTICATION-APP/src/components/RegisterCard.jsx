import { useState } from "react"
import { useNavigate } from "react-router-dom"

function RegisterCard() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })

        const data = await response.json()
        console.log(data);

        if(data.status === "ok") {
            navigate('/login')
        }
    }

  return (
    <form onSubmit={registerUser}>
          <div className="form-group">
    <label>First Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter your first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter your last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input
      type="email"
      className="form-control"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input
      type="password"
      className="form-control"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

  )
}

export default RegisterCard