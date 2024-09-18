import Pencile from "../Images/Pencile-removebg-preview.png"
import note from "../Images/pngwing.com (1).png"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Home (){

    const [Open ,setOpen ]=useState(false)
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    
    // Add Api That create Notes
    const [title ,settitle] = useState("")
    const [description ,setdescription] = useState("")
    const handleAddNotes=()=>{
        axios.post("http://localhost:3000/Create",{
            "Title":title,
            "description": description,
        }).then(()=>{
            alert("note Added successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }
    

    return <div className=" bg-[url('https://img.freepik.com/free-vector/blank-white-notepaper-design-vector_53876-161340.jpg?t=st=1725531471~exp=1725535071~hmac=e5af884a8291e893a5513bc592a1d2f3610ecb1b1aae463aaad9e378890386c2&w=1800')] h-screen">
        <div className="flex justify-between pt-[20px] border-b-[2px]  pb-[7px]  border-[#E40725]  "  > 

            <h1 className="text-[40px]  ml-[200px]   mt-[10px]  text-[#E40725] font-bold   " > N<span className="text-[#210E91]" >otes</span>  </h1>
            <input  className="h-[40px] w-[300px] mt-[22px] p-[5px] rounded-[4px] border-black border-[2px] placeholder:text-[#E40725] "  type="search" placeholder="Search" />
          <Link to="/mynotes" > <button  className=" mt-[20px] mr-[50px]  text-white  rounded-[6px]  h-[40px] w-[120px] bg-[red]" >My Notes</button></Link>

        </div>
      
        <div className="flex  text-[#210E91]  justify-around  mt-[94px] " >

            <div className="ml-[139px]">
                    <h1 className=" text-[60px]" >Add Your note </h1>
                    <p className="w-[400px] mt-[65px]  text-[22px] " >A simple app to capture and organize your thoughts. Keep your ideas accessible and stay productive anywhere.</p>

                    <button  onClick={handleOpen}  className="h-[40px] mt-[55px] rounded-[5px]  text-white     w-[120px] bg-[#E40725]   "  >Add New Note </button>
                
            </div>
            
       <div>
       <img className="ml-[200px]" src={Pencile}  alt="" />
       </div>

        </div>


        <div style={{display :Open ==true? "block" :""  }} className=" h-screen fixed  hidden    top-0  w-full  bg-opacity-[50%] bg-black  " >
            <div  className="   h-screen  bg-no-repeat " >
            <img className="ml-[450px] mt-[150px]   relative  h-[550px] " src={note}  alt="" />'

           <div  className="h-[450px] text-center absolute top-[200px]  mt-[40px] -rotate-3 left-[500px] w-[450px] bg-transparent  " >
            <h1 className="text-[#210E91] text-[25px] font-bold  " >Start Writing </h1>
            <form className="flex ml-[20px] flex-col" >
                <input value={title}  onChange={(event)=> settitle(event.target.value)}  className="pl-[20px]  w-[400px] mt-[20px]  bg-transparent  pb-[5px]  border-b-[1px] border-b-gray-400   " type="text" placeholder="Title" />
                <textarea value={description}  onChange={(event)=> setdescription(event.target.value)} className="w-[400px] pl-[20px] mt-[20px] bg-transparent    border-b-[1px] border-b-gray-400  " name="" placeholder="Description" id=""></textarea>
            </form>
            <button onClick={handleClose} className=" mt-[20px]    h-[40px]  text-white  rounded-[6px]  w-[120px] bg-[red] "  >Close</button>
            <button onClick={handleAddNotes}  className=" mt-[20px]   text-white ml-[20px]  rounded-[6px]  h-[40px] w-[120px] bg-[red] "  >Save</button>
           </div>
            
            </div>
        </div>

      
    </div>
}


export default Home