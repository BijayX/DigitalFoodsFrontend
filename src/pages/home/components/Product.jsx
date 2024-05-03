import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../../store/productSlice"
import {Link, useNavigate} from 'react-router-dom'

  export default function Product() {
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data : products,status} =  useSelector((state)=>state.product)
    
  
    useEffect(()=>{
     dispatch(fetchProducts())
    },[])
    


    if(status == "loading"){
         
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
          <svg class="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
          </svg>
          <span class="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
      </div>
    }
    if(status == "error"){
      return <h1 style={{ textAlign: 'center' }}>Error ! Something went wrong</h1>
    }
    if (products.length === 0) {
      return <h1 style={{ textAlign: 'center' }}>No products available</h1>
    }
    

    return (
<div className="relative w-full">
     
     <div className="relative bg-white-50">
         <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
         <h1 className="text-2xl font-bold text-yellow-900 md:text-3xl lg:w-10/12">Our Popular Foods</h1>

       <div className="flex flex-wrap justify-between">
 
   
       {
        products.map((product)=>{
          return (
            <div onClick={()=>navigate(`/productdetails/${product._id}`)} key={product._id} className="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
            <img className="object-cover object-center w-full h-48" src={product.productImage} alt="Product Image" />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">{product.productName}</h2>
              <p className="mb-2 text-base text-gray-700 dark:text-gray-300">{product.productDescription}.</p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs.{product.productPrice}</p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300"></p>
         
              </div>
            </div>
          </div>
          )
        })
      }
    

   
       </div>
         </div>
     </div>
 </div>


     
 
    )
  }