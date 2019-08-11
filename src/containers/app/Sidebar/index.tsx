import { Nav } from 'office-ui-fabric-react/lib/Nav';
import * as React from 'react';
import './index.css';

function getFirstStr(urlKey: string, pathSubstr: string): boolean {
  return urlKey === pathSubstr;
}

// @ts-ignore
const SidebarMenu = ({ match, location }) => {
  // tslint:disable-next-line:no-console
  console.log('here is match ', location.pathname);
  const selectedKeys = location.pathname.substr(1);
  // tslint:disable-next-line:no-console
  // console.log("here is selectedkeys ", selectedKeys);
  // const defaultOpenKeys = selectedKeys.split('/')[1];
  const defaultOpenKeys = selectedKeys;
  // const defaultOpenKeys = "form/basic";
  // tslint:disable-next-line:no-console
  console.log('here is defaultOpenKeys ', defaultOpenKeys);

  return (
    <div className="SidebarMenu">
      <Nav
        // expandedStateText="expanded"
        // collapsedStateText="collapsed"
        selectedKey={defaultOpenKeys}
        expandButtonAriaLabel="Expand or collapse"
        styles={{
          root: {
            height: '100%',
            overflowY: 'auto',
            width: '100%'
          }
        }}
        groups={[
          {
            links: [
              {
                icon: 'Home',
                key: 'home',
                name: 'Home',
                url: '#'
              },
              {
                icon: 'Page',
                key: 'sample',
                name: 'Sample Page',
                url: '/sample'
              },
              /*{
                                isExpanded: getFirstStr('page', selectedKeys.split('/')[0]),
                                key: 'page',
                                links: [
                                    {
                                        /!*icon: "Page",*!/
                                        key: 'page1',
                                        name: 'Page 1',
                                        url: '/page1',

                                    },
                                ],
                                name: 'Pages',
                                url: 'page',

                            },*/
              {
                isExpanded: getFirstStr('data-display', selectedKeys.split('/')[0]),
                key: 'data-display',
                links: [
                  {
                    key: 'data-display/dialog',
                    name: 'Dialog',
                    url: '/data-display/dialog'
                  },
                  {
                    key: 'data-display/message-bar',
                    name: 'MessageBar',
                    url: '/data-display/message-bar'
                  },
                  {
                    key: 'data-display/spinner',
                    name: 'Spinner',
                    url: '/data-display/spinner'
                  }
                ],
                name: 'Data Display',
                url: 'data-display/dialog'
              },
              {
                isExpanded: getFirstStr('form', selectedKeys.split('/')[0]),
                key: 'form',
                links: [
                  {
                    key: 'form/button',
                    name: 'Button',
                    url: '/form/button'
                  },
                  {
                    key: 'form/checkbox',
                    name: 'Checkbox',
                    url: '/form/checkbox'
                  },
                  {
                    key: 'form/choicegroup',
                    name: 'ChoiceGroup',
                    url: '/form/choicegroup'
                  },
                  {
                    key: 'form/datepicker',
                    name: 'DatePicker',
                    url: '/form/datepicker'
                  },
                  {
                    key: 'form/dropdown',
                    name: 'Dropdown',
                    url: '/form/dropdown'
                  },
                  {
                    key: 'form/slider',
                    name: 'Slider',
                    url: '/form/slider'
                  },
                  {
                    key: 'form/textfield',
                    name: 'TextField',
                    url: '/form/textfield'
                  },
                  {
                    key: 'form/toggle',
                    name: 'Toggle',
                    url: '/form/toggle'
                  }
                ],
                name: 'Forms',
                url: '/form/button'
              },
              {
                isExpanded: getFirstStr('table', selectedKeys.split('/')[0]),
                key: 'table',
                links: [
                  {
                    key: 'table/simple',
                    name: 'Simple',
                    url: '/table/simple'
                  },
                  {
                    key: 'table/grouped',
                    name: 'Grouped',
                    url: '/table/grouped'
                  }
                ],
                name: 'Tables',
                url: 'table'
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default SidebarMenu;
