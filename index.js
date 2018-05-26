const PubSub = require('@google-cloud/pubsub');

const projectId = 'content-eng-qa';
const pubsubClient = new PubSub({
    projectId: projectId,
    keyFilename: 'keyfile.json'

});

exports.helloPubSub = (event, callback) => {
    const pubsubMessage = event.data;
    console.log("Inside the pubsub trigger");
    context=event.context;
    console.log(context);
    console.log(pubsubMessage);
    const name = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';

    console.log(`Hello, ${name}!`);

    callback();
};