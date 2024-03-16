export interface CarModels {
    model:string;
    color:string;
    yearofManufacture:string;
    insuranceValidUpto:string;
    kms:number;
    location:string;
    numberOfOwners:string;
    transmission:string;
    externalFitments:string;
    photo:string
  }
  export type CarContextType = {
    carModels: CarModels[];
    updateCarModel: (carModel:CarModels) => void;
    saveCarModels: (carModel:CarModels) => void;
    selectedCar: string;
    updateSelectedCar:(title:string) => void
  };