//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hKTWlENmFFeFJNTmhMM0RpL0pnNnVmemlNQXdxbVJhYmwxOVU3bkxYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxhenlSMS9tS0ZjTElrdmlaMlA3M1A2bHNTckwvQXpFUWhmUDVTWXgzaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSjBOYlNtaDU3QUpqVXU3UUJOVGRyWEhzQi9YSzBxLytncTVlMzUrNzAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWm9nUGcwQ1c4ekduVkE2RGJOTldGc08yYkIrclhUeXNIZ0UxNGZabEVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNWTYzdGowdXlTbExlNUdFR0s0QllNSGdQa3ZjK0RvdHBndGdMM3lLWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVuTm5JTGVlV2tFSEpxeXQxK0I2UGRpYklmRjZuZzdtZXNKU0orcFpLaUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1ZOG5wNno3TS9FblVzV2QxSW5FaXRsWFplSUhvNzF5VmN4WGJlc2EyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemtPemF6L2d1M04rdkVJRi95ZjFZZUFjUHNOQmI1OUhmQ2IvTGxIQ2R4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJSythakpZUEJ3bGNIeVRidG1ZSG5UWmJaWnNaQnJDWTNQMlp5anRDLzVMNHMzR3haMnpHMTU2VmNIVlNGak9ENzlvb0ZmNS9DbGIzOVBpQVN0bUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJoWGlZNDlnTG14ckxOOXVKVlNrWUQ5Tm11YUN2WURGYVROazBSdzRmQlNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE1NzkzMjY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNFNUE3REUxOEZBQzQ1NzM4QjNFQ0Y1ODJCQkExQ0VFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk1MTk0NDR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE1NzkzMjY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIzQzZDM0E1NjA2Q0VDMzRENDg3MkVGQjRBODIzQjJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk1MTk0NDR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE1NzkzMjY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyQUZBMTkxQ0Q2QzIyNDA4QTUzNTMzNUEyNjBCRjNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk1MTk0NDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE1NzkzMjY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRBRDUxRTg2RDdEOTFGMTM1MDk0RTMxNDA4MTczNUIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk1MTk0NDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik84Y0QwYUpDVDZlM1NSUVBReUJHSUEiLCJwaG9uZUlkIjoiYjM0NGI0NDUtNzBmZC00ZGZiLWI3NzEtMmFhNzMxNDFiOTUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNzUWY4Tmt1Yk1NVUYyWlJqMXl3Qk50eFQ5UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcXIxSGxRS1AzeVZmZUVRTFNkRjM0emJnb2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUTNEQkNMTkUiLCJtZSI6eyJpZCI6Ijk0NzE1NzkzMjY0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic2hhbWluZGFyYXZpc2hrYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWZKZ3FJQkVNVysyYmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRDRCck9uc0N3NC9ISEl5RjVNSVdOTk56Qnc2THdqUld1RzZGdkJiUEx6QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSW51dy9NOE5TK1BXZ3pvU0dNUmxDZU83VE9UVG5lbnBOMkdlcjZHWjBCaWJOb2d3Uk8vTEltLzYwTzBHMEtSYUNkaFhxeUMySmlUSE9oaitnaW41RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9Xb1NWQTRpcDl4cmtrYTF4Y2FncFh2MlhSZHQ0V1BQeDBmUEdWT2wvWExBMHRLT1hCWVh2ZkpUSjFnVnZKSzRmcWozSlFWb3BIWHVUam9WeUZ0R0NRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTU3OTMyNjQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRK0FhenA3QXNPUHh4eU1oZVRDRmpUVGN3Y09pOEkwVnJodWhid1d6eTh3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NTE5NDQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwrcCJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
