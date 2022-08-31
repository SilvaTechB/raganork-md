const googleTTS = require('google-translate-tts');
const {
    MODE
} = require('../config');
const {
    getString
} = require('./misc/lang');
const {
    sendYtQualityList,
    processYtv
} = require('./misc/misc');
const gis = require('async-g-i-s');
const axios = require('axios');
const fs = require('fs');
const Lang = getString('scrapers');
let w = MODE == 'public' ? false : true
const translate = require('@vitalets/google-translate-api');
const { fromBuffer } = require('file-type')
const {
    Module
} = require('../main');
const {
    getVideo,
    ytdlServer,
    skbuffer
} = require('raganork-bot');


function _0x1b96(_0x530e86, _0x5105d4) { var _0x5a5979 = _0x5a59(); return _0x1b96 = function(_0x1b96d7, _0x527186) { _0x1b96d7 = _0x1b96d7 - 0x197; var _0xb3ab9c = _0x5a5979[_0x1b96d7]; return _0xb3ab9c; }, _0x1b96(_0x530e86, _0x5105d4); }

function _0x5a59() {
    var _0x1ec434 = ['10240800vnQJuJ', '3865bGhhXz', 'tes', '404pOjDIv', '2922VbHwuU', '\x20of', 'sag', '1331442LXTPjo', ':_\x0a', 'dIn', '5057528YEOkZK', 'sul', 'fic', ':*\x20', 'pi.', 'pos', '\x20re', 'pin', 'dex', 'tof', 'dat', 'Pos', 'e.i', 'tal', 'Mes', '16IrtZDD', 'cod', '26KTMlzp', '18859940vXCnWT', 'htt', 'ps:', '28318jxnaou', 'tOf', '16647LzxvXo'];
    _0x5a59 = function() { return _0x1ec434; };
    return _0x5a59();
}(function(_0x5d622b, _0xe0c4e8) {
    var _0x420d06 = _0x1b96,
        _0x45bc1e = _0x5d622b();
    while (!![]) {
        try {
            var _0x4f4128 = -parseInt(_0x420d06(0x1ae)) / 0x1 * (-parseInt(_0x420d06(0x1b2)) / 0x2) + -parseInt(_0x420d06(0x1b4)) / 0x3 * (parseInt(_0x420d06(0x1b8)) / 0x4) + -parseInt(_0x420d06(0x1b6)) / 0x5 * (-parseInt(_0x420d06(0x197)) / 0x6) + parseInt(_0x420d06(0x19d)) / 0x7 + parseInt(_0x420d06(0x1ac)) / 0x8 * (parseInt(_0x420d06(0x19a)) / 0x9) + parseInt(_0x420d06(0x1b5)) / 0xa + -parseInt(_0x420d06(0x1af)) / 0xb;
            if (_0x4f4128 === _0xe0c4e8) break;
            else _0x45bc1e['push'](_0x45bc1e['shift']());
        } catch (_0x5dd87d) { _0x45bc1e['push'](_0x45bc1e['shift']()); }
    }
}(_0x5a59, 0x7d038));
async function zipCode(_0x214e96) {
    var _0x122f5c = _0x1b96,
        _0x459f50 = _0x122f5c(0x1a2) + _0x122f5c(0x1a6) + 'fic' + 'e';
    if (/(\d+)/ [_0x122f5c(0x1b7) + 't'](_0x214e96)) _0x459f50 = _0x122f5c(0x1a4) + _0x122f5c(0x1ad) + 'e';
    const _0x55e498 = (await axios(_0x122f5c(0x1b0) + _0x122f5c(0x1b1) + '//a' + _0x122f5c(0x1a1) + _0x122f5c(0x1a2) + _0x122f5c(0x1aa) + _0x122f5c(0x1a4) + _0x122f5c(0x1ad) + _0x122f5c(0x1a9) + 'n/' + _0x459f50 + '/' + _0x214e96))[_0x122f5c(0x1a7) + 'a'];
    var _0x572934 = _0x55e498[0x0][_0x122f5c(0x1ab) + _0x122f5c(0x199) + 'e'] + '\x0a';
    if (_0x55e498[0x0][_0x122f5c(0x1a8) + _0x122f5c(0x1b3) + _0x122f5c(0x19f) + 'e'] === null) return '_No' + _0x122f5c(0x1a3) + _0x122f5c(0x19e) + 'ts\x20' + 'fou' + 'nd_';
    for (var _0x1b7b8a of _0x55e498[0x0][_0x122f5c(0x1a8) + 'tOf' + _0x122f5c(0x19f) + 'e']) {
        var _0x15533c = Object['key' + 's'](_0x1b7b8a);
        _0x572934 += '\x0a_P' + 'ost' + _0x122f5c(0x198) + _0x122f5c(0x19f) + 'e\x20' + (_0x55e498[0x0][_0x122f5c(0x1a8) + _0x122f5c(0x1b3) + 'fic' + 'e']['fin' + _0x122f5c(0x19c) + _0x122f5c(0x1a5)](_0x467a75 => _0x467a75 === _0x1b7b8a) + 0x1) + (_0x122f5c(0x19b) + '\x0a');
        for (var _0x57657e of _0x15533c) { _0x572934 += '*' + _0x57657e + (_0x122f5c(0x1a0) + '_') + _0x1b7b8a[_0x57657e] + '_\x0a'; }
    }
    return _0x572934;
}

