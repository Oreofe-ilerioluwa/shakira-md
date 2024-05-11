const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cypherilerioluwa@gmail.com" // no need
global.location="Goba,Tanzania." // no need


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/basanzietech/shakira-md";
global.gurl  =process.env.GURL  || "https://wa.me/2349121881343";
global.website=process.env.GURL || "https://wa.me/2349121881343" ; 
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


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUg1N1ppN1lIQTZxZnVCV243T0ZMR0VyNGhBVEVEUXBZUVBxbmFlNVhVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGlTWFJ6Q3hXTzhsaWFsbm1iNE83TFZsMElCbkhVVDJ5RTV2QktrWWNrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQjBQOWpENFZ2bWJjZGlhRGRSZDE2TVNuRFNmWnJ3LzhiVnlHR1NuRjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaK3dydWpiTC9zbkdzQlhZc3phWEcyUmxPYmMrenZiMDJVbWRKazVWVEd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNUThDZnpwT3dwTWN2YXFnMnZaUU1hbTBkTFUvN3ZHbElwMEg2NHVDMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0aCtiMi9aenVYQU55SnFueTZDQ0JtTTRmYVRsTFkzbnJqbEtLVkZpaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURuWTFBWHViMUMxRGNuYTQ4bHFLN0JVR2k0Q0lMR050YTZDVmErbFZuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFAwQlNnSEhzSGFOZ29oZkhtSzJXSmlOWlpMMC8yQ1d4S0FSMG91U0hRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHWmRiVHpBeWNSTDU1WVJPemQ3OG1xc1FJbHJxSklaZzNSODA0U3h4ZjF3dlZsUkpFOE5CbmJhSTF5VDcybGFzRTZkWjFWQWZqdC9EM253bDRVcmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJXSXk3R1BEU1NNcXFVOEtzNDBnWXZLYXpWZ2pETDhwRUJzaWtORWJjd2ZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzY0NhbUN3alRndU9USElmXzFTa0RnIiwicGhvbmVJZCI6IjA4ZTAwMzQxLWUzYjMtNDdlNy05ZjBhLWVlZTE1YmMyNTRiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZWo0YzRGTk5qVXUyajdmZnk1ZUtPenZtNVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitsQldPb0xSV3UvRHYyWkZPL2NzZ2hVODJQVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3RXg2MEdFT3k1K3JFR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNraithR3Y3bUJ0WEQxUjlKRFpsWTdPaTd4bU81eERUakpPQmlpdko4bUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZzY1ZUZGRqU3MrWXByQjRxai9MQktVOTBDRUJ0WGtNc1NxM1ZEbnRLZzAzemZyZURvWGJKMU5abUJiUzM1NmdUVGlNSkp5OWhuWjFFa1Zwd1h5V0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqZDRsZjRoK29oNDRIZzNxSTB5M1RMaXFLQU14dUFjdDkycEFmTUR5TVM4U0dVUFdlNk9CREhyRzkwdmc1cHoyZmJBRTNkUG9BdUQ1NHFFMlBaMnRndz09In0sIm1lIjp7ImlkIjoiMjM0OTE1MTA2NjExNzoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDeXBoZXIgw4xsw6lyw61vbMO6d2Eg8J+NgPCfko7inaTvuI/wn5OMIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTEwNjYxMTc6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXBJL21ocis1Z2JWdzlVZlNRMlpXT3pvdThaanVjUTA0eVRnWW9yeWZKZyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1Mzc5NDM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlEbyJ9"  // PUT your SESSION_ID 


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
