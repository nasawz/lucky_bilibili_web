/// <reference types="react-scripts" />
declare module '*.less';

interface StoreJsAPI {
  set(key: string, value: any, exp: any): any;
}
