import * as React from 'react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { PrimaryButton, TextField } from 'office-ui-fabric-react';
import { useModel } from 'flooks';
export interface IStep1Props {}

export default function Step1(props: IStep1Props) {
  let { catchVlogAsync } = useModel('vlog');

  if (catchVlogAsync.loading) {
    return <Spinner label="正在读取用户列表..." />;
  }

  let url_text;
  let _getErrorMessage = () => {
    if (url_text.value == '') {
      return '请输入视频地址';
    }
  };
  return (
    <Stack horizontal tokens={{ childrenGap: 10 }}>
      <Stack.Item grow={1}>
        <TextField
          componentRef={(node) => {
            url_text = node;
          }}
          value="https://www.bilibili.com/video/av61604041"
          validateOnLoad={false}
          validateOnFocusOut={true}
          onGetErrorMessage={_getErrorMessage}
        />
      </Stack.Item>
      <PrimaryButton
        onClick={() => {
          if (url_text.value != '') {
            catchVlogAsync(url_text.value);
          }
        }}
        text="读取用户列表"
        allowDisabledFocus={true}
      />
    </Stack>
  );
}
