const { Router } = require("express");

const {
    getChat,
    chatIndividual,
    chatGrupal,
} = require(`../controller/chatController`);

const chatRouter = Router();

chatRouter.get(`/`, getChat);
chatRouter.get(`/grupal`, chatGrupal);
chatRouter.get(`/individual`, chatIndividual);


module.exports = chatRouter;