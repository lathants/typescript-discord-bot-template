/* Imports */
import Discord, { PartialTextBasedChannel, Partials } from 'discord.js';
import dotenv from 'dotenv';
import readCommands from './src/readCmds';
import runCommand from './src/runCmds';
import createCmds from './src/createCmds';
import runEvents from './src/runEvents';
dotenv.config();

/* File Imports */



/* Initialization */

export type GroupNames = 
| "Moderation"
| "Misc"
| "Fun"
| "Utility";



export const client = new Discord.Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMessageReactions', 'GuildMessageTyping', 'GuildMembers', 'DirectMessages', 'GuildBans', 'GuildInvites', 'GuildModeration', 'GuildEmojisAndStickers', 'GuildVoiceStates'],
    partials: [Partials.Message, Partials.Reaction]
});




/* Startup */

client.on('ready', async () => {
    console.log(`Client - ${client.user?.tag}: LOGGED IN`);
    await createCmds(client);
    await runEvents(client);
    runCommand(client, await readCommands());
})

client.on('error', err => {
    console.log(err)
})




client.login(process.env.TOKEN);

// NOTHING IN THIS FILE SHOULD BE CHANGED. ONLY DO SO IF YOU KNOW WHAT YOU ARE DOING.

