import * as React from 'react';
import * as _ from 'lodash';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import {
  PrimaryButton,
  TextField,
  Label,
  IconButton,
  IRenderFunction,
  colGroupProperties
} from 'office-ui-fabric-react';
import { Shimmer, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';
import { useModel } from 'flooks';

export interface IStep2Props {}

export default function Step2(props: IStep2Props) {
  let { vlog, awards, changeTitle } = useModel('vlog');

  let renderTitle: IRenderFunction<any> = (props) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Label>{props.label}</Label>
        <IconButton
          style={{ height: '22px', width: '22px', marginLeft: '8px' }}
          iconProps={{ iconName: 'StatusCircleErrorX' }}
          title="StatusCircleErrorX"
          ariaLabel="StatusCircleErrorX"
        />
      </div>
    );
  };

  return (
    <>
      <Stack tokens={{ childrenGap: 15 }}>
        <TextField
          label="活动名称"
          onChange={(e, title) => {
            changeTitle(title);
          }}
          value={vlog.info.title}
        />
        {_.map(awards, (award, index) => {
          return (
            <Stack key={index} horizontal tokens={{ childrenGap: 10 }}>
              <Stack.Item grow={1}>
                <TextField
                  label="活動獎品(1)"
                  onRenderLabel={renderTitle}
                  defaultValue={award.title}
                />
              </Stack.Item>
              <TextField label="名额" defaultValue={award.count} />
            </Stack>
          );
        })}
      </Stack>
      <div style={{ marginTop: '15px' }}>
        <PrimaryButton text="增加奖项" allowDisabledFocus={true} />
      </div>
    </>
  );
}
