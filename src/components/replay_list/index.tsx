import * as React from 'react';
import tinytime from 'tinytime';
import * as _ from 'lodash';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { SelectionMode, colGroupProperties } from '@uifabric/utilities';
import { useModel } from 'flooks';
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  Stack,
  CompoundButton,
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  DialogType
} from 'office-ui-fabric-react';

interface IReplayListProps {}

let onceFilter = (replies, once) => {
  if (!once) {
    return replies;
  } else {
    return _.values(_.keyBy(replies, 'uname'));
  }
};
let includeFilter = (replies, keystr) => {
  if (keystr == '') {
    return replies;
  } else {
    return _.filter(replies, function(o) {
      return o.message.indexOf(keystr) >= 0;
    });
  }
};
let timeFilter = (replies, time_end) => {
  if (!time_end) {
    return replies;
  } else {
    return _.filter(replies, function(o) {
      return o.ctime * 1000 < time_end.getTime() + 86400000;
    });
  }
};
let nameFilter = (replies, exclude) => {
  if (exclude.length == 0) {
    return replies;
  } else {
    return _.filter(replies, function(o) {
      return _.indexOf(exclude, o.uname) < 0;
    });
  }
};
let fansFilter = (replies, fans) => {
  if (!fans) {
    return replies;
  } else {
    return _.filter(replies, function(o) {
      return o.fans;
    });
  }
};
const ReplayList: React.FunctionComponent<IReplayListProps> = (props) => {
  let { vlog, setting, awards } = useModel('vlog');
  const [hideDialog, setHideDialog] = React.useState(true);
  const [winners, setWinners] = React.useState([{ uname: '', award: '' }]);

  let { replies } = vlog;
  let { once, fans, include, time_end, exclude } = setting;
  replies = _.map(replies, (_rep) => {
    let rep = {
      uname: _rep.member.uname,
      fans: _rep.member.fans_detail ? true : false,
      message: _rep.content.message,
      ctime: _rep.ctime
    };
    return rep;
  });

  replies = onceFilter(replies, once);
  replies = includeFilter(replies, include);
  // replies = timeFilter(replies, new Date('2019-8-2 9:29:16').getTime());
  replies = timeFilter(replies, time_end);
  replies = nameFilter(replies, exclude);
  replies = fansFilter(replies, fans);
  replies = _.orderBy(replies, ['ctime'], ['desc']);
  let allAwards: Array<any> = [];
  _.map(awards, (award) => {
    for (let index = 0; index < award.count; index++) {
      allAwards.push(award.title);
    }
  });
  let isDisabled = false;
  if (awards.length == 0 || replies.length == 0 || allAwards.length > replies.length) {
    isDisabled = true;
  }
  const columns: IColumn[] = [
    {
      key: 'index',
      name: '序号',
      fieldName: 'index',
      minWidth: 20,
      maxWidth: 20,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item, index) => {
        return index ? index! + 1 : 1;
      }
    },
    {
      key: 'uname',
      name: '用户名',
      fieldName: 'uname',
      minWidth: 120,
      maxWidth: 120,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return item.uname;
      }
    },
    {
      key: 'fans',
      name: '应援团',
      fieldName: 'fans',
      minWidth: 30,
      maxWidth: 30,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return item.fans ? '是' : '';
      }
    },
    {
      key: 'time',
      name: '时间',
      fieldName: 'time',
      minWidth: 100,
      maxWidth: 140,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return tinytime('{YYYY}-{Mo}-{DD} {H}:{mm}:{ss}').render(
          new Date(parseInt(`${item.ctime}000`))
        );
      }
    },
    {
      key: 'message',
      name: '留言',
      fieldName: 'message',
      minWidth: 100,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return item.message;
      }
    }
  ];
  const columns_award: IColumn[] = [
    {
      key: 'index',
      name: '序号',
      fieldName: 'index',
      minWidth: 10,
      maxWidth: 10,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item, index) => {
        return index ? index! + 1 : 1;
      }
    },
    {
      key: 'uname',
      name: '中奖者用户名',
      fieldName: 'uname',
      minWidth: 120,
      maxWidth: 120,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return item.uname;
      }
    },
    {
      key: 'award',
      name: '奖品',
      fieldName: 'award',
      minWidth: 120,
      maxWidth: 120,
      isRowHeader: true,
      isResizable: true,
      data: 'string',
      isPadded: true,
      onRender: (item) => {
        return item.award;
      }
    }
  ];

  let doLottery = () => {
    let _winners: Array<{ uname: string; award: string }> = [];
    let users = _.sampleSize(replies, allAwards.length);
    for (let index = 0; index < allAwards.length; index++) {
      const user = users[index];
      const award = allAwards[index];
      _winners.push({
        uname: user.uname,
        award
      });
    }
    setWinners(_winners);
    setHideDialog(false);
  };

  return (
    <>
      <Stack tokens={{ childrenGap: 20 }}>
        <div className="ContentCard">
          <FocusZone direction={FocusZoneDirection.vertical}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="Heading">留言用户列表</h2>
              <h2>用户数:{replies.length}</h2>
            </div>
            <div style={{ overflow: 'auto', maxHeight: 600 }} data-is-scrollable={true}>
              <DetailsList
                items={replies}
                compact={true}
                columns={columns}
                selectionMode={SelectionMode.none}
                // getKey={this._getKey}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
                // selection={this._selection}
                selectionPreservedOnEmptyClick={true}
                // onItemInvoked={this._onItemInvoked}
                enterModalSelectionOnTouch={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="Row checkbox"
              />
            </div>
          </FocusZone>
        </div>
      </Stack>
      <Stack tokens={{ childrenGap: 20 }}>
        <CompoundButton
          disabled={isDisabled}
          primary={true}
          secondaryText={`抽奖总人数${replies.length}人  共抽出${allAwards.length}人`}
          onClick={() => {
            doLottery();
          }}
        >
          开始抽奖
        </CompoundButton>
        <Dialog
          hidden={hideDialog}
          onDismiss={() => {
            setHideDialog(true);
          }}
          dialogContentProps={{
            type: DialogType.close,
            title: '抽奖结果'
          }}
          minWidth={600}
          modalProps={{
            // titleAriaId: this._labelId,
            // subtitleAriaId: this._subTextId,
            isBlocking: false,
            styles: { main: { maxWidth: 600 } }
          }}
        >
          <div>
            <div
              style={{ overflow: 'auto', maxHeight: 300, minHeight: 100 }}
              data-is-scrollable={true}
            >
              <DetailsList
                items={winners}
                compact={true}
                columns={columns_award}
                selectionMode={SelectionMode.none}
                // getKey={this._getKey}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
                // selection={this._selection}
                selectionPreservedOnEmptyClick={true}
                // onItemInvoked={this._onItemInvoked}
                enterModalSelectionOnTouch={true}
              />
            </div>
          </div>
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                setHideDialog(true);
              }}
              text="保存结果"
            />
            <DefaultButton
              onClick={() => {
                setHideDialog(true);
              }}
              text="取消"
            />
          </DialogFooter>
        </Dialog>
      </Stack>
    </>
  );
};

export default ReplayList;
