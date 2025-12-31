import React, { useState } from "react";
import "./UserCard.css";

const UserCard = () => {
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [img, setimg] = useState("");
  const [dec, setdec] = useState("");


  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  const [alluser, setalluser] = useState(localData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldUsers = [...alluser];

    oldUsers.push({ name, roll, img, dec });

    setalluser(oldUsers);
    localStorage.setItem('all-users',JSON.stringify(oldUsers))

    setname("");
    setroll("");
    setdec("");
    setimg("");
  };

  const handleDelete = (idx) =>{
    const copyuser = [...alluser]
    const conf = confirm('Are you really want to delete this element?')
    if(conf){

     copyuser.splice(idx,1)
    }else{
      alert('element Not Deleted')
    }
    setalluser(copyuser)
    localStorage.setItem('all-users',JSON.stringify(copyuser))
    
    
  }
  return (
    <div>
      <h1>user Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Image Url"
          value={img}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Role"
          value={roll}
          onChange={(e) => {
            setroll(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Description"
          value={dec}
          onChange={(e) => {
            setdec(e.target.value);
          }}
        />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>

      <h2>Card</h2>
      <div className="user-card">
        {alluser.map((elem, idx) => {
          return (
            <div className="card" key={idx}>
              <img
                src={elem.img || "https://plus.unsplash.com/premium_photo-1666739087569-eec71efac750?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBiZ3xlbnwwfHwwfHx8MA%3D%3D"}
                alt={elem.name || "user"}
              />
              <div className="detail">
                <p>Name : {elem.name}</p>
                <p>Roll : {elem.roll}</p>
                <p>Description : {elem.dec}</p>
                <button className="submit" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;
