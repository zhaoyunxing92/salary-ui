import Mock from 'mockjs'

Mock.mock('/mock/field/list/v1', 'get', {
    'data|8': [{
        'key|8': '@character("lower")',
        'type|1': ['string','number','date'],
        'name': '@cname',
        'exps': 'SUM(baseSalary,commission)',
    }]
})

Mock.mock('/mock/applet/v1/dingkjy4w80esdwgjuyo', 'get', {
    'id': '62375282bffe368feecf486a',
    'agentId': 1244553273,
    'corpId': 'dingc7c5220402493357f2c783f7214b6d69',
    'name|1-3': 'letter',
    'icon': 'https://static-legacy.dingtalk.com/media/lADPDfmVQafoVxrMyMzI_200_200.jpg',
    'desc': '消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送',
    'key': 'dingkjy4w80esdwgjuyo',
    'ompLink': '',
    'homePageLink': 'https://www.dingtalk.com/eapp/update?mini_app_scheme=dingtalk%3A%2F%2Fdingtalkclient%2Faction%2Fopen_micro_app%3FpVersion%3D1%26packageType%3D1%26%26miniAppId%3D5000000000676405%26corpId%3Ddingc7c5220402493357f2c783f7214b6d69%26agentId%3D1244553273',
    'pcHomePageLink': '',
    'self': true,
    'status': 1,
    'createTime': 164779277000,
    'modifyTime': 0
})