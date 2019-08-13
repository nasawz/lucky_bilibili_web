import * as React from 'react';
import tinytime from 'tinytime';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import {
  IPersonaProps,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { IRenderFunction, colGroupProperties, SelectionMode } from '@uifabric/utilities';
import { useModel } from 'flooks';
import { DetailsList, IColumn, DetailsListLayoutMode } from 'office-ui-fabric-react';

interface IReplayListProps {}
const examplePersona: IPersonaSharedProps = {
  // imageInitials: 'AL',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};
const ReplayList: React.FunctionComponent<IReplayListProps> = (props) => {
  let { vlog } = useModel('vlog');
  let { replies } = vlog;

  let _onRenderSecondaryText: IRenderFunction<any> = (props: IPersonaProps): JSX.Element => {
    return (
      <div>
        <Icon iconName="Suitcase" styles={{ root: { marginRight: 5 } }} />
        {props.secondaryText}
      </div>
    );
  };
  let _onRenderCell = (item: any, index: number | undefined): JSX.Element => {
    console.log(item);
    let { member, content } = item;
    return (
      <div key={item.rpid} style={{ display: 'flex' }}>
        <div style={{ flexShrink: 0 }}>
          <Persona
            {...examplePersona}
            text={member.uname}
            size={PersonaSize.tiny}
            secondaryText={member.sign}
            styles={{ root: { margin: '0 0 10px 0' } }}
          />
        </div>
        <div
          style={{
            marginLeft: 10,
            overflow: 'hidden',
            // flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {content.message}
        </div>
      </div>
    );
  };

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
        return item.member.uname;
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
        return item.member.fans_detail ? '是' : '';
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
        return item.content.message;
      }
    }
  ];
  return (
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
  );
};

export default ReplayList;
