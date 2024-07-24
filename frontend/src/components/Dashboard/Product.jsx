import React, { useEffect , useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  deleteProduct,
  addProduct,
} from '../../redux/productSlice';
import './DataTable.css';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
function Product() {
  const [isEdit , setIsEdit] = useState(false)
  const [productData , setProductData] = useState([])
  console.log(productData)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.product);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit , setValue } = useForm();
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(fetchProducts());
  };

  const onSubmit = async (data) => {
    await dispatch(addProduct(data));
    handleClose();
    dispatch(fetchProducts());
  };

  const handleEdit= (data) => {
    setProductData(data);
    setValue('name', productData.name)
    setValue('category', productData.category)
    setValue('new_price', productData.new_price)
    setValue('old_price', productData.old_price)
      handleOpen()
    setIsEdit(true)
  
  }
  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <img
          className="w-16 object-contain"
          src={`http://localhost:8000/${params.value}`}
          alt="product"
        />
      ),
    },
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
      renderCell: (params) => (
        <div className="flex gap-2">
          <IconButton
            color="primary"
            onClick={()=>{
              handleEdit(params.row)
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => {
              handleDelete(params.row._id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="m-10">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        className="my-6"
        onClick={()=>{
          setIsEdit(false)
          handleOpen()}}
      >
        Add New
      </Button>
      <div style={{ height: 400, width: 900, marginTop: 20 }}>
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} onSubmit={handleSubmit(onSubmit)} component="form">
            <h2 className="text-center m-4">{isEdit ? "Update Product" : "Add New Product"}</h2>
            <TextField
              fullwidth
              margin="normal"
              label="Name"
              {...register('name')}
            />
            <TextField
              fullwidth
              margin="normal"
              label="Category"
              {...register('category')}
            />
            <TextField
              fullwidth
              margin="normal"
              type="file"
              label="Image"
              {...register('image')}
            />
            <TextField
              fullwidth
              margin="normal"
              type="number"
              label="New Price"
              {...register('new_price')}
            />
            <TextField
              fullwidth
              margin="normal"
              type="number"
              label="Old Price"
              {...register('old_price')}
            />
            <Button type="submit" variant="contained" color="primary">
             {isEdit ? "Update Product" : "Add Product"}
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Product;
