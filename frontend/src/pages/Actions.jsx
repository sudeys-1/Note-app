import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Actions (){
    const Params = useParams()
    const navigate = useNavigate()
    const [Title ,setTitle] =useState("")
    const [Description ,setDescription] =useState("")

    const getSingleNote = ()=>{
        axios.get(`http://localhost:3000/Note/single/${Params.id}`).then((response)=>{
            setTitle(response.data.Title)
            setDescription(response.data.description)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getSingleNote()
    },[])

    // update Api 
    const handleUpdate =  ()=>{
        axios.put(`http://localhost:3000/Update/${Params.id}`,{
            "Title":Title,
            "description":Description
        }).then(()=>{
            alert("Note Updated successfully")
            navigate("/mynotes")
        }).catch((error)=>{
            console.log(error)
        })
    }


    // delete API 
    const deleteNotes =()=>{
        axios.delete(`http://localhost:3000/Delete/${Params.id}`).then(()=>{
            alert("Deleted seccssefully ")
            navigate("/mynotes")
        }).catche((error)=>{
            console.log(error)
        })
    }





    return <div className="bg-[url('https://img.freepik.com/free-vector/blank-white-notepaper-design-vector_53876-161340.jpg?t=st=1725531471~exp=1725535071~hmac=e5af884a8291e893a5513bc592a1d2f3610ecb1b1aae463aaad9e378890386c2&w=1800')] h-screen" >
        <div className="flex justify-between pt-[20px] border-b-[2px]  pb-[7px]  border-[#E40725]  "  > 

            <h1 className="text-[40px]  ml-[200px]   mt-[10px]  text-[#E40725] font-bold   " > N<span className="text-[#210E91]" >otes</span>  </h1>
           
            {/* <button  className=" mt-[20px] mr-[50px]  text-white  rounded-[6px]  h-[40px] w-[120px] bg-[red]" >My Notes</button> */}
            <div className="mt-[25px] mr-[250px]   " >
                <button onClick={deleteNotes} className=" ml-[10px] text-white h-[30px] rounded-[5px]  w-[65px] bg-red-500  " >Delete</button>               
                <button onClick={handleUpdate} className="  ml-[50px] text-white h-[30px] rounded-[5px]  w-[65px] bg-red-500  " >Update</button>
            </div>
        </div>
        <div>
            <h1>Upade Hello reunion</h1>
        <div className="h-[500px] shadow-2xl  ml-[350px] bg-[#FFF072]  mt-[50px] rounded-[5px]  rounded-br-[20px]    w-[800px] border-[2px] border-[#e40725] " >
            
        <div className="">

                <div>
                <input value={Title}  onChange={(event)=> setTitle(event.target.value)}  className=" pl-[10px]  text-[23px]   pb-[5px] bg-transparent text-black w-[800px]  border-b-[2px] border-[#e40725] " type="text" placeholder="Title" />

                 </div>             
                  <div  >
               <textarea value={Description}  onChange={(event)=> setDescription(event.target.value)} className=" h-[200px] pl-[20px] mt-[20px] bg-transparent  w-[800px]   border-b-[1px] border-b-gray-400  " name="" placeholder="Description" id=""></textarea>
               </div>
        
       
                
        </div>
        </div>

        
    </div>
    </div>

}

export default Actions