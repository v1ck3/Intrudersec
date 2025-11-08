import {React, useEffect, useState} from 'react'
import axios from "axios"

const Image = () => {

    const [data, setData] = useState([])

    const getData= async() =>{
      
      const response =  await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
      
       setData(response.data)

    }
    useEffect(() => {
      getData()
    
      
    }, [])
    
  
  
    return (
      <>
      <div className='p-10 mt-3 bg-amber-600'>
          {data.map((elem , idx)=>{
            return <div key={idx} className='bg-amber-50 text-black flex items-center justify-between w-full px-7 py-6 mb-3 rounded'>
                  <img className='h-40  ' src={elem.download_url} alt="" />
                  <h2>{elem.author}</h2>
                  <p>{elem.width}</p>
                  <p>{elem.height}</p>
            </div>
          })}
      </div>
      
      
       
      </>
    )
  }
  
export default Image