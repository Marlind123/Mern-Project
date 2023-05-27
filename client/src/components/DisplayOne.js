import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom"

const DisplayOne=({model,setModel})=>{
    const [pirate,setPirate]=useState([])
    let {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/"+id)
        .then((res)=>{
            setPirate(res.data.list)
        })

    },[])

    const onchangeClick=(action,cng)=>{
        console.log(action,cng)
        const Data={}
        if(action==="pegLeg"){
            Data.pegLeg=!cng
        }
        else if(action==="eyePatch"){
            Data.eyePatch=!cng
        }
        else{
            Data.hookHand=!cng
        }
        axios.put("http://localhost:8000/api/pirates/"+id,Data)
        .then((res)=>{
            setPirate(res.data.list)
            console.log(res)})
        .catch((err)=>console.log(err))    }

    return(
        <div className="container-sm ">
              <div className="d-flex justify-content-around align-items-center  border border-4  border-black" style={{ backgroundColor: "brown", borderColor: "brown" }}>
                <h1>{pirate.name}</h1>
                <button type="button" className="btn btn-primary" onClick={()=>navigate("/pirates")}>Go Home</button>
            </div >
            <div  style={{ backgroundColor: "rgb(255, 147, 0)" }} className=" container d-flex justify-content-around">
                <div>
                    <img className="m-2" src={pirate.imageUrl} width="250px" height="200px"></img>
                    <h1>{pirate.phrase}</h1>
                </div>
                <div className="bg-white border border-2 border-black m-2 w-50" style={{ backgroundColor: "white",alignItems:"center",textAlign:"center" }}>
                    <h1>About</h1>
                    <p>Position: {pirate.position}</p>
                    <p>Treasures: {pirate.treasureChest}</p>
                    <p>PegLeg: {pirate.pegLeg ? "yes":"no"} <button onClick={()=>onchangeClick("pegLeg",pirate.pegLeg)} className={pirate.pegLeg ? "  btn btn-danger":"btn btn-success"} type="button">{pirate.pegLeg ? "no":"yes"}</button></p>
                    <p>PegLeg: {pirate.eyePatch ? "yes":"no"} <button onClick={()=>onchangeClick("eyePatch",pirate.eyePatch)} className={pirate.eyePatch ? "btn btn-danger":" btn btn-success"} type="button">{pirate.eyePatch ? "no":"yes"}</button></p>
                    <p>PegLeg: {pirate.hookHand ? "yes":"no"} <button onClick={()=>onchangeClick("hookHand",pirate.hookHand)} className={pirate.hookHand ? "btn btn-danger":"btn btn-success"} type="button">{pirate.hookHand ? "no":"yes"}</button></p>

                </div>

            </div>
            
        </div>
    )
}

export default DisplayOne;