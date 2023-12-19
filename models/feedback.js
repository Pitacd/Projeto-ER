const path = require('path');
const fs = require('fs');

function storageFeedback(about, classification, comment){
    let buffer = fs.readFileSync(path.join(__dirname, 'feedback.json'),'utf8');
    let feedbacks = JSON.parse(buffer);

    let newFeedback = {
        feedbackAbout: about,
        feedbackClassification: classification,
        feedbackComment: comment
    }

    feedbacks.push(newFeedback);
    let updatedJSON = JSON.stringify(feedbacks, null, 2);
    fs.writeFileSync(path.join(__dirname, 'feedback.json'), updatedJSON);
}

module.exports = {storageFeedback};