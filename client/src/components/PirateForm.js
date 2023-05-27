import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PirateForm = ({model,setModel}) => {

    const [err,setErr]=useState([])

    const [name, setName] = useState("");
    const [img, setImg] = useState("")
    const [treasureChest, setTreasureChest] = useState(Number);
    const [phrase, setPhrase] = useState("")
    const [position, setPosition] = useState("captain")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const navigate=useNavigate()
    const onFormSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirates",{
            name:name,
            imageUrl:img,
            treasureChest:treasureChest,
            phrase:phrase,
            position:position,
            pegLeg:pegLeg,
            eyePatch:eyePatch,
            hookHand:hookHand
        })
        .then((res)=>{
            console.log(res)
            setModel([...model,res.data.list])
            navigate("/pirates")
        })
        .catch((err)=>{
            console.log(err)
            setErr(err.response.data.errors)
        })
    }
    return (
        <div className=" container-sm  ">
             <div className="d-flex justify-content-around align-items-center  border border-4  border-black" style={{ backgroundColor: "brown", borderColor: "brown" }}>
                <h1>Add Pirate</h1>
                <button type="button" className="btn btn-primary" >Crew Bord</button>
            </div>
            <div style={{ backgroundColor: "rgb(255, 147, 0)" }} className=" container p-2">
            <form onSubmit={onFormSubmit} className="forms mb-5 w-50 m-4">
                <div className="row mb-3 ">
                    <label style={{fontWeight:"bold"}}>Pirate Name</label>
                    <input className="form-control text-bg-light p-2 " value={name} onChange={(e) => setName(e.target.value)} type="text" ></input>
                    {Object.keys(err).length>0 && err.name? <label style={{color:"red"}}>{err.name.message}</label>:""}

                </div>
                <div className="row mb-3">
                    <label style={{fontWeight:"bold"}} >Image url</label>
                    <input value={img} onChange={(e) => setImg(e.target.value)} className="form-control text-bg-light p-2 " type="text" ></input>
                    {Object.keys(err).length>0 && err.imageUrl ? <label style={{color:"red"}}>{err.imageUrl.message}</label>:""}
                </div>
                <div className="row mb-3 ">
                    <label style={{fontWeight:"bold"}} >Treasure Chest</label>
                    <input className="form-control text-bg-light p-2 " value={treasureChest} onChange={(e) => setTreasureChest(e.target.value)} type="number" ></input>
                    {Object.keys(err).length>0 && err.treasureChest !== undefined ? <label style={{color:"red"}}>{err.treasureChest.message}</label>:""}

                </div>
                <div className="row mb-3 ">
                    <label style={{fontWeight:"bold"}} > Pirate catch phrase</label>
                    <input className="form-control text-bg-light p-2 " value={phrase} onChange={(e) => setPhrase(e.target.value)} type="text" ></input>
                    {Object.keys(err).length>0 && err.phrase ? <label style={{color:"red"}}>{err.phrase.message}</label>:""}

                </div>
                <div className="row mb-3">
                    <label style={{fontWeight:"bold"}} >Crew Position</label>
                    <select onChange={(e) => setPosition(e.target.value)} value={position} className="form-select" aria-label="Default select example">
                        <option value="captain">Captain</option>
                        <option value="firstMate">First Mate</option>
                        <option value="quarterMaster">Quarter Master</option>
                        <option value="boatSwain">Boat Swain</option>
                        <option value="powderMonkey">Powder Monkey</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} ></input>
                    <label className="form-check-label" style={{fontWeight:"bold"}} >pegLeg</label>
                </div>
                <div className=" form-check">
                    <label className="form-check-label" style={{fontWeight:"bold"}} >Eye Patch</label>
                    <input className="form-check-input" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} type="checkbox" value="" ></input>
                </div>
                <div className=" form-check">
                    <label className="form-check-label" style={{fontWeight:"bold"}} > Hook Hand</label>
                    <input className="form-check-input" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} type="checkbox" value="" ></input>
                </div>
                <button  className="btn btn-lg btn-primary col-3  gap-2 " >Add Pirate</button>
            </form>
            </div>
        </div>
    )
}

export default PirateForm;