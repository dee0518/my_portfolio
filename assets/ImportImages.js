function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item).default; 

        return item
    });
    
    return images;
}

const chatbotImages = importAll(require.context('./image/chatbot', false, /\.(png|jpe?g|svg)$/));

exports.chatbotImages = chatbotImages