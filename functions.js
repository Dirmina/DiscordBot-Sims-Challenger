exports.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.setField = (categoryName, description) => 
    field = {
        name: categoryName,
        value: description
    }
exports.searchAndSetAMissingGuildRole = (roles, guild, roleName) => {
    if (!roles.cache.find( role => role.name === roleName)) {
        return guild.roles.create( {
            data : {
                name : roleName,
                color: "#42f566"
            }
        })
    }
}
