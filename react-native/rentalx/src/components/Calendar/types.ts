import { DateCallbackHandler } from 'react-native-calendars';

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

export interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}
