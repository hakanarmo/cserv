const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By : JIMMY');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);

});
LOka.on('ready',  () => {

console.log('~~~~~~~~~~~~~~~~~~ By : JIMMY ~~~~~~~~~~~~~~~~~~~~~~~~'); 

console.log(`Logged in as  * [ "  JIMMY " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);

        

});
var prefix = "-"

LOka.on('message', message => {
     if (message.content === "crpic") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://i.imgur.com/0sQIdPH.jpg`)

}
});

LOka.on('message', message => {
     if (message.content === "crname") {
         LOka.guilds.forEach(m =>{
             m.setName(`Lunarium + IronHand BDO MENA`)
})
}
});

LOka.on('message', message => {
     

     if (message.content === "crrole") {
         LOka.guilds.forEach(m =>{
     m.createRole({
        name : "54",
        permissions :   [1],
        color : "#61c592"
    })
     m.createRole({
        name : "55",
        permissions :   [1],
        color : "#50a379"
    })
     m.createRole({
        name : "56",
        permissions :   [1],
        color : "#3a8860"
    })
    m.createRole({
        name : "57",
        permissions :   [1],
        color : "#2a744e"
    })
     m.createRole({
        name : "58",
        permissions :   [1],
        color : "#1f6441"
    })
    m.createRole({
        name : "59",
        permissions :   [1],
        color : "#145032"
    })
     m.createRole({
        name : "60",
        permissions :   [1],
        color : "#0b3a23"
    })
       m.createRole({
        name : "61",
        permissions :   [1],
        color : "#83dae4"
    })
     m.createRole({
        name : "62",
        permissions :   [1],
        color : "#70c7d1"
    })
    m.createRole({
        name : "63",
        permissions :   [1],
        color : "#5eb3bd"
    })
     m.createRole({
        name : "64",
        permissions :   [1],
        color : "#44939c"
    })
    m.createRole({
        name : "65",
        permissions :   [1],
        color : "#327981"
    })
     m.createRole({
        name : "66",
        permissions :   [1],
        color : "#235e64"
    })
     m.createRole({
        name : "67",
        permissions :   [1],
        color : "#1b5055"
    })
     m.createRole({
        name : "68",
        permissions :   [1],
        color : "#134044"
    })
    m.createRole({
        name : "69",
        permissions :   [1],
        color : "#0c383b"
    })
     m.createRole({
        name : "70",
        permissions :   [1],
        color : "#062325"
    })
    m.createRole({
        name : "71",
        permissions :   [1],
        color : "#89abfa"
    })
     m.createRole({
        name : "72",
        permissions :   [1],
        color : "#7999e2"
    })
      m.createRole({
        name : "73",
        permissions :   [1],
        color : "#6c89ca"
    })
     m.createRole({
        name : "74",
        permissions :   [1],
        color : "#566fa8"
    })
    m.createRole({
        name : "75",
        permissions :   [1],
        color : "#485f92"
    })
     m.createRole({
        name : "76",
        permissions :   [1],
        color : "#3c507c"
    })
    m.createRole({
        name : "77",
        permissions :   [1],
        color : "#30436d"
    })
     m.createRole({
        name : "78",
        permissions :   [1],
        color : "#27375c"
    })
     m.createRole({
        name : "79",
        permissions :   [1],
        color : "#1e2e52"
    })
     m.createRole({
        name : "80",
        permissions :   [1],
        color : "#12203f"
    })
    m.createRole({
        name : "81",
        permissions :   [1],
        color : "#c2a4ff"
    })
     m.createRole({
        name : "82",
        permissions :   [1],
        color : "#b191f0"
    })
    m.createRole({
        name : "83",
        permissions :   [1],
        color : "#9979d8"
    })
     m.createRole({
        name : "84",
        permissions :   [1],
        color : "#7d5fb9"
    })
       m.createRole({
        name : "85",
        permissions :   [1],
        color : "#6f52a8"
    })
     m.createRole({
        name : "86",
        permissions :   [1],
        color : "#604692"
    })
    m.createRole({
        name : "87",
        permissions :   [1],
        color : "#4c3675"
    })
     m.createRole({
        name : "88",
        permissions :   [1],
        color : "#3c2a5c"
    })
    m.createRole({
        name : "89",
        permissions :   [1],
        color : "#312050"
    })
     m.createRole({
        name : "90",
        permissions :   [1],
        color : "#241541"
    })
     m.createRole({
        name : "91",
        permissions :   [1],
        color : "#d3a1fa"
    })
     m.createRole({
        name : "92",
        permissions :   [1],
        color : "#be86eb"
    })
    m.createRole({
        name : "93",
        permissions :   [1],
        color : "#a271ca"
    })
     m.createRole({
        name : "94",
        permissions :   [1],
        color : "#8e61b3"
    })
    m.createRole({
        name : "95",
        permissions :   [1],
        color : "#7d52a0"
    })
     m.createRole({
        name : "96",
        permissions :   [1],
        color : "#6a428a"
    })
     m.createRole({
        name : "97",
        permissions :   [1],
        color : "#5b3877"
    })
     m.createRole({
        name : "98",
        permissions :   [1],
        color : "#4c2f64"
    })
    m.createRole({
        name : "99",
        permissions :   [1],
        color : "#3f2555"
    })
     m.createRole({
        name : "100",
        permissions :   [1],
        color : "#301942"
    })
     m.createRole({
        name : "101",
        permissions :   [1],
        color : "#800080"
    })
     m.createRole({
        name : "102",
        permissions :   [1],
        color : "#ff00ff"
    })
    m.createRole({
        name : "103",
        permissions :   [1],
        color : "#ff0000"
    })
     m.createRole({
        name : "104",
        permissions :   [1],
        color : "#a52a2a"
    })
    m.createRole({
        name : "105",
        permissions :   [1],
        color : "#808080"
    })
     m.createRole({
        name : "106",
        permissions :   [1],
        color : "#0000ff"
    })
     m.createRole({
        name : "107",
        permissions :   [1],
        color : "#ffa500"
    })
     m.createRole({
        name : "108",
        permissions :   [1],
        color : "#808000"
    })
    m.createRole({
        name : "109",
        permissions :   [1],
        color : "#00ffff"
    })
     m.createRole({
        name : "110",
        permissions :   [1],
        color : "#020202"
    })

           
})         
 
}
});
       
