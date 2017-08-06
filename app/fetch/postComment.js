/**
 * Created by echoLC on 2017/8/6.
 */
export function postComment(id, comment) {
    console.log(`评价的商品ID为${id}`);
    console.log(`评价的内容为${comment}`);
    return {
        errorCode: 0,
        msg: 'ok'
    }
}