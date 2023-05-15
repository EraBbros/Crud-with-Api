import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const EditUser = () => {
    const { userid } = useParams();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userid}`
        );
        setId(response.data.id);
        setName(response.data.name);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.log(error);
      }
    };

    getUsersData();
  }, [userid]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = { id, name, username, email, phone };

    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userid}`,
        JSON.stringify(userdata),
        {
          headers: { "content-type": "application/json" },
        }
      );
      alert("Saved!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <div>
            <div className="row mt-5">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title mt-3 ">
                                <h2>Edit user</h2>
                            </div>
                            <div className="card-cody">
                                <div className="row">

                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled className="form-control"></input>
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

