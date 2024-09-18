import { useState ,useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"



function Mynotes (){


    const [search , setsearch ]=useState("")
    const handleSearch =(Event)=>{
        setsearch(Event.target.value)
    }

    const [notes ,setNotes]=useState([])
    const handleGetNotes =()=>{
        axios.get("http://localhost:3000/Get").then((response)=>{
            setNotes(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        handleGetNotes()
    })



    return <div className=" bg-[url('https://img.freepik.com/free-vector/blank-white-notepaper-design-vector_53876-161340.jpg?t=st=1725531471~exp=1725535071~hmac=e5af884a8291e893a5513bc592a1d2f3610ecb1b1aae463aaad9e378890386c2&w=1800')] h-[1000px]">
        <div className="flex justify-between pt-[20px] border-b-[2px]  pb-[7px]  border-[#E40725]  "  > 

            <h1 className="text-[40px]  ml-[200px]   mt-[10px]  text-[#E40725] font-bold   " > N<span className="text-[#210E91]" >otes</span>  </h1>
            <input onChange={handleSearch}  className="h-[40px] mr-[100px] w-[300px] mt-[22px] p-[5px] rounded-[4px] border-black border-[2px] placeholder:text-[#E40725] "  type="search" placeholder="Search" />
            {/* <button  className=" mt-[20px] mr-[50px]  text-white  rounded-[6px]  h-[40px] w-[120px] bg-[red]" >My Notes</button> */}

        </div>
        <div className=" grid grid-cols-[300px_300px_300px_300px] " >

       
        {
            notes.filter((item) => {
                return search.toLocaleLowerCase() == ""? item
                 : item.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
                }).map((data)=>{
                return<div  className="" >
                <div className="h-[300px] shadow-2xl  bg-[#FFF072]  mt-[50px] rounded-[5px]  rounded-br-[20px]  ml-[220px]  w-[250px] border-[2px] border-[#e40725] " >
                        <h1 className="text-center text-[23px] pb-[5px] bg-[#e40725] text-[white]  border-b-[2px] border-[#e40725] "> {data.Title} </h1>
                        <p className=" text-[20px] text-[#210e91]  pl-[6px]  "  >{data.description}</p>
                        <Link Link to={`/Actions/${data._id}`} > <button className="mt-[185px] ml-[10px] text-white h-[30px] rounded-[5px]  w-[65px] bg-red-500  " >Details</button></Link>
                </div>
            </div>
            })
        } </div>
        
    </div>
}

export default Mynotes

