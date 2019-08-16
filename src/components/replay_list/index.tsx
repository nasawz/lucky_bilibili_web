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
  CompoundButton
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

  const columns: IColumn[] = [
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
      name: '粉丝',
      fieldName: 'fans',
      minWidth: 10,
      maxWidth: 10,
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
          primary={true}
          secondaryText={`抽奖总人数${replies.length}人  共抽出${awards.length}人`}
        >
          开始抽奖
        </CompoundButton>
      </Stack>
    </>
  );
};

export default ReplayList;
