function receivesAFunction (callback){
    callback()
}

function returnsANamedFunction () {
    const Hello = function (){
        return 'Hello'
    }
    return Hello
}

function returnsAnAnonymousFunction () {
    return function () {
        return 'Hello'
    }
}