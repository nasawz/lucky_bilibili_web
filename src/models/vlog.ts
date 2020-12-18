import store from 'store';
import expirePlugin from 'store/plugins/expire';
import * as _ from 'lodash';
import uuid from 'uuid';
import { app } from '../lib/tcb';

// mock data start
// import { data } from './data';
// let expiration = new Date().getTime() + 10000 * 60000;
// store.set(`VLOG~https://www.bilibili.com/video/av61604041`, data, expiration);
// mock data end

store.addPlugin(expirePlugin);
export default {
  state: {
    vlog: { info: { title: '' }, replies: [] },
    // vlog: store.get(`VLOG~https://www.bilibili.com/video/av61604041`),
    awards: [{ title: `奖品名称`, count: 1, uuid: uuid.v1() }],
    setting: {
      once: false,
      fans: false,
      include: '',
      time_end: null,
      exclude: []
    }
  },
  actions: ({ model, setState }) => ({
    addAward() {
      let award = { title: `奖品名称`, count: 1, uuid: uuid.v1() };
      const { awards } = model();
      setState({ awards: _.concat(awards, [award]) });
    },
    removeAward(award) {
      const { awards } = model();
      setState({ awards: _.difference(awards, [award]) });
    },
    changeAward(award) {
      const { awards } = model();
      let awardsObj = _.keyBy(awards, 'uuid');
      awardsObj[award.uuid] = Object.assign({}, awardsObj[award.uuid], award);
      let newAwards = _.values(awardsObj);
      setState({ awards: newAwards });
    },
    changeOnce(flg) {
      const { setting } = model();
      setState({ setting: Object.assign({}, setting, { once: flg }) });
    },
    changeFans(flg) {
      const { setting } = model();
      setState({ setting: Object.assign({}, setting, { fans: flg }) });
    },
    changeInclude(str) {
      const { setting } = model();
      setState({ setting: Object.assign({}, setting, { include: str }) });
    },
    setTimeEnd(time) {
      const { setting } = model();
      setState({ setting: Object.assign({}, setting, { time_end: time }) });
    },
    clearTimeEnd() {
      const { setting } = model();
      setState({ setting: Object.assign({}, setting, { time_end: null }) });
    },
    addExclude(string) {
      const { setting } = model();
      let { exclude } = setting;
      setState({ setting: Object.assign({}, setting, { exclude: _.concat(exclude, [string]) }) });
    },
    removeExclude(string) {
      const { setting } = model();
      let { exclude } = setting;
      setState({
        setting: Object.assign({}, setting, { exclude: _.difference(exclude, [string]) })
      });
    },
    changeTitle(title) {
      const { vlog } = model();
      setState({ vlog: Object.assign({}, vlog, { info: { title: title } }) });
    },
    async catchVlogAsync(url) {
      try {
        let vlog = store.get(`VLOG~${url}`);
        if (!vlog) {
          const dataRes = await app
            .callFunction({
              name: 'catch-vlog',
              data: {
                url: url,
              },
            })
          vlog = dataRes.result
          let expiration = new Date().getTime() + 60000;
          store.set(`VLOG~${url}`, vlog, expiration);
        }
        setState({ vlog });
      } catch (error) {
        console.log(error);
      }
    }
  })
};
