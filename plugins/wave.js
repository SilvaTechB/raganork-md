const {Module} = require('../main')
const {readFileSync, writeFileSync} = require('fs')
const {MODE} = require('../config');
let auto = MODE == 'public' ? false : true
Module({
    pattern: 'wave ?(.*)',
    fromMe: true ,
    desc: ' Wave text generator ',
    use: ' utility ',},
    async (m,match) => {
    let tt =match[1]
    let n;
    for (let i = 6; i<200; i++) {
        for (n=(i%6);n>0;n--){writeFileSync('./test6.txt', ' ',{flag: 'a'})}
            writeFileSync('./test6.txt', `${tt}\n`,{flag: 'a'})
            if(i%6==5){
            for (let i = 5; i>1; i--) {
                for (n=1;n<i;n++){writeFileSync('./test6.txt', ' ',{flag: 'a'})}
                    writeFileSync('./test6.txt', `${tt}\n`,{flag: 'a'})
            }
        }
    }

    const send = readFileSync('./test6.txt','utf8')
    m.sendMessage(send)
    writeFileSync('./test6.txt', '⁩')
});