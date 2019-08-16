import Parse from '../api/parse';
import store from 'store';
import expirePlugin from 'store/plugins/expire';
store.addPlugin(expirePlugin);

export default {
  state: {
    // vlog: { info: { title: '' }, replies: [] },
    vlog: store.get(`VLOG~https://www.bilibili.com/video/av61604041`),
    awards: [{ title: '奖品名称', count: 1 }],
    setting: {
      once: false,
      fans: false,
      include: '',
      time_end: null,
      exclude: []
    }
  },
  actions: ({ model, setState }) => ({
    changeTitle(title) {
      const { vlog } = model();
      setState({ vlog: Object.assign({}, vlog, { info: { title: title } }) });
    },
    async catchVlogAsync(url) {
      try {
        let vlog = store.get(`VLOG~${url}`);
        if (!vlog) {
          vlog = await Parse.Cloud.run('catch_vlog', { url });
          let expiration = new Date().getTime() + 10000 * 60000;
          store.set(`VLOG~${url}`, vlog, expiration);
        }
        setState({ vlog });
      } catch (error) {
        console.log(error);
      }
    }
  })
};
