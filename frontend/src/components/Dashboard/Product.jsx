import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import all_products from '../../assets/all_product';
import { IconButton } from '@mui/material';
import  "./DataTable.css"
import { fetchProducts , deleteProduct} from '../../redux/productSlice';
import { useDispatch  , useSelector} from 'react-redux';


function Product() {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchProducts())
},[])
const {products} = useSelector((state)=>state.product)

const handleDelete = (id) => {
  dispatch(deleteProduct(id))
  dispatch(fetchProducts())
}
  const columns = [
{field : "image" , headerName : 'Image' , width : 100 , renderCell : (params)=>{
  console.log(params)
  return (
    <img className='w-16 object-contain' src={`http://localhost:8000/${params.value}`}  />
  )
}},
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'category', headerName: 'Category', width: 200 },
  {
    field: 'new_price',
    headerName: 'Price',
   
    width: 100,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  renderCell : (params)=>(
    <div className='flex gap-4'>
      
    <button className='px-2 py-1  bg-yellow-300'>Edit</button>
    
    <button className='px-2 py-1 bg-red-500' onClick={()=>{
      handleDelete(params.row._id)
    }}>Delete</button>
    </div>
  )
  },
];

  return (
       <div style={{ height: 400, width: 900 , margin : 30}}>
        <button className='px-4 py-2 bg-green-500  my-6 text-white text-sm rounded-md hover:border hover:border-green-500 hover:bg-white hover:text-black transition-all duration-150'>Add New</button>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
         getRowId={(row) => row._id}
        
        pageSizeOptions={[5, 10]}
      />
    </div>

  )
}

export default Product
