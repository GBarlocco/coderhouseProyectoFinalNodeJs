const getChat = (req, res) => res.render('chat');

//const getLoginChatGrupal = (req, res) => res.render('loginChatGrupal');

const chatIndividual = (req, res) => {
    const userLogout = req.user.username;
    return res.redirect(`/chat?aliasName=${userLogout}`);
};

const chatGrupal = (req, res) => {
    const userLogout = req.user.username;
    //const { aliasName } = req.body;
    return res.redirect(`/chat?aliasName=${userLogout}`);
};


module.exports = {
    getChat,
    chatIndividual,
    chatGrupal,
};
