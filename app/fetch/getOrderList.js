/**
 * Created by echoLC on 2017/8/6.
 */
export function getOrderList (username) {
    console.log(`用户为${username}的订单信息`)
    return [
        {
            id: Date.now(),
            img: '/static/img/list-hamburger_icon.jpg',
            title: '汉堡大王',
            count: 3,
            price: '167',
            commentState: 0
        },
        {
            id: Date.now(),
            img: '/static/img/list-stick-food_icon.jpg',
            title: '麻辣香锅',
            count: 1,
            price: '188',
            commentState: 0
        },
        {
            id: Date.now(),
            img: '/static/img/list-hotel_icon.jpg',
            title: '好吃自出餐',
            count: 2,
            price: '110',
            commentState: 2
        }
    ]
}
