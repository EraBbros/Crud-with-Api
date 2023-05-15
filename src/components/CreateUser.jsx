import axios from "axios"
import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const CreateUser = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("") 

    const navigate = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        const userdata = {id, name, username, email, phone}

        const getUsersData = async () => {
            try {
              const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                userdata, 
                { headers: { "Content-Type": "application/json" } }
              );
              alert("Saved!");
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          };
         getUsersData();
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title mt-3 ">
                                <h2>Create a new User</h2>
                            </div>
                            <div className="card-cody">
                                <div className="row">

                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disableds" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
                                             value={name}
                                             onChange={e=> setName(e.target.value)}
                                             className="form-control"
                                             ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>UserName</label>
                                            <input 
                                            value={username} 
                                            onChange={e=> setUsername(e.target.value)}
                                            className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                            value={email}
                                            onChange={e=> setEmail(e.target.value)}
                                            className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input 
                                            value={phone} 
                                            onChange={e=> setPhone(e.target.value)}
                                            className="form-control"></input>
                                        </div>
                                    </div>  

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>                                    

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}