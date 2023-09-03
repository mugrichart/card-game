let arr_fx = ['0c', '0g', '0k', '0m', '1c', '1g', '1k', '1m', '2c', '2g', '2k', '2m','3c', '3g', '3k', '3m', '4c', '4g', '4k', '4m', '5c', '5g', '5k', '5m', '6b', '6r'] 
let arr_remain = arr_fx.slice(0); //no matter why
let arr_remain_play = arr_fx.slice(0); // check whether it excludes the leading card at the end
let arr_rmv = []
let arr_2 = ['c', 'g', 'k', 'm']
let arr_22 = 'cgkm';
let range;
let winSound = new Audio('utuntu/winSound.mp3')
let failSound = new Audio('C:/Users/ProBook/Desktop/AmakarataGame/utuntu/fail.mp3')
let cardB= 'utuntu/cardB.jpg'
let iyasavye_type;
let iyasavye;
let iyasavye_value;
function gucanga() {
    let arr_1 = ['0', '1', '2', '3', '4'];
    let num_1 = Math.round(Math.random() * 4);
    let num_2 = Math.round(Math.random() * 3);
    arr_rmv.push(num_1 * 4 + num_2)
    iyasavye_value = num_1 * 4 + num_2
    iyasavye_type = arr_2[num_2]
    iyasavye = arr_1[num_1] + arr_2[num_2]
    arr_remain.splice(iyasavye_value, 1)
    return 'pic/0' + arr_1[num_1] + arr_2[num_2] + '.png';
}
document.getElementById('msg').src = gucanga();

let arr = [];
let item_range = arr_remain.length-1
let sum = ["one", "two", "three", "four", "ten","twenty", "thirty", "fourty",];
function kugabura() {
    let num;
    for (let i = 0; i < 8; i++) {
        num = Math.round(Math.random() * item_range) // here as well, we need to find a way of reducing this randomness.
        arr_rmv.push(num)                                                                    
        item_range--
        if (i > 3) {
            arr_remain_play.splice(arr_remain_play.indexOf(arr_remain[num]), 1) //it should remove every card after it is played by the player. I am still working on this.
            arr.push(arr_fx.indexOf(arr_remain[num]))
        } else {
            document.getElementById(sum[i]).src = 'pic/0' + arr_remain[num] + '.png'
        }
        arr_remain.splice(num, 1);
    }
}
kugabura();

let flag;
function rps(playerChoice) { // the removal should happen here.
    if (flag == true) {
        flag = false
        swish.play();
        let id = playerChoice.src;
        document.getElementById(playerChoice.id).src = ''
        document.getElementById('player').src = id;
        let index = document.getElementById('comp').src.length 
        if (document.getElementById('comp').src == '' || document.getElementById('comp').src[index - 1] == 'l') {
            second();
            setTimeout(() => {
                document.getElementById('comp').src = 'pic/0' + arr_fx[arr[numer]] + '.png'; swish.play();
                document.getElementById(sum[numer + 4]).src=''
            }, 1000)
        }
        console.log(arr_fx[arr[numer]])
        setTimeout(() => { reinitialization(playerChoice.id, document.getElementById('player').src.slice(47), document.getElementById('comp').src.slice(47))},2000)
    }
}
let numer; 
arr.sort(function (a, b) { return a - b }); 
for (let i = 0; i < 4; i++) { document.getElementById(sum[4 + i]).src = 'pic/0' + arr_fx[arr[i]] + '.png' }

function ikaraMbi() {
    range = arr.length;
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < range; i++) { document.getElementById(sum[4 + i]).src = 'pic/0' + arr_fx[arr[i]] + '.png' }
    if (range < 4) { for (let i = 7; i > 3 + range; i--){ document.getElementById(sum[i]).src = '' } }
    if (range == 1) { numer = 0; return numer }
    for (let i = 0; i < range; i++) {
        if (arr[i] < 16 && arr_2[arr[i] % 4] != iyasavye_type) {
            numer = i; console.log(arr[i])
            return numer
        }
    }
    let yo;
    if (Math.round(Math.random() * 1) == 0) { yo = true } else { yo = false }
    for (let m = 0; m < 2; m++) {
        for (let i = 0; i < range; i++) {
            if(arr[i] < 24){
                    if (yo == true) {
                    if (arr_2[arr[i] % 4] != iyasavye_type) {
                        let arrie = []
                        for (let u = 0; u < arr_remain_play.length; u++) {
                            if (arr_remain_play[u][1] == arr_2[arr[i] % 4] && arr_remain_play[u][0] < Math.floor(arr[i] / 4)) {
                                arrie.push('o')
                                break;
                            }
                        } if (arrie.length == 0) { numer = i; yo = 'may'; console.log(arr[i]);  return numer }
                    }
                }
                else if (yo == false) {
                    if (arr_2[arr[i] % 4] == iyasavye_type && arr[i] < 8) {
                        numer = i 
                        yo = 'may'; console.log(arr[i])
                        return numer
                    }
                }
            }
        }
        yo = !yo
    }
    for (let i = 0; i < range; i++) {
        if (arr_2[arr[i] % 4] != iyasavye_type && arr[i] < 24) {
            numer = i; console.log(arr[i])
            return numer
        }
    }
    for (let i = 0; i < range; i++) {
        if (arr[i] < 16) { numer = i; return numer}
    }
    for (let i = 0; i < range; i++) {
        if (arr[i] == 24 && (iyasavye_type == 'c' || iyasavye_type == 'm')) { numer = i; console.log(arr[i]); return numer } else if (arr[i] == 25 && (iyasavye_type == 'g' || iyasavye_type == 'k')) { numer = i; console.log(arr[i]); return numer}
    }
    for (let i = 0; i < range; i++) {
        if (arr[i] < 24) { numer = i; return numer}
    }
    numer = 0; console.log(0); return numer
}


