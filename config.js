const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cypherilerioluwa@gmail.com" // no need
global.location="Africa/Nigeria." // no need


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/basanzietech/shakira-md";
global.gurl  =process.env.GURL  || "https://wa.me/2349151066117";
global.website=process.env.GURL || "https://wa.me/2349151066117" ; 
global.THUMB_IMAGE = process.env.IMAGE || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2349121881343" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349121881343";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349151066117";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4" // set images here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349151066117, 2349121881343";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349151066117, 2349121881343";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://shakira-md-qr-code.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09PV3pteUNIR09JME9tMlhPZ296Wk1JYysybGtqdTJycjIzcE1WT0duZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHBDMXRsaEx0cnlEbkl2V2h1ZEpxeUxzMHFwQTRZdHAva1JOSGs2UlNEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q1NtK2lyWnVxUzFQMDhnYlVtS3U2NW91NDB3TEVoenZqelZaN3JwMG5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WWJVWllPMlZUb1ZROTkzOUpWM2NBRFJBenk5Skw0c0RoUmpSYk9EKzJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHT3o4ckVlYWRWa2l3bUtGMW5WOG5WRWRGN2l3YzBuUGdobjdvUVlLRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd4T2t3eEk5Z0IzMWdwVkZRSWdRVjFZM0lINUdXeXk5WDNzcWxJNy9Od0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0U5YTQrWWxpc28xZTl3SlBkY0J4dUo0cGNHT1YzSG4zSU5TTWFiOUdXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzlhWUJRdlZSd0FnUXkxZE5XbmRvT2VOUFZJYWV3WCtJb2FUbGFBZFFocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFlM1p1OFVLMmRob0p6ZnZTNlpqTFRSaDEwaWhSUUFaSjBrdW5tRmtRMzdPa01uNnR5MFhtRm96QUpmcmovd25aSlg0K3VJQXdXZjNOZVhJRW1tY0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJFYXF1UjNiTUNzTHFGRTNPK3RNdytESnoyMGRadzJncDhabTRybkVTUXRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTEwNjYxMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FDOTM1RDZENDEyNDBGM0JDQzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTk1NTQwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTEFsMF9DYzlTb2FwdVhuRG9fWHJ6dyIsInBob25lSWQiOiJlOTY2MzA0Yy00MTZjLTQ5ODEtODE5Zi0xNWVlMjFjYWRjMmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEF0dGduUWphdzdYS081YjJtdmN2T1R3MDdnPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTTUzcE9jcW9pSHAzRTY5WkNqeXR6NnpNVkU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTGo3RTBRdk0yZHNnWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTa2orYUd2N21CdFhEMVI5SkRabFk3T2k3eG1PNXhEVGpKT0JpaXZKOG1BPSIsImFjY291bnRTaWduYXR1cmUiOiJxYjV0MzdhSW41YjFYTTdSNXZaS3crNUlmZk16Y0tiaDhFSHpzSDk4L1pNd1pqN0NUQnZtTFFxLzFZOGhITE1nWmRsWTdpNUpmMzcvcERlbDl4a1BDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU1hNb1ovZnUvWVUzaVFKc1hvaUNueHRVdFJxT3Z5YzdhYldyVFRnT3BzY3VYWkI1V2hDMW1PL01CZ1paRnF3RHFFN0xodTdLNVB3bklyVFAyc2NvQ1E9PSJ9LCJtZSI6eyJpZCI6IjIzNDkxNTEwNjYxMTc6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3lwaGVyIMOMbMOpcsOtb2zDundhIPCfjYDwn5KO4p2k77iP8J+TjCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUxMDY2MTE3OjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVwSS9taHIrNWdiVnc5VWZTUTJaV096b3U4Wmp1Y1EwNHlUZ1lvcnlmSmcifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTk1NTQwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLQ0cifQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "© ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀 | ÀKÀNDÉ-MIDÉ-BOT md" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Cypher Ilerioluwa-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Cypher Ilerioluwa ᴛᴇᴄʜ』*\n youtube.com/@cypherilerioluwa"),
 
  author : process.env.PACK_AUTHER|| "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",
  packname: process.env.PACK_NAME || "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",
  botname : process.env.BOT_NAME  || "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",
  ownername:process.env.OWNER_NAME|| "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
