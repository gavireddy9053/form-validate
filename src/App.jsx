import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const initialValues = {name:'',password:''}
  const [formValues,setFormValues] = useState(initialValues)
  const [formErrors,setFormErrors] = useState({})

  const ref = useRef()
  

  const handleChange = (e) =>{
  const {name,value} = e.target 
  setFormValues({...formValues,[name]:value})
  }
  const errors = {}
   const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formValues)


    if(!formValues.name){
      errors.name = 'name field is required'
    }

    if(!formValues.password){
      errors.password = 'password field is required'
    }

    setFormErrors(errors)
    
   }

   useEffect(()=>{
    
     ref.current.focus()
   },[])
  return (
    <>
      <div style={{
        display:'flex', 
        justifyContent:'center',
         alignItems:'center', 
         height:'70vh'
      
         }}>
        <form style={{display:'flex', flexDirection:'column'  ,boxShadow:'0 0 5px rgba(0,0,256,0.4)',padding:'40px',
        width:'46vw'}} onSubmit={handleSubmit}>
  
          <label style={{marginBottom:'5px'}}>name</label>
          <input ref={ref} type='text' style={{marginBottom:'10px'}} name='name' onChange={handleChange}/> 
          {formErrors.name && <span style={{color:'red'}}>{formErrors.name}</span>}
          <label style={{marginBottom:'5px'}}>password</label>
          <input type='password' name='password' onChange={handleChange}/>
          {formErrors.password && <span style={{color:'red'}}>{formErrors.password}</span>}

          <div style={{display:'flex', justifyContent:'center'}}> 
          <input type='submit' style={{width:'60px',margin:'20px 0 0 8px',backgroundColor:'green',color:'white',
            padding:'6px',borderWidth:'0',borderRadius:'5px'
          }}/>
          <input type='reset' style={{width:'60px',margin:'20px 0 0 8px',backgroundColor:'blue',color:'white',
            padding:'6px',borderWidth:'0',borderRadius:'5px'}}/>
          </div>
        </form>
      </div>
    
    </>
  )
}

export default App
