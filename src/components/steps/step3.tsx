import * as React from 'react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import {
  PrimaryButton,
  TextField,
  Label,
  Checkbox,
  DatePicker,
  Persona,
  PersonaSize,
  IDatePickerStrings,
  DayOfWeek
} from 'office-ui-fabric-react';

export interface IStep3Props {}
const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker'
};
export default function Step3(props: IStep3Props) {
  return (
    <>
      <Stack tokens={{ childrenGap: 15 }}>
        <Checkbox label="同一人只算一次抽奖机会" />
        <Checkbox label="必须是UP主的粉丝" />
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>留言需包含：</Label>
          <TextField underlined />
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>留言截止日期：</Label>
          <DatePicker
            firstDayOfWeek={DayOfWeek.Sunday}
            strings={DayPickerStrings}
            placeholder="Select a date..."
            ariaLabel="Select a date"
          />
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>排除用户名：</Label>
          <TextField underlined />
          <PrimaryButton text="确定" allowDisabledFocus={true} />
        </Stack>
        <Stack horizontal wrap tokens={{ childrenGap: 10 }}>
          <Persona text="享瘦厨房" size={PersonaSize.size8} />
        </Stack>
      </Stack>
    </>
  );
}
