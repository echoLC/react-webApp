/**
 * Created by echoLC on 2017/7/26.
 */
import { get } from './get'

export function getAdData() {
    // const result = get('/api/homead')
    // return result
    return [
        {
            title: '暑假5折',
            img: 'http://localhost:5000/static/img/ad-ice-cream_icon.jpg',
            link: 'https://github.com/echoLC'
        },
        {
            title: '特价出国',
            img: 'http://localhost:5000/static/img/ad-travel_icon.jpg',
            link: 'https://github.com/echoLC'
        },
        {
            title: '亮亮车',
            img: 'http://localhost:5000/static/img/ad-car_icon.jpg',
            link: 'https://github.com/echoLC'
        },
        {
            title: '学钢琴',
            img: 'http://localhost:5000/static/img/ad-piano_icon.jpg',
            link: 'https://github.com/echoLC'
        },
        {
            title: '电影',
            img: 'http://localhost:5000/static/img/ad-film_icon.jpg',
            link: 'https://github.com/echoLC'
        },
        {
            title: '旅游热线',
            img: 'http://localhost:5000/static/img/ad-tour-around_icon.jpg',
            link: 'https://github.com/echoLC'
        }
    ]
}

export function getListData(page) {
    // const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    // return result
    if(page > 10){
        return {
            hasMore: false,
            data: []
        }
    }

    if(page%2 === 0){
        return  {
            hasMore: true,
            data: [
                {
                    img: 'http://localhost:5000/static/img/list-hamburger_icon.jpg',
                    title: '汉堡大大',
                    subTitle: '叫我汉堡大大，还你多彩口味',
                    price: '28',
                    distance: '120m',
                    number: '389'
                },
                {
                    img: 'http://localhost:5000/static/img/list-hotel_icon.jpg',
                    title: '北京开源饭店',
                    subTitle: '[望京]自助晚餐',
                    price: '98',
                    distance: '140m',
                    number: '689'
                },
                {
                    img: 'http://localhost:5000/static/img/business-suit_icon.jpg',
                    title: '服装定制',
                    subTitle: '原价xx元，现价xx元，可修改一次',
                    price: '1980',
                    distance: '160',
                    number: '106'
                },
                {
                    img: 'http://localhost:5000/static/img/list-marrage_icon.jpg',
                    title: '婚纱摄影',
                    subTitle: '免费试穿，拍照留念',
                    price: '2899',
                    distance: '160',
                    number: '58'
                },
                {
                    img: 'http://localhost:5000/static/img/list-stick-food_icon.jpg',
                    title: '麻辣串串烧',
                    subTitle: '双人免费套餐等你抢购',
                    price: '0',
                    distance: '160',
                    number: '1426'
                }
            ]
        }
    }else {
        return {
            hasMore: true,
            data: [
                {
                    img: 'http://localhost:5000/static/img/list-garage-kit_icon.jpg',
                    title: '初二手办联盟',
                    subTitle: '工匠精心制作，良心价',
                    price: '368',
                    distance: '170m',
                    number: '783'
                },
                {
                    img: 'http://localhost:5000/static/img/list-diamond_icon.jpg',
                    title: '永金珠宝钻戒',
                    subTitle: '最实惠的价格，买到最满意的珠宝',
                    price: '5000-30000',
                    distance: '210m',
                    number: '120'
                },
                {
                    img: 'http://localhost:5000/static/img/list-peking-duck_icon.jpg',
                    title: '上水烤鸭',
                    subTitle: '不吃不知道，一吃忘不掉',
                    price: '30',
                    distance: '120m',
                    number: '534'
                },
                {
                    img: 'http://localhost:5000/static/img/list-cake_icon.jpg',
                    title: '巧克力蛋糕',
                    subTitle: '6英寸，适合2-3人',
                    price: '28',
                    distance: '150m',
                    number: '420'
                },
                {
                    img: 'http://localhost:5000/static/img/list-mixed-rice_icon.jpg',
                    title: '罗氏拌饭',
                    subTitle: '最正宗的韩国口味',
                    price: '25',
                    distance: '120m',
                    number: '621'
                },
            ]
        }
    }
}

export function getSearchData(page, cityName, category, keyword){
    console.log(`page: ${page}`);
    console.log(`cityName: ${cityName}`);
    console.log(`category: ${category}`);
    console.log(`keyword: ${keyword}`);
    return {
        hasMore: true,
        data: [
            {
                img: 'http://localhost:5000/static/img/list-garage-kit_icon.jpg',
                title: '初二手办联盟',
                subTitle: '工匠精心制作，良心价',
                price: '368',
                distance: '170m',
                number: '783'
            },
            {
                img: 'http://localhost:5000/static/img/list-diamond_icon.jpg',
                title: '永金珠宝钻戒',
                subTitle: '最实惠的价格，买到最满意的珠宝',
                price: '5000-30000',
                distance: '210m',
                number: '120'
            },
            {
                img: 'http://localhost:5000/static/img/list-peking-duck_icon.jpg',
                title: '上水烤鸭',
                subTitle: '不吃不知道，一吃忘不掉',
                price: '30',
                distance: '120m',
                number: '534'
            },
            {
                img: 'http://localhost:5000/static/img/list-cake_icon.jpg',
                title: '巧克力蛋糕',
                subTitle: '6英寸，适合2-3人',
                price: '28',
                distance: '150m',
                number: '420'
            },
            {
                img: 'http://localhost:5000/static/img/list-mixed-rice_icon.jpg',
                title: '罗氏拌饭',
                subTitle: '最正宗的韩国口味',
                price: '25',
                distance: '120m',
                number: '621'
            },
        ]
    }
}
