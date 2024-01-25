const { Client, GuildMember, GatewayIntentBits } = require("discord.js");
const { Player, QueryType } = require("discord-player");
const { joinVoiceChannel } = require('@discordjs/opus');
const config = require("./config.json");

const indie88_url = "http://opml.radiotime.com/Tune.ashx?id=s204349"

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages]
});

client.login(config.token);
client.once('ready', () => {
  console.log('Hello!');
  channel = client.channels.cache.get("1148257830537797756");
  console.log(channel)

  // const connection = await connectToChannel("1148257830537797756");
  // connection.subscribe(player);
});

client.on("error", console.error);
client.on("warn", console.warn);


//discord.js and client declaration
client.on('messageCreate', message => {
    if(message.content === '!join') {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
})
