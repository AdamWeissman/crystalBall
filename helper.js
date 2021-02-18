const { theHashes } = require("./allTheHashes")

function parseUserQuery(theQuery, hashes = theHashes) {
    const loveRegEx = new RegExp(/love|date|roman|special someone|cute|handsome|pretty|beautiful/gmi);
    const moneyRegEx = new RegExp(/stocks|bank|stonks|wsb|money|economy|personal finance|cash|wealth|rich|poor|middle class|invest|bet|loan|credit|debt|crypto|gamb|job|work|born|raise|promotion/gmi);
    const fitnessRegEx = new RegExp(/health|fitness|work out|working out|workout|brolic|body|exercise|shape|muscles|fat|weight|stronger|diet|physical|training|pounds/gmi)
    const codersRegEx = new RegExp(/code|code work|hack|program|javascript|salesforce|sfcc|artic fox|design patterns/gmi)
    if (loveRegEx.test(theQuery)) {
        return hashes[1]
    } else if (fitnessRegEx.test(theQuery)) {
        return hashes[3]
    } else if (codersRegEx.test(theQuery)) {
        return hashes[4]
    } else if (moneyRegEx.test(theQuery)) {
        return hashes[2]
    } else {
        return hashes[0]
    }
}

module.exports = {
    parseUserQuery
}
