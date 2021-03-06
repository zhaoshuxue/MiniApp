const Puzzle = require("./h5puzzle.js");
Page({
  data: {
    imgPoints: [],
    imgArr: ['	https://highness-1-1253922088.cos.ap-beijing.myqcloud.com/zhao/puzzle.png ','../../src/images/quanyecha.jpg', '../../src/images/haidao.jpg', '../../src/images/mingren1.jpg', '../../src/images/qilongzhu1.jpg', '../../src/images/quanye.jpg'],
    imgUrl: '../../src/images/quanyecha.jpg',
    levelArr: [{
        id: 2,
        text: '弱智'
      },
      {
        id: 3,
        text: '简单'
      },
      {
        id: 4,
        text: '普通'
      },
      {
        id: 5,
        text: '困难'
      },
      {
        id: 6,
        text: '变态'
      },
      {
        id: 7,
        text: '无语'
      },
      {
        id: 8,
        text: '天才'
      },
      {
        id: 9,
        text: '疯子'
      },
      {
        id: 10,
        text: '想死'
      },
      {
        id: 11,
        text: '已死'
      }
    ],
    WIDTH: 0,
    HEIGHT: 0,
    width: 0,
    height: 0,
    status: false,
    trans: 0,
    currentX: 0,
    currentY: 0,
    currentPX: 0,
    currentPY: 0,
    type0: 4
  },
  onReady() {
    let _this = this;

    new Puzzle(this);
  },
  getType(e) {
    this.setData({
      trans: -this.data.WIDTH,
      type0: e.currentTarget.dataset.type
    })
    this.puzzle = new Puzzle(this, {
      type: e.currentTarget.dataset.type
    })
  },
  getUrl(e) {
    this.setData({
      trans: -this.data.WIDTH * 2,
      imgUrl: e.currentTarget.dataset.url
    })
  }
})