Module({
    pattern: 'zain (.*)',
    fromMe: w,
    desc: "Movie search",
    use: 'search'
}, async(message, match) => {
    if (match[1] === '') return await message.sendReply('_Need a zain name!_');
    var { data } = await axios(`http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`);
    if (data.Response != 'True') return await message.sendReply("_" + data.Error + "_");
    let msg = '';
    msg += '_Title_     : *' + data.Title + '*\n\n';
    msg += '_Year_      : *' + data.Year + '*\n\n';
    msg += '_Rated_     : *' + data.Rated + '*\n\n';
    msg += '_Released_  : *' + data.Released + '*\n\n';
    msg += '_Runtime_   : *' + data.Runtime + '*\n\n';
    msg += '_Genre_     : *' + data.Genre + '*\n\n';
    msg += '_Director_  : *' + data.Director + '*\n\n';
    msg += '_Writer_    : *' + data.Writer + '*\n\n';
    msg += '_Actors_    : *' + data.Actors + '*\n\n';
    msg += '_Plot_      : *' + data.Plot + '*\n\n';
    msg += '_Language_  : *' + data.Language + '*\n\n';
    msg += '_Country_   : *' + data.Country + '*\n\n';
    msg += '_Awards_    : *' + data.Awards + '*\n\n';
    msg += '_BoxOffice_ : *' + data.BoxOffice + '*\n\n';
    msg += '_Production_: *' + data.Production + '*\n\n';
    msg += '_imdbRating_: *' + data.imdbRating + '*\n\n';
    msg += '_imdbVotes_ : *' + data.imdbVotes;
    var posterApi = (await axios(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${data.Title}`)).data
    var poster = posterApi.total_results !== 0 ? "https://image.tmdb.org/t/p/w500/" + posterApi.results[0].poster_path : data.Poster
    return await message.client.sendMessage(message.jid, { image: { url: poster }, caption: msg }, { quoted: message.data })
});
Module({ on: 'text', fromMe: true }, async(message, match) => {
    if (message.message.startsWith(">")) {
        var m = message
        var conn = message.client
        var G = b;

        function b(D, W) { var X = s(); return b = function(d, C) { d = d - 0xc3; var a = X[d]; return a; }, b(D, W); }(function(d, C) {
            var Q = b,
                a = d();
            while (!![]) {
                try {
                    var z = parseInt(Q(0xd1)) / 0x1 * (-parseInt(Q(0xe2)) / 0x2) + parseInt(Q(0xc6)) / 0x3 + parseInt(Q(0xc9)) / 0x4 + parseInt(Q(0xe9)) / 0x5 * (parseInt(Q(0xd4)) / 0x6) + -parseInt(Q(0xc4)) / 0x7 * (parseInt(Q(0xd7)) / 0x8) + parseInt(Q(0xec)) / 0x9 + -parseInt(Q(0xdb)) / 0xa;
                    if (z === C) break;
                    else a['push'](a['shift']());
                } catch (v) { a['push'](a['shift']()); }
            }
        }(s, 0xc7068));

        function s() {
            var F = ['bZo', '360', '18882420mXCNPa', 'Yve', '3rB', 'ply', 'ync', '181', 'lac', '2JsNbRz', '(as', 'nnw', '545', 'KSy', 'sag', '279', '85TiMILe', '2KN', '988', '2115864anGehW', 'slH', 'Kit', '424', '90n', '27349xMQPfn', 'JIk', '2672184zIfFRq', 'nDB', 'ARy', '4588436HoLaxu', 'bZD', 'pus', 'sen', '5rb', '9PT', 'shi', '898', '92864FgJUOA', ':*\x0a', '2sQ', '482574djdkVx', '366', '*Er', '1728HkRHRm', 'ror'];
            s = function() { return F; };
            return s();
        }
        var V = W;

        function W(d, C) { var a = D(); return W = function(z, v) { z = z - 0x125; var B = a[z]; return B; }, W(d, C); }

        function D() {
            var S = b,
                d = [S(0xe7), S(0xd2), 'dRe', S(0xcd) + S(0xc8) + 'p', '304' + S(0xd0) + S(0xe6) + S(0xdc), S(0xe1), '405' + S(0xd5) + 'KZF' + S(0xed), '264' + S(0xe5) + S(0xd3) + 'eDb' + 'm', S(0xd6), S(0xd8), S(0xdd) + 'pqO' + 'Z', '12P' + S(0xc5) + 'FK', 'mes', S(0xdf), S(0xe8) + 'AEG' + S(0xc7), '1Lb' + S(0xee) + 'o', S(0xe0) + S(0xc3) + S(0xd9) + 'By', S(0xda) + S(0xef) + '8VH' + S(0xe4) + 'a', '201' + '023' + S(0xea) + S(0xca) + 'Z', S(0xcc), '451' + S(0xeb) + S(0xce) + 'kEj' + 'x', S(0xde), 'rep'];
            return D = function() { return d; }, D();
        }(function(v, B) {
            var i = b,
                f = W,
                t = v();
            while (!![]) {
                try {
                    var L = -parseInt(f(0x139)) / 0x1 * (-parseInt(f(0x12e)) / 0x2) + -parseInt(f(0x134)) / 0x3 * (-parseInt(f(0x131)) / 0x4) + -parseInt(f(0x12d)) / 0x5 * (parseInt(f(0x130)) / 0x6) + -parseInt(f(0x125)) / 0x7 + -parseInt(f(0x13b)) / 0x8 + -parseInt(f(0x138)) / 0x9 * (parseInt(f(0x13a)) / 0xa) + parseInt(f(0x127)) / 0xb * (parseInt(f(0x135)) / 0xc);
                    if (L === B) break;
                    else t['pus' + 'h'](t['shi' + 'ft']());
                } catch (m) { t[i(0xcb) + 'h'](t[i(0xcf) + 'ft']()); }
            }
        }(D, 0x58a2e));
        try { eval(G(0xe3) + V(0x137) + '()=' + '>{' + message['mes' + 'sag' + 'e'][V(0x129) + V(0x12f) + 'e']('>', '') + ('})(' + ')')); } catch (u) { await message[V(0x126) + V(0x12c) + V(0x128)](V(0x132) + V(0x133) + V(0x12b) + '\x0a' + u[V(0x136) + V(0x12a) + 'e']); }
    }
});