function second() {
    
    range = arr.length
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < range; i++) { document.getElementById(sum[4 + i]).src = 'pic/0' + arr_fx[arr[i]] + '.png' } 
    if (range < 4) { for (let i = 7; i > 3+range ; i--){document.getElementById(sum[i]).src = ''}}
    let thing = document.getElementById('player').src.slice(47);
    if (arr_remain.length == 1) {
        if (range == 1) { numer = 0; return numer }
        for (let i = 0; i < range; i++){
            console.log(arr[i])
            if (15 < arr[i] && arr[i] < 24 && thing[5]!= 6 && (arr[i] > thing[5] || (thing[6] != iyasavye_type)) && arr_2[arr[i] % 4] == iyasavye_type) {
                
                let arrie = []
                console.log(arr_remain_play)
                for (let u = 0; u < arr_remain_play.length; u++){
                    if (    (arr_remain_play[u][1] == arr_2[arr[i] % 4] && arr_remain_play[u][0] < Math.floor(arr[i] / 4)) || (arr_remain_play[u][0] > 15 &&(arr_remain_play[u][1]!= iyasavye_type || arr_remain_play[u][0] < Math.floor(arr[i] / 4))) || ((arr_remain_play[u] == '6b' &&(iyasavye_type == 'c' || iyasavye_type == 'm')) || (arr_remain_play[u] == '6r' &&(iyasavye_type == 'g' || iyasavye_type == 'k')))    ){
                        arrie.push('o')
                        break;
                    }
                }if (arrie.length == 0) {
                    numer = i; return numer
                }
            }
        }
    }
    if (thing[5] > 3) {
        for (let i = 0; i < range; i++) {
            if (arr[i] < 24) {
                if (arr[i] > thing[5] * 4 + arr_22.indexOf(thing[6]) && arr_2[arr[i] % 4] == thing[6]) {
                    numer = i; console.log(arr[i])
                    return numer
                }
            } else {
                if (arr[i] == 24) {
                    if (thing[6] == 'g' || thing[6] == 'k') {
                        if (iyasavye_type != 'g' && iyasavye_type != 'k') {
                            numer = i; console.log(arr[i]); return numer
                        }
                    }
                } else if (arr[i] == 25) {
                    if (thing[6] == 'c' || thing[6] == 'm') {
                        if (iyasavye_type != 'c' && iyasavye_type != 'm') {
                            numer = i; console.log(arr[i])
                            return numer
                        }
                    }
                }
            }
        }
        for (let i = 0; i < range; i++){
            if (thing[5] < 6) {
                if (arr_2[arr[i] % 4] == iyasavye_type && arr[i] < 24 && thing[6] != iyasavye_type){
                   numer = i; console.log(arr[i])
                    return numer
                }else if (arr[i] == 24) {
                        if (iyasavye_type == 'g' || iyasavye_type == 'k') {
                            numer = i; console.log(arr[i])
                            return numer
                        }
                }else if (arr[i] == 25) {
                        if (iyasavye_type == 'c' || iyasavye_type == 'm') {
                            numer = i; console.log(arr[i])
                            return numer
                        }
                }
            }
            if (thing[6] == 'b' && (iyasavye_type == 'c' || iyasavye_type == 'm')) {
                 if (arr_2[arr[i] % 4] == iyasavye_type || arr[i] ==25) {
                    numer = i; console.log(arr[i])
                    return numer
                }
            }else if (thing[6] == 'r' && (iyasavye_type == 'g' || iyasavye_type == 'k')) {
                 if (arr_2[arr[i] % 4] == iyasavye_type || arr[i] == 24) {
                     numer = i; console.log(arr[i])
                    return numer
                }
            }
        }
        ikaraMbi()
    }
    else if (thing[6] != iyasavye_type) {
        for (let i = 0; i < range ; i++) {
            if (arr[i] < 24) {
                if (arr_2[arr[i] % 4] == thing[6]) {
                    if (arr[i] > 15 && arr[i] > thing[5]) {
                        numer = i; console.log(arr[i])
                        return numer
                    }
                }
            }else {
                if (arr[i] == 24) {
                    if (thing[6] == 'g' || thing[6] == 'k') {
                        if (iyasavye_type != 'g' && iyasavye_type != 'k') { 
                            numer = i; console.log(arr[i])
                            return numer
                        }
                    }
                }else{
                    if (thing[6] == 'c' || thing[6] == 'm') {
                        if (iyasavye_type != 'c' && iyasavye_type != 'm') {
                            numer = i; console.log(arr[i])
                            return numer
                        }
                    }
                }
            }
        }
        ikaraMbi()
    }
    ikaraMbi()
}

