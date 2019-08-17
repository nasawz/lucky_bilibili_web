import * as React from 'react';
import * as _ from 'lodash';
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
  DayOfWeek,
  DefaultButton
} from 'office-ui-fabric-react';
import { useModel } from 'flooks';

export interface IStep3Props {}
const DayPickerStrings: IDatePickerStrings = {
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],

  shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: '今天',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker'
};
export default function Step3(props: IStep3Props) {
  let {
    setting,
    changeOnce,
    changeFans,
    changeInclude,
    setTimeEnd,
    clearTimeEnd,
    addExclude,
    removeExclude
  } = useModel('vlog');
  let _onFormatDate = (date?: Date | undefined): string => {
    if (date) {
      let d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return '';
  };
  let _onParseDateFromString = (value: string): Date => {
    return new Date(value);
  };
  const [name_str, setName] = React.useState('');
  let name_text;
  return (
    <>
      <Stack tokens={{ childrenGap: 15 }}>
        <Checkbox
          label="同一人只算一次抽奖机会"
          checked={setting.once}
          onChange={(e, checked) => {
            changeOnce(checked);
          }}
        />
        <Checkbox
          label="必须是UP主的粉丝"
          checked={setting.fans}
          onChange={(e, checked) => {
            changeFans(checked);
          }}
        />
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>留言需包含：</Label>
          <TextField
            underlined
            value={setting.include}
            onChange={(e, title) => {
              changeInclude(title);
            }}
          />
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>留言截止日期：</Label>
          <DatePicker
            firstDayOfWeek={DayOfWeek.Sunday}
            strings={DayPickerStrings}
            placeholder="选择日期..."
            ariaLabel="选择日期"
            onSelectDate={(date: Date | null | undefined) => {
              setTimeEnd(date);
            }}
            value={setting.time_end}
            formatDate={_onFormatDate}
            parseDateFromString={_onParseDateFromString}
          />
          <DefaultButton
            text="清除"
            onClick={() => {
              clearTimeEnd();
            }}
            allowDisabledFocus={true}
          />
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Label>排除用户名：</Label>
          <TextField
            value={name_str}
            onChange={(e, name) => {
              if (name) {
                setName(name);
              }
            }}
            underlined
          />
          <PrimaryButton
            text="确定"
            onClick={() => {
              if (name_str != '') {
                addExclude(name_str);
                setName('');
              }
            }}
            allowDisabledFocus={true}
          />
        </Stack>
        <Stack horizontal wrap tokens={{ childrenGap: 10 }}>
          {_.map(setting.exclude, (name, index) => {
            return (
              <div key={index} style={{ cursor: 'pointer' }}>
                <Persona
                  text={name}
                  onClick={() => {
                    removeExclude(name);
                  }}
                  size={PersonaSize.size8}
                />
              </div>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
