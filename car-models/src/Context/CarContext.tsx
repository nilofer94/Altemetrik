import * as React from 'react';
import { CarContextType, CarModels } from '../@types/carModels';
import carModelsJson from "../constants/carModelsJson"
 
export const CarContext = React.createContext<CarContextType | null>(null);

const CarModelProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [carModels, setCarModels] = React.useState<any>([...carModelsJson]);
  const [selectedCar,setSelectedCar] = React.useState<string>("");


  const saveCarModels = (data:any) => {
    let {id,model, color, yearofManufacture ,insuranceValidUpto ,kms,location ,numberOfOwners ,transmission ,externalFitments,photo } = data
   const newCar:CarModels= {
        photo:photo,
        model : model,
        color : color,
        yearofManufacture : yearofManufacture,
        insuranceValidUpto : insuranceValidUpto,
        kms : kms,
        location : location,
        numberOfOwners : numberOfOwners,
        transmission : transmission,
        externalFitments : externalFitments,
       
      }
     carModels.push(newCar)
    setCarModels(carModels)
  }
  
  const updateCarModel = (data:any) => {
    carModels.map((carData: CarModels) => {
        console.log("model",carData.model,data)
      if (carData.model === data.model) {
        carData.model = data.model;
        carData.color = data.color;
        carData.yearofManufacture = data.yearofManufacture;
        carData.insuranceValidUpto = data.insuranceValidUpto;
        carData.kms = data.kms;
        carData.location = data.location;
        carData.numberOfOwners = data.numberOfOwners;
        carData.transmission = data.transmission;
        carData.externalFitments = data.externalFitments;
        carData.photo = data.photo;
       
      }
    })
    setCarModels([...carModels])
    console.log("car models",[...carModels],data)
  }

  const updateSelectedCar = (title:string) =>{
    setSelectedCar(title)
  }

  return (
    <CarContext.Provider value={{ carModels,selectedCar, updateCarModel,saveCarModels, updateSelectedCar }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarModelProvider;