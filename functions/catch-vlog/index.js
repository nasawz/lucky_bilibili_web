const _ = require("lodash");
const axios = require("axios");

exports.main = async function (event) {
  const { url } = event;
  return new Promise((resolve, reject) => {

    try {
      let group = url.match(/(BV\w{10})/);
      let bvid = group[1]

      axios.get(`https://api.bilibili.com/x/player/v2?cid=123406103&bvid=${bvid}`).then(async ({ data }) => {
        let { aid } = data.data
        let replies = [];

        let getReplay = (aid, pn) => {
          return new Promise((resolve, reject) => {
            axios
              .get(
                `http://api.bilibili.com/x/v2/reply?pn=${pn}&type=1&oid=${aid}&sort=0`
              )
              .then(({ data }) => {
                // console.log(data);
                replies = _.concat(replies, data.data.replies);
                resolve(data);
              });
          });
        };
        let getVlogInfo = aid => {
          return new Promise((resolve, reject) => {
            axios
              .get(`https://api.kaaass.net/biliapi/video/info?id=${aid}`)
              .then(({ data }) => {
                resolve(data.data);
              });
          });
        };
        let pd = await getReplay(aid, 1);
        let info = await getVlogInfo(aid);
        let { size, count } = pd.data.page;
        let pageNum = Math.ceil(count / size);
        for (let index = 2; index <= pageNum; index++) {
          // console.log(index);
          await getReplay(aid, index);
        }
        replies = _.map(replies, r => {
          delete r.replies;
          return r;
        });
        resolve({ info, replies })
      })
    } catch (error) {
      reject(error)
    }
  })
}
