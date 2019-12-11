module.exports = function(req, res, next){
    console.log(`
    Time Stamp: [${new Date().toISOString}]
    Ip: ${req.ip}
    Protocol: ${req.protocol}
    Method: ${req.method}
    User-Agent: ${req.get('User-Agent')}
    Endpoint: ${req.url}
    `)
    next();
 
}