let twatanguye = Math.round(Math.random() * 1);
if (twatanguye == 0) { flag = true; document.getElementById('zero').innerHTML = 'Play' } else { flag = false; document.getElementById('zero').innerHTML = 'PC is playing...'; ikaraMbi(); setTimeout(() => { document.getElementById(sum[numer + 4]).src = ''; document.getElementById('comp').src = 'pic/0' + arr_fx[arr[numer]] + '.png'; document.getElementById('zero').innerHTML = 'Now you can play';flag=true }, 1500)}
let thing_comp;
let thing_player;
let cash = new Audio("utuntu/cash.mp3")
let swish = new Audio("utuntu/swish.m4a")
let aww = new Audio("utuntu/aww.mp3")
let sound;
function reinitialization(pC, thing_player_p, thing_comp_p){
    thing_player = thing_player_p
    thing_comp = thing_comp_p
    if (document.getElementById('player').src != '' && document.getElementById('comp').src != '') {
        evaluation();
        twatanguye = 2; console.log(arr_remain_play)
        document.getElementById('zero').innerHTML = message; sound.play()
        arr_rmv.push(thing_player[5] * 4 + arr_22.indexOf(thing_player[6])); 
        arr_rmv.push(thing_comp[5] * 4 + arr_22.indexOf(thing_comp[6]));
        console.log(thing_player[5] * 4 + arr_22.indexOf(thing_player[6]))
        arr_remain_play.splice(arr_remain_play.indexOf(thing_player.slice(5,7)),1)
        arr.splice(numer, 1);
        document.getElementById(sum[4 + numer]).src = ''
        arr.sort(function (a, b) { return a - b });
        console.log(arr_remain_play)
        if (app == 'approved' && arr_remain.length != 0 ) { // cardB here means we don't need to redo cardB up
            let nam = Math.round(Math.random() * item_range); item_range--; document.getElementById(pC).src = 'pic/0' + arr_remain[nam] + '.png'; arr_rmv.push(nam); arr_remain.splice(nam,1);
            if (arr_remain.length == 0) {
                document.getElementById(sum[4 + numer]).src = cardB; arr.push(iyasavye_value); arr_remain_play.splice(arr_remain_play.indexOf(arr_fx[iyasavye_value]), 1)
            }
            else {
                let nam = Math.round(Math.random() * item_range); item_range--; document.getElementById(sum[4 + numer]).src = 'pic/0' + arr_remain[nam] + '.png';
                arr.push(arr_fx.indexOf(arr_remain[nam]))
                arr_rmv.push(nam); arr_remain.splice(nam, 1); arr_remain_play.splice(arr_remain_play.indexOf(arr_remain[nam]),1)
            }
        }
        else if(app == !'approved' && arr_remain.length != 0 ) {
            let nam = Math.round(Math.random() * item_range); item_range--; document.getElementById(sum[4 + numer]).src = 'pic/0' + arr_remain[nam] + '.png';
            arr.push(arr_fx.indexOf(arr_remain[nam]))
            arr_rmv.push(nam); arr_remain.splice(nam, 1); arr_remain_play.splice(arr_remain_play.indexOf(arr_remain[nam]),1)
            if (arr_remain.length == 0) {document.getElementById(pC).src = 'pic/0' + iyasavye + '.png'}
            else { let nam = Math.round(Math.random() * item_range); item_range--; document.getElementById(pC).src = 'pic/0' + arr_remain[nam] + '.png'; arr_rmv.push(nam); arr_remain.splice(nam,1)}
        }
        let see = arr.length != 0
        if (see == true && app == !'approved') { ikaraMbi() }
        setTimeout(() => {
            document.getElementById('player').src = ''; document.getElementById('comp').src = '';
            if (app == 'approved' && see) { document.getElementById('zero').innerHTML = 'Play'; flag = true }
            else if(see == true){
                flag = false; document.getElementById('zero').innerHTML = 'PC is playing...'; document.getElementById(sum[numer + 4]).src = ''; document.getElementById('comp').src = 'pic/0' + arr_fx[arr[numer]] + '.png'; swish.play(); document.getElementById('zero').innerHTML = 'Now you can play'; flag = true
            } else {
                for (let i = 0; i < player_win.length; i++){
                    if (player_win[i] > 15) { player_count++ }
                }
                for (let i = 0; i < comp_win.length; i++){
                    if (comp_win[i]>15){comp_count++}
                }
                if (player_count > comp_count) { winSound.play(); document.getElementById('zero').innerHTML = 'You won' } else if (player_count < comp_count) { failSound.play(); document.getElementById('zero').innerHTML = 'You lost' }
                else if (player_count == comp_count) {
                    player_count = 0; comp_count = 0
                    for (let i = 0; i < player_win.length; i++){
                        player_count += values[Math.floor(player_win[i]/4)]
                    }
                    for (let i = 0; i < comp_win.length; i++){
                        comp_count += values[Math.floor(comp_win[i]/4)]
                    }
                    if (player_count > comp_count) { winSound.play(); document.getElementById('zero').innerHTML = 'You won' } else if (player_count < comp_count) { failSound.play(); document.getElementById('zero').innerHTML = 'You lost' }
                    else{document.getElementById('zero').innerHTML = 'You drew'}
                }
            }
        }, 1500)
    }
}
let player_win = [];
let values = [0,2,3,4,0,1,2]
let player_count = 0
let player_nul = []
let special_numer;
let comp_win = [];
let comp_count = 0
let comp_nul = [];
let app;
let message;
function player_reward() {
    app = 'approved'; message = 'You are winning'; sound = cash; if (thing_player[6] == 'b'){player_win.push(24)}else if(thing_player[6] == 'r'){player_win.push(25)} else{player_win.push(thing_player[5] * 4 + arr_22.indexOf(thing_player[6]))}; player_win.push(arr[numer])
}
function comp_reward() {
    app = !'approved'; message = 'You are losing'; sound = aww; if (thing_player[6] == 'b') { comp_win.push(24) } else if (thing_player[6] == 'r') { comp_win.push(25) } else { comp_win.push(thing_player[5] * 4 + arr_22.indexOf(thing_player[6])) }; comp_win.push(arr[numer])
}

