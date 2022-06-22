/* Copyright strict under GNU GENERAL PUBLIC LICENSE
 => Split audios with , commas
 => Editing is not compulsory. If need to change audio, then edit
 
*/
const {AUDIO_DATA,SUDO} = require('../config');

var duration = 19998000

var audios = `https://i.imgur.com/ax6EwOi.mp4,https://i.imgur.com/4hjtW9h.png,https://i.imgur.com/MXGrE54.png,https://i.imgur.com/ax6EwOi.mp4,https://i.imgur.com/X8iuOkP.mp4,https://i.imgur.com/tnI2SR8.mp4,https://i.imgur.com/3xMn61m.mp4,https://i.imgur.com/J4o7x4v.mp4,https://i.imgur.com/iP2m08x.mp4,https://i.imgur.com/TxEuIoT.mp4,https://i.imgur.com/i48PXIO.mp4,https://i.imgur.com/aFiSnXr.mp4,https://i.imgur.com/ejCIYrh.mp4,https://i.imgur.com/ECRFsIB.mp4,https://i.imgur.com/Ip6DS4W.mp4,https://i.imgur.com/OUI5xGN.mp4,https://i.imgur.com/oPqarKo.mp4,https://i.imgur.com/SIMkxaM.mp4,https://i.imgur.com/ylmq8rb.mp4,https://i.imgur.com/u8fiCXb.mp4,https://i.imgur.com/HncFK5F.mp4,https://i.imgur.com/FrLp9AK.mp4,https://i.imgur.com/VOmOawi.mp4,https://i.imgur.com/EDJkmrf.mp4,https://i.imgur.com/6Xj5UXN.mp4,https://i.imgur.com/I6UXDHn.mp4,https://i.imgur.com/FMYVoid.mp4,https://i.imgur.com/dKYbNqt.mp4,https://i.imgur.com/sniwK4D.mp4,https://i.imgur.com/Vy3YAXI.mp4,https://i.imgur.com/UYjvi1L.mp4,https://i.imgur.com/RQifzWk.mp4,https://i.imgur.com/eYxrNUf.mp4,https://i.imgur.com/6QFiAoM.mp4,https://i.imgur.com/lAbt9ew.mp4,https://i.imgur.com/AcHHpqh.mp4,https://i.imgur.com/t7HKmDj.mp4,https://i.imgur.com/oJG0p1R.mp4,https://i.imgur.com/hCnMXIt.mp4,https://i.imgur.com/wduQUZ6.mp4,https://i.imgur.com/Ec1fHg6.mp4,https://i.imgur.com/ul9x6Fl.mp4,https://i.imgur.com/B6DuFxf.mp4,https://i.imgur.com/rTfVyTL.mp4,https://i.imgur.com/pWF1Wyf.mp4,https://i.imgur.com/f06QQMw.mp4,https://i.imgur.com/hrOA7SZ.mp4,https://i.imgur.com/iXCTeqC.mp4,https://i.imgur.com/prb6egI.mp4,https://i.imgur.com/j8vAgTm.mp4,https://i.imgur.com/u1VIily.mp4,https://i.imgur.com/O36QHKi.mp4,https://i.imgur.com/tZC4JKd.mp4,https://i.imgur.com/KganHHA.mp4,https://i.imgur.com/DVTRwBc.mp4,https://i.imgur.com/LqkVfhp.mp4,https://i.imgur.com/SJiFZUE.mp4,https://i.imgur.com/X8iuOkP.mp4,https://i.imgur.com/tnI2SR8.mp4,https://i.imgur.com/3xMn61m.mp4,https://i.imgur.com/J4o7x4v.mp4,https://i.imgur.com/iP2m08x.mp4,https://i.imgur.com/TxEuIoT.mp4,https://i.imgur.com/i48PXIO.mp4,https://i.imgur.com/aFiSnXr.mp4,https://i.imgur.com/ejCIYrh.mp4,https://i.imgur.com/ECRFsIB.mp4,https://i.imgur.com/Ip6DS4W.mp4,https://i.imgur.com/OUI5xGN.mp4,https://i.imgur.com/oPqarKo.mp4,https://i.imgur.com/SIMkxaM.mp4,https://i.imgur.com/ylmq8rb.mp4,https://i.imgur.com/u8fiCXb.mp4,https://i.imgur.com/HncFK5F.mp4,https://i.imgur.com/FrLp9AK.mp4,https://i.imgur.com/VOmOawi.mp4,https://i.imgur.com/EDJkmrf.mp4,https://i.imgur.com/6Xj5UXN.mp4,https://i.imgur.com/I6UXDHn.mp4,https://i.imgur.com/FMYVoid.mp4,https://i.imgur.com/dKYbNqt.mp4,https://i.imgur.com/sniwK4D.mp4,https://i.imgur.com/Vy3YAXI.mp4,https://i.imgur.com/UYjvi1L.mp4,https://i.imgur.com/RQifzWk.mp4,https://i.imgur.com/eYxrNUf.mp4,https://i.imgur.com/6QFiAoM.mp4,https://i.imgur.com/lAbt9ew.mp4,https://i.imgur.com/AcHHpqh.mp4,https://i.imgur.com/t7HKmDj.mp4,https://i.imgur.com/oJG0p1R.mp4,https://i.imgur.com/hCnMXIt.mp4,https://i.imgur.com/wduQUZ6.mp4,https://i.imgur.com/Ec1fHg6.mp4,https://i.imgur.com/ul9x6Fl.mp4,https://i.imgur.com/B6DuFxf.mp4,https://i.imgur.com/rTfVyTL.mp4,https://i.imgur.com/pWF1Wyf.mp4,https://i.imgur.com/f06QQMw.mp4,https://i.imgur.com/hrOA7SZ.mp4,https://i.imgur.com/iXCTeqC.mp4,https://i.imgur.com/prb6egI.mp4,https://i.imgur.com/j8vAgTm.mp4,https://i.imgur.com/u1VIily.mp4,https://i.imgur.com/O36QHKi.mp4,https://i.imgur.com/tZC4JKd.mp4,https://i.imgur.com/KganHHA.mp4,https://i.imgur.com/DVTRwBc.mp4,https://i.imgur.com/LqkVfhp.mp4,https://i.imgur.com/SJiFZUE.mp4`;
var tit = process.env.AUDIO_DATA.split(';')[0];
var art = process.env.AUDIO_DATA.split(';')[1];
var logo = process.env.AUDIO_DATA.split(';')[2];
const {getAudioBufferFromLink,addInfo,skbuffer} = require('raganork-bot')
const {readFileSync} = require('fs')
const {Module} = require('../main');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
Module({pattern: 'mention ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {return;}));
Module({on: 'text' ,fromMe: false}, (async (message, match) => {
var jids = audios.split(',').filter(link => link.includes('mp4'));
try {var men = message.mention[0].split('@')[0]} catch {return;}
if (message.mention && message.mention[0] && SUDO.includes(men)) {
getAudioBufferFromLink(jids[Math.floor(Math.random()*jids.length)],async function(audio) {
if (audio) {
try { var res = await addInfo('mention_msg.mp3',tit,art,'Raganork audio metadata',await skbuffer(logo)) } catch(e) { return await message.sendMessage('Error on parsing audio \n'+e); }
return message.client.sendMessage(message.jid, { audio: res,mimetype: 'audio/mp4',ptt: true }, { quoted: message.data })}
})}
}));
@wanda-maximof-wa-bot
