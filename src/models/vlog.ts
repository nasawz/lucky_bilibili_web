import Parse from '../api/parse';
import store from 'store';
import expirePlugin from 'store/plugins/expire';
store.addPlugin(expirePlugin);

export default {
  state: {
    vlog: { info: { title: '' }, replies: [] },
    awards: [{ title: '奖品名称', count: 1 }]
  },
  actions: ({ model, setState }) => ({
    // increment() {
    //   const { count } = model(); // Get own model
    //   setState({ count: count + 1 }); // Update own state
    // },
    // decrement() {
    //   const { count } = model();
    //   setState({ count: count - 1 });
    // },
    changeTitle(title) {
      const { vlog } = model();
      setState({ vlog: Object.assign({}, vlog, { info: { title: title } }) });
    },
    async catchVlogAsync(url) {
      try {
        let vlog = store.get(`VLOG~${url}`);
        if (!vlog) {
          vlog = await Parse.Cloud.run('catch_vlog', { url });
          let expiration = new Date().getTime() + 10 * 60000;
          store.set(`VLOG~${url}`, vlog, expiration);
        }
        setState({ vlog });
      } catch (error) {
        console.log(error);
      }
    }
  })
};
