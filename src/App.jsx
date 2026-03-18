import * as React from "react";
import './App.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Icon,
  OutlinedInput
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';












function App() {
let url="https://69945553fade7a9ec0f51007.mockapi.io/Student"
let [triger,settriger]=useState(false)
let [data,setdata]=useState([])

async function get() {
  try {
    let {data}=await axios.get(url)
    setdata(data)
  } catch (error) {
    console.error(error);
  }
}


useEffect(()=>{
  // if(triger){
    get()
  // }
  // return settriger(true)
},[])


async function del(id) {
   try {
    await axios.delete(`${url}/${id}`)
    get()
   } catch (error) {
    console.error(error);
   }
}


const [open, setOpen] = React.useState(false);
const [ediopen, seteditOpen] = React.useState(false);
let [editname,setname]=useState("")
let [editage,setage]=useState("")
let [idx,setidx]=useState(null)
let [status,setstatus]=useState(null)
let [editjob,setjob]=useState("")
let [editimg,setimg]=useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const editopen = () => {
    seteditOpen(true);
  };

  const editclose = () => {
    seteditOpen(false);
  };

  async function addform(e) {
    e.preventDefault()
    try {
      await axios.post(url,{
        name:e.target["name"].value,
        age:e.target["age"].value,
        status:true,
        job:e.target["job"].value,
        img:e.target["img"].value
      })
      get()
      handleClose()
    } catch (error) {
      console.error(error);
    }
  }


  function xx(e) {
    setname(e.name)
    setage(e.age)
    setidx(e.id)
    setstatus(e.status)
    setimg(e.img)
    setjob(e.job)
    editopen();
  }


  async function editform(e) {
      e.preventDefault()
      try {
        await axios.put(`${url}/${idx}`,{
          name:editname,
          age:editage,
          status:status,
          id:idx,
          job:editjob,
          img:editimg
        })
        get()
        editclose()
      } catch (error) {
        console.error(error);
      }
  }


  async function ch(e) {
    try {
      await axios.put(`${url}/${e.id}`,{
        ...e,
        status:!e.status,
      })
      get()
    } catch (error) {
      console.error(error);
    }
  }


  async function sear(text) {
    try {
     let {data}=await axios.get(`${url}?name=${text}`)
      setdata(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function sel(value) {
    try {
     let {data}=await axios.get(`${url}?status=${value}`)
      setdata(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>

    <div className="flex justify-center gap-[160px] items-center">

  <React.Fragment>
      <Button variant="contained" sx={{width:"300px",padding:"20px 0px"}}  onClick={handleClickOpen}>
      ADD NEW USER
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={addform} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name "
              type="text"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="text"
              fullWidth
              variant="standard"
              />
             <TextField
              autoFocus
              required
              margin="dense"
              id="img"
              name="img"
              label="Image"
              type="text"
              fullWidth
              variant="standard"
              />
             <TextField
              autoFocus
              required
              margin="dense"
              id="job"
              name="job"
              label="Job"
              type="text"
              fullWidth
              variant="standard"
              />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

<div className="flex flex-row items-center gap-[20px]">


<div class="InputContainer">  
  <input placeholder="Search.." onChange={(e)=>sear(e.target.value)} id="input" class="input" name="text" type="text" />
</div>



  <FormControl sx={{ m: 1, width: 185 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          
  <Select
    label="Status"
    onChange={(e) => sel(e.target.value)}
    defaultValue=""
    >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="true">Active</MenuItem>
    <MenuItem value="false">Inactive</MenuItem>
  </Select>
      </FormControl>





    </div>




  <React.Fragment>
          <Dialog open={ediopen} onClose={editclose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={editform} id="edit-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name "
              type="text"
              fullWidth
              variant="standard"
              value={editname}
              onChange={(e) => setname(e.target.value)}
            />
             <TextField
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="text"
              fullWidth
              variant="standard"
              value={editage}
              onChange={(e) => setage(e.target.value)}
              />
             <TextField
              autoFocus
              required
              margin="dense"
              id="Job"
              name="job"
              label="Job"
              type="text"
              fullWidth
              variant="standard"
              value={editjob}
              onChange={(e) => setjob(e.target.value)}
              />
             <TextField
              autoFocus
              required
              margin="dense"
              id="img"
              name="img"
              label="Image"
              type="text"
              fullWidth
              variant="standard"
              value={editimg}
              onChange={(e) => setimg(e.target.value)}
              />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={editclose}>Cancel</Button>
          <Button type="submit" form="edit-form">
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
              </div>

    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto", mt: 5 }}>
      <Table>
        <TableHead sx={{ background: "#1976d2" }}>
          <TableRow>
            <TableCell> <input type="checkbox" /></TableCell>
            <TableCell sx={{ color: "white" }}>ID</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Age</TableCell>
            <TableCell sx={{ color: "white" }}>Status</TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell><input checked={row.status} onClick={()=>ch(row)} type="checkbox"/></TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-[10px]">
                <img className="w-[35px] rounded-[50%]" src={row.img} alt="" />
                <div className="flex flex-col">
                <h1 className="text-[18px]">{row.name}</h1>
               <p> {row.job}</p>
                </div>
                </div>
                
                
                </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.status?"Active":"Inactive"}</TableCell>
              <TableCell><Button onClick={() => { xx(row);editopen();}} variant="contained" size="small">EDITE</Button> <IconButton onClick={()=>del(row.id)} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>












    </>
  );
}

export default App;