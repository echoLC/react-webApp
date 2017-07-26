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

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}
