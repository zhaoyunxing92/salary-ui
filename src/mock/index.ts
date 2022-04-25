import Mock from 'mockjs'

Mock.mock('/mock/applet/list/v1', 'post', {
    "total": 20,
    "page": 1,
    "data|15": [{
        "id": "62375282bffe368feecf486a",
        "agentId": 1244553273,
        "corpId": "dingc7c5220402493357f2c783f7214b6d69",
        "name|1-3": "letter",
        "icon": "https://static-legacy.dingtalk.com/media/lADPDfmVQafoVxrMyMzI_200_200.jpg",
        "desc": "消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送",
        "key": "dingkjy4w80esdwgjuyo",
        "ompLink": "",
        "homePageLink": "https://www.dingtalk.com/eapp/update?mini_app_scheme=dingtalk%3A%2F%2Fdingtalkclient%2Faction%2Fopen_micro_app%3FpVersion%3D1%26packageType%3D1%26%26miniAppId%3D5000000000676405%26corpId%3Ddingc7c5220402493357f2c783f7214b6d69%26agentId%3D1244553273",
        "pcHomePageLink": "",
        "self": true,
        "status": 1,
        "createTime": 1647792770,
        "modifyTime": 0
    }]
})

Mock.mock('/mock/applet/v1/dingkjy4w80esdwgjuyo', 'get', {
    "id": "62375282bffe368feecf486a",
    "agentId": 1244553273,
    "corpId": "dingc7c5220402493357f2c783f7214b6d69",
    "name|1-3": "letter",
    "icon": "https://static-legacy.dingtalk.com/media/lADPDfmVQafoVxrMyMzI_200_200.jpg",
    "desc": "消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送消息推送",
    "key": "dingkjy4w80esdwgjuyo",
    "ompLink": "",
    "homePageLink": "https://www.dingtalk.com/eapp/update?mini_app_scheme=dingtalk%3A%2F%2Fdingtalkclient%2Faction%2Fopen_micro_app%3FpVersion%3D1%26packageType%3D1%26%26miniAppId%3D5000000000676405%26corpId%3Ddingc7c5220402493357f2c783f7214b6d69%26agentId%3D1244553273",
    "pcHomePageLink": "",
    "self": true,
    "status": 1,
    "createTime": 164779277000,
    "modifyTime": 0
})