import { FC, useEffect, useState,useContext,SyntheticEvent } from 'react';
import { CarContextType, CarModels } from '../../@types/carModels';
import * as React  from 'react';
import CarModelProvider, { CarContext } from '../../Context/CarContext';
import './style.css'

const CarForm: React.FC = () => {
    const {selectedCar, updateCarModel,carModels } = React.useContext(CarContext) as CarContextType;
    let keys={
        model:selectedCar,
        color:"",
        yearofManufacture:"",
        insuranceValidUpto:"",
        kms:0,
        location:"",
        numberOfOwners:"",
        transmission:"",
        externalFitments:"",
        photo:""
       }
  const [state,setState] = useState(keys)

const handleChange= (e: React.ChangeEvent<HTMLInputElement>): void =>{

 const {name,value} = e.target
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
    
}


  return (
    <form onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        updateCarModel(state);
        setState(keys)
      }}>
 <div className='form-container'>
 
    <div className='form-input'>
     <div>Model</div>
    <input type="text" value={selectedCar} readOnly/>
 </div>
 <div className='form-input'>
     <div>Color</div>
     <input type="text" value={state.color} name="color" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>Year Of Manufacture</div>
    <input type="text" value={state.yearofManufacture} name="yearofManufacture" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>Insurance valid upto</div>
    <input type="text" value={state.insuranceValidUpto} name="insuranceValidUpto" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>kms</div>
    <input type="text" value={state.kms} name="kms" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>Location</div>
    <input type="text" value={state.location} name="location" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>Number of owners</div>
    <input type="text" value={state.numberOfOwners} name="numberOfOwners" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>Transmission</div>
    <input type="text" value={state.transmission} name="transmission" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>External Fitments</div>
    <input type="text" value={state.externalFitments} name="externalFitments" onChange={(e)=>handleChange(e)} required/>
 </div>
 <div className='form-input'>
     <div>photo</div>
    <button type='button'>Browse</button>
 </div>
 </div>
  <button type="submit">Submit</button>
 </form>
  )
};

export default CarForm;