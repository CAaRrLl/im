const cors = (host) => async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': host,
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Method': 'GET,POST,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    })
    return next();
}
module.exports = cors;
