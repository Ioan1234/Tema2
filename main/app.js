function addTokens(input, tokens){
    if(typeof input==='string')
    {
        if(input.length>=6)
        {
            x = tokens.find(token => (typeof token.tokenName !== 'string'))
            if (x === undefined) {
                if (input.includes('...')) {
                    out = tokens.find(token => (typeof token.tokenName === 'string'));
                    x = input.replace('...','');
                    a = x.concat('${'+out.tokenName+'}');
                    return a;
                }
                else {
                    return input;
                }
            }
            else {
                throw new Error('Invalid array format');
            }
        }
        else {
            throw new Error('Input should have at least 6 characters');
        }

    }
    else {
        throw new Error('Invalid input');
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;
