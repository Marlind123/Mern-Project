import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const List = (props) => {
    const { model, setModel } = props
    const navigate=useNavigate()
    console.log(model)
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                const newSortedArray = res.data.list.sort((a, b) => {
                    const name1 = a.name.toLowerCase();
                    const name2 = b.name.toLowerCase();
                    if (name1 < name2) return -1;
                    if (name1 > name2) return 1;
                    return 0;
                  });
                  setModel(newSortedArray);
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])
    console.log(model)
    const onDeleteClick = (id) => {
 
        const newArray=model.filter((item)=> item._id !==id)
        setModel(newArray)
        axios.delete("http://localhost:8000/api/pirates/"+id)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    const onDetail = (id) => {
        navigate("/pirates/"+id)
    }   
    const onNavigateClick=()=>{
        navigate("/pirates/new")
    }

    return (

        <div className=" container-sm  " >
            <div className="d-flex justify-content-around align-items-center  border border-4  border-black" style={{ backgroundColor: "brown", borderColor: "brown" }}>
                <h1>Pirate Crew</h1>
                <button type="button" onClick={() => onNavigateClick()} className="btn btn-primary" >Add pirate</button>
            </div>
            <div className="p-2  "  style={{ backgroundColor: "rgb(255, 147, 0)" }}>
            {
                    model.length > 0 && model.map((item, id) => (
                        <div key={id} className="card m-2 w-50 " >
                            <img src={item.imageUrl} className="card-img-top w-50" height="180px" style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"10px"}}  alt="..."></img>
                            <div className="card-body " style={{ textAlign: "center" }}>
                                <h5 className="card-title">{item.name}</h5>
                                <button onClick={() => onDetail(item._id)} style={{ marginRight: "10px" }} className="btn btn-success">View profile</button>
                                <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(item._id)}>Delete User</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default List;