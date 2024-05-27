import { useState }from 'react'
import axios from 'axios'
function Todo() {
const [value, setValue]=useState('');
const [data, setdata] = useState([])
const addCart=()=>{
axios.post('http://localhost:9000/add',{

todoName:value
}).then((res)=>console.log(res),
setValue(" ")
).catch((err)=>console.log(err))
    
}

 
axios.get('http://localhost:9000/get')
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err))


const remove=(id)=>
{
  axios.delete('http://localhost:9000/remove/'+id)
  .then((res)=>console.log(res),
  setValue(" ")
  ).catch((err)=>console.log(err))
    
}
  return (

<>


    <div className='p-32 '>
       <div className=''>

       <div className="flex  space-x-2 md:w-1/3 ">
  <input 
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Enter your text" onChange={(e)=>setValue(e.target.value)} value={value}
  />
  <button
    type="button" onClick={addCart}
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Add
  </button>
</div>

       </div>


    


<ul className='mt-3'>
  
{data.map((item,index)=>
{
  return(

   <div key={index} className=' ' >
<li className='w-full flex ' >
<p className='w-1/2'>{item.todoName}</p>
<button
    type="button"  onClick={()=>remove(item._id)}
    className="rounded-md  bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    delete
  </button>
</li>

   </div>
  )
})}
</ul>
</div>
</>
  )
}

export default Todo

