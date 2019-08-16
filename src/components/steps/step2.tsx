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
  let { vlog, awards, changeTitle, changeAward, addAward, removeAward } = useModel('vlog');

  let renderTitle: IRenderFunction<any> = (props) => {
    let { label } = props;
    let awardsObj = _.keyBy(awards, 'uuid');
    let award = awardsObj[label];
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Label>奖品</Label>
        <IconButton
          onClick={() => {
            removeAward(award);
          }}
          style={{ height: '22px', width: '22px', marginLeft: '8px' }}
          iconProps={{ iconName: 'StatusCircleErrorX' }}
          title="StatusCircleErrorX"
          ariaLabel="StatusCircleErrorX"
        />
      </div>
    );
  };
  function _getErrorMessage4Title(title) {
    if (title == '') {
      return '请输入名称';
    }
  }
  function _getErrorMessage4Count(count) {
    if (count == '') {
      return '请输入名额';
    }
    if (!count.match(/^\d*$/)) {
      return '请输入数字';
    }
  }
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
            <Stack key={award.uuid} horizontal tokens={{ childrenGap: 10 }}>
              <Stack.Item grow={1}>
                <TextField
                  label={award.uuid}
                  onRenderLabel={renderTitle.bind(award.key)}
                  defaultValue={award.title}
                  onChange={(e, title) => {
                    changeAward({ uuid: award.uuid, title: title });
                  }}
                  onGetErrorMessage={_getErrorMessage4Title.bind(this)}
                />
              </Stack.Item>
              <TextField
                label="名额"
                defaultValue={award.count}
                onChange={(e, count) => {
                  changeAward({ uuid: award.uuid, count: count });
                }}
                onGetErrorMessage={_getErrorMessage4Count.bind(this)}
              />
            </Stack>
          );
        })}
      </Stack>
      <div style={{ marginTop: '15px' }}>
        <PrimaryButton
          text="增加奖项"
          allowDisabledFocus={true}
          onClick={() => {
            addAward();
          }}
        />
      </div>
    </>
  );
}