LOka.on('message', message => {
         if (message.content === "crtext") {
               LOka.guilds.forEach(m =>{
m.createChannel('welcome2', 'text');
m.createChannel('rules', 'text');
m.createChannel('live-stream', 'text');
m.createChannel('announcements', 'text');
m.createChannel('bot-spams', 'text');
m.createChannel('gallery2', 'text');
m.createChannel('general', 'text');
m.createChannel('gvg-request', 'text');
m.createChannel('guild-quests', 'text');
m.createChannel('archive', 'text');
m.createChannel('music', 'text');
m.createChannel('news', 'text');                   
m.createChannel('excuses', 'text');
m.createChannel('bdo-calculator', 'text');
m.createChannel('market', 'text');
m.createChannel('test', 'text'); 
m.createChannel('rs-updates', 'text');
m.createChannel('ask-here', 'text');
m.createChannel('logs', 'text');

})
}
});

LOka.on('message', message => {
         if (message.content === "crvoice") {
                 LOka.guilds.forEach(m =>{
m.createChannel('🎧 Group ❶', 'voice');
m.createChannel('🎧 Group ❷', 'voice');
m.createChannel('🎧 Group ❸', 'voice');
m.createChannel('🎧 Group ❹', 'voice');
m.createChannel('🎧 Group ❺', 'voice');
m.createChannel('🎧 Group ❻', 'voice');
m.createChannel('🎧 Group ❼', 'voice');
m.createChannel('🎧 Group ❼', 'voice');
m.createChannel('🎧 Group ❽', 'voice');
m.createChannel('🎧 Group ❾', 'voice');
m.createChannel('🎧 Group ❿', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('🎧 Music • ♫♪♪', 'voice');
m.createChannel('💤 Away', 'voice');

})
}

});



LOka.login(process.env.BOT_TOKEN);
