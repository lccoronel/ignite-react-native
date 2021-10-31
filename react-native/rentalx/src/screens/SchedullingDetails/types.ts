import { ICarDTO } from '../../dtos/CarDTO';

export interface ISchedullingDetailsParams {
  car: ICarDTO;
  dates: string[];
}

export interface IRentalPeriod {
  start: string;
  end: string;
}
