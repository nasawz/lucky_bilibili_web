import { init } from '@rematch/core';
import { intl } from './models/intl';
import { common } from './models/common';

import { setModel } from 'flooks';
import vlog from './models/vlog';
setModel('vlog', vlog);

const store = init({
  models: {
    intl,
    common
  }
});
export { store };
