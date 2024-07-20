import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import all_products from '../../assets/all_product';
import { IconButton } from '@mui/material';

function Product() {

  const columns = [
{field : "image" , headerName : 'Image' , width : 100 , renderCell : (params)=>{
  console.log(params)
  return (
    <img className='w-16 object-contain' src={params.value}  />
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
  // renderCell : (params)=>(
  //   <div>
  //     <IconButton>
  //     <MdOutlineModeEdit />
  //     </IconButton>
  //     <IconButton>
  //       <AiOutlineDelete/>
  //     </IconButton>
  //   </div>
  // )
  },
];

  return (
       <div style={{ height: 400, width: 900 , margin : 30}}>
        <button className='px-4 py-2 bg-green-500  my-6 text-white'>Add New Product</button>
      <DataGrid
        rows={all_products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>

  )
}

export default Product
