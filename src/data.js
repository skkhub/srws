//  关卡地图设置
export let chapterMap = {
  //  地图单元格长度
  "dl": 24

}

export let robots = [
  {
    icon: 'robot1.jpg',
    name: '塞巴斯塔',
    HP: 4000,
    EN: 140,
    move: 7,
    orientation: ['A', 'A', 'B', 'A'], // 地形适应能力，对应 空、陆、海、宇
    weapons: [
      {
        name: '闪光飞弹',
        power: 1800,
        range: [1, 7], // 射程
        attr: ['p', 'b'] // 属性：移动后可攻击，光束类武器
      }
    ],
    abilities: [
      {
        name: '变形'
      },
      {
        name: '分身',
        require: {
          morale: 130 // 触发条件为气力130以上
        }
      }
    ],
    parts: [] // 安装在机体的增强零件
  },
  {
    icon: 'robot2.jpg',
    name: '高达Z',
    HP: 3800,
    EN: 160,
    move: 6,
    orientation: ['D', 'A', 'C', 'A'], // 地形适应能力，对应 空、陆、海、宇
    weapons: [
      {
        name: '高能光束步枪',
        power: 3000,
        range: [2, 7], // 射程
        attr: ['b'] // 属性：移动后可攻击，光束类武器
      }
    ],
    abilities: [
      {
        name: '变形'
      }
    ],
    parts: [] // 安装在机体的增强零件
  }
]

export let position = [
  [3, 5],
  [4, 7]
]
