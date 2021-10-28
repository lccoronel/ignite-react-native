import { ICarDTO } from '../../dtos/CarDTO';

export interface IDateInfoProps {
  selected: boolean;
}

export interface IRentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export interface ISchedullingParams {
  car: ICarDTO;
}
