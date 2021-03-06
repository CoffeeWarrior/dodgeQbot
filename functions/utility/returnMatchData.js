const { getRankedMatchList } = require("../GET/matches/getRankedMatchList");
const { getMatchesData } = require("../GET/matches/getMatchesData")
//this function will call getMatchesData and getRankedMatchList. 
//this function will return the match data of a specified encryptedAccountID. 
//exported from bot.js to reduce uglyness in .then() calls

const returnMatchData = (encryptedAccountID) => {
    return getRankedMatchList(encryptedAccountID)
    .then(matchList => getMatchesData(matchList, encryptedAccountID))
}

exports.returnMatchData = returnMatchData;