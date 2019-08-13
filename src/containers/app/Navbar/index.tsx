import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import * as React from 'react';
import './index.css';

function onSearchHandler(newValue: string): void {
  // console.log('value is ' + newValue)
}

function onFocusHandler(): void {
  // console.log('onFocus called')
}

function onBlurHandler(): void {
  // console.log('onBlur called')
}

function onChangeHandler() {
  // console.log('onChange called')
}

const NavBar = () => (
  <div className="NavBar">
    <div className="logo ms-font-xl">
      <strong>B站抽奖助手</strong>
    </div>
    {/* <div className="searchbox">
      <SearchBox
        placeholder="Search"
        onSearch={onSearchHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
    </div> */}
  </div>
);

export default NavBar;
