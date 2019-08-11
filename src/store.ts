import { init } from '@rematch/core';
import { intl } from './models/intl';
import { common } from './models/common';

const store = init({
  models: {
    intl,
    common
  }
});
export { store };