function evaluation() {
    if (thing_comp[5] == 6 || thing_player[5] == 6) {
        if (thing_player[6] == 'b') {
            if (thing_comp[6] == 'g' || thing_comp[6] == 'k' || iyasavye_type == 'g' || iyasavye_type == 'k' || ((twatanguye == 0 || app == 'approved') && ((iyasavye_type =='c' && thing_comp[6]=='m')|| (iyasavye_type=='m'&& thing_comp[6]=='c')))){player_reward()}else{comp_reward()}
        }
        else if (thing_player[6] == 'r'){
            if (thing_comp[6] == 'c' || thing_comp[6] == 'm'|| iyasavye_type=='c'|| iyasavye_type=='m'|| ((twatanguye==0 || app == 'approved') && ((iyasavye_type=='g'&& thing_comp[6]=='k')||(iyasavye_type=='k'&&thing_comp[6]=='g')))){player_reward()}else{comp_reward()}
        }
        else if (thing_comp[6] == 'b') { 
            if(thing_player[6]=='g'|| thing_player[6]=='k'|| iyasavye_type=='g'|| iyasavye_type=='k'|| ((twatanguye==1 || app ==!'approved') && ((iyasavye_type =='c' && thing_player[6]=='m')|| (iyasavye_type=='m'&& thing_player[6]=='c'))) ){comp_reward()}else{player_reward()}
        }
        else if (thing_comp[6] == 'r') {
            if(thing_player[6]=='c'|| thing_player[6]=='m'|| iyasavye_type=='c'|| iyasavye_type=='m'|| ((twatanguye== 1 || app == !'approved') &&((iyasavye_type=='g'&& thing_player[6]=='k')||(iyasavye_type=='k'&&thing_player[6]=='g')))){comp_reward()}else{player_reward()}
        }
    }
    else if (thing_player[6] == thing_comp[6]) {
        if ((thing_player[5] > thing_comp[5])) { player_reward() }
        else { comp_reward() }
    }
    else {
        if (thing_player[6] == iyasavye_type) { player_reward() }
        else if (thing_comp[6] == iyasavye_type) { comp_reward() }
        else {
            if (twatanguye == 0 || app == 'approved') { player_reward() } else { comp_reward() }
        }
    }
}
