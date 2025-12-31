import React, { useState } from "react";
import "./UserCard.css";

const UserCard = () => {
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [img, setimg] = useState("");
  const [dec, setdec] = useState("");

  const [alluser, setalluser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldUsers = [...alluser];

    oldUsers.push({ name, roll, img, dec });

    setalluser(oldUsers);
    setname("");
    setroll("");
    setdec("");
    setimg("");
  };

  const handleDelete = (idx) =>{
    const copyuser = [...alluser]
    console.log(copyuser);
    copyuser.splice(idx,1)
    setalluser(copyuser)
    
    
  }
  return (
    <div>
      <h1>user Form</h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="Image"
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
        <button className="submit" type="submit">
          Submit
        </button>
      </form>

      <h2>card</h2>
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
