const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1020573995562700844')
    .setType('WATCHING')
    .setURL('https://youtu.be/dQw4w9WgXcQ')
    .setState()
  
    .setName('Trenzor')
    .setDetails('Discord Bot Developer')
    
    .setAssetsLargeImage()
    .setAssetsLargeText('visit this')
    .setAssetsSmallImage()
    .setAssetsSmallText('discord')
    
    .addButton('My Server', 'https://discord.gg/2e3XSBtVyH')
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" });
})

client.login(process.env.TOKEN)
