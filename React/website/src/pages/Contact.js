import { useEffect, useState } from "react"

const Contact = () => {

    const [formData, setFormData] = useState({
        username: "",
        message: ""
    })

    useEffect(()=>{
        console.log(formData);
    },[formData])

    return (
        <div className="form">

            <div>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter Your Name" id="username" onChange={(e) => setFormData({ ...formData, username: e.target.value })}></input>

            </div>

            <div>

                <label htmlFor="massage">Massge</label>
                <input type="text" placeholder="Enter Your Massge" id="message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></input>

            </div>

            <button onClick={() => {
                console.log("Submit!");
                console.log(formData);
            }}>Subnit</button>

        </div>
    )
}

export default Contact