import { useEffect } from "react"
import jwt from 'jsonwebtoken'
import {useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const populateQuote = async () => {
        const req = await fetch('http://localhost:8080/api/quote', {
            headers:{
                'x-access-token' : localStorage.getItem('token')
            }
        })

        const data = req.json()
        console.log(data);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem(token)
                navigate('/login')
            }
            else {
                populateQuote()
            }
        }
    }, [])
  return (
    <div>Helllo</div>
  )
}

export default HomePage