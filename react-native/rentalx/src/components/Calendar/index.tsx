import React from 'react';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { days, months, shortDays, shortMonths } from './data/InfoCalendar';

LocaleConfig.locales['pt-br'] = {
  monthNames: months,
  monthNamesShort: shortMonths,
  dayNames: days,
  dayNamesShort: shortDays,
  today: 'hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

const Calendar: React.FC = () => {
  const { colors, fonts } = useTheme();

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather size={24} color={colors.text} name={`chevron-${direction}`} />
      )}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
};

export default Calendar;
