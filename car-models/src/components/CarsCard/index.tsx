import { FC, useEffect, useState,useContext } from 'react';
import { CarContextType, CarModels } from '../../@types/carModels';
import * as React  from 'react';
import CarModelProvider, { CarContext } from '../../Context/CarContext';
import './style.css'
import CarForm from '../CarForm';

const CarsCard: React.FC = () => {
    const { carModels,updateSelectedCar,selectedCar } = React.useContext(CarContext) as CarContextType;
    const [selectedCarModel,setSelectedCarModel] = React.useState<string | undefined>()

  return (
    <>
 <div className='card-container'>
    {carModels&&carModels.length>0&&carModels.map((data)=>(
    <div className='card' onClick={()=>{setSelectedCarModel(data.model);updateSelectedCar(data.model)}}>
       {data.model}
    </div>))}
 </div>
 {selectedCar.length>0&&<CarForm/>}
 </>
  )
};

export default CarsCard;