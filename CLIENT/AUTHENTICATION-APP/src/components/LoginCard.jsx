import { useState } from "react"

function RegisterCard() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = response.json()
        console.log(data);
        if(data.user) {
            alert("Login successful")
            window.location.href = '/home'
        }
        else {
            alert("Please check your username and password")
        }
    }

  return (
    <form onSubmit={registerUser}>
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