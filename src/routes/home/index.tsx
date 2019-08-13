import * as React from 'react';
import {
  PrimaryButton,
  TextField,
  IRenderFunction,
  Label,
  IconButton,
  Checkbox,
  CompoundButton
} from 'office-ui-fabric-react';
import {
  IPersonaSharedProps,
  Persona,
  PersonaInitialsColor,
  PersonaSize
} from 'office-ui-fabric-react/lib/Persona';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import ReplayList from '@components/replay_list';
import Step1 from '@components/steps/step1';
import Step2 from '@components/steps/step2';
import Step3 from '@components/steps/step3';

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div className="container">
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={1}>
            <Stack tokens={{ childrenGap: 20 }}>
              <div className="ContentCard">
                <h2 className="Heading">第一步：粘贴Bilibili视频地址，读取留言用户</h2>
                <Step1 />
              </div>
              <div className="ContentCard">
                <h2 className="Heading">第二步：抽奖活动设置</h2>
                <Step2 />
              </div>
              <div className="ContentCard">
                <h2 className="Heading">第三步：抽奖条件</h2>
                <Step3 />
              </div>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={1}>
            <Stack tokens={{ childrenGap: 20 }}>
              <Stack tokens={{ childrenGap: 20 }}>
                <div className="ContentCard">
                  <ReplayList />
                </div>
              </Stack>
              <Stack tokens={{ childrenGap: 20 }}>
                <CompoundButton primary={true} secondaryText="抽奖总人数100人  共抽出3人">
                  开始抽奖
                </CompoundButton>
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}
