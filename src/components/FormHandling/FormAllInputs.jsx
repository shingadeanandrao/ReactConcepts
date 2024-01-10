
import React, { useState } from 'react';

const FormAllInputs = () => {
    const[form,setForm] = useState(
        {
            fname:'',
            email:"",
            color:"",
            date:"",
            range:'50',
            options:'',
            password:"",
            mobile:"",
            isChecked1: '',
            isChecked2: '',
            isChecked3: ''
        }
    );

    const handleChange=(event)=>{
        console.log(event);
        const{name,value,file,type,checked}= event.target;
        console.log(`Name: ${name} Value: ${value}`)

        setForm((preForm)=>({
            ...preForm, [ name ]:file ? file[0]:value,
            [name]:type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit=(e)=>{
        alert(`First Name : ${form.fname} Email : ${form.email}`)
        console.log("Inside handleSubmit")
        e.preventDefault()
      }

  return (
    <>
      <h2>Advance Form</h2>
      <form onSubmit={handleSubmit}>
            <label>
                First Name: <input type='text' name='fname' value={form.fname} onChange={handleChange} autoFocus required/>
            </label><br/><br/>

            <label>
                Mobile No: <input type='tel' name='mobile' value={form.mobile} onChange={handleChange} required/>
            </label><br/><br/>

            <label>
                Email: <input type='text' name='email' value={form.email} onChange={handleChange} required/>
            </label><br/><br/>
            <label>
                Password: <input type='password' name='password' value={form.password} onChange={handleChange} required/>
            </label><br/><br/>
            <label>
                Colors: <input type='color' name='color' value={form.color} onChange={handleChange}/>
            </label><br/><br/>

            <label>
                Date: <input type='date' name='date' value={form.date} onChange={handleChange}/>
            </label><br/><br/>

            <label>
                Range: <input type='range' name='range' value={form.range} onChange={handleChange}/>
            </label><br/><br/>

            <label>
                Options:<select type='options' name='options' value={form.options} onChange={handleChange}>
                    <option value=''>Please Select Option</option>
                    <option value='Java'>Java</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Javascript">JavaScript</option>
                </select>
            </label><br/><br/>
            <label>
                File Upload: <input type='file' name='file' onChange={handleChange}></input>
           </label> <br/><br/>
           <p>Select Course:  
           <label>
            React:  <input type="checkbox"  value={form.isChecked1} onChange={handleChange}/>
           </label>
           <label>
               Angular:  <input type="checkbox"  value={form.isChecked2} onChange={handleChange}/>
           </label>
           <label> 
              .Net:  <input type="checkbox"  value={form.isChecked3} onChange={handleChange}/>
           </label>
           </p>

            <button type='submit' className='bg-success'>Sign Up</button>
      </form>

    </>
  )
}

export default FormAllInputs;
