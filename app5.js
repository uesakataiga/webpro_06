const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let judgement = '';
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else if ( num==3 ) cpu = 'パー';
  // ここに勝敗の判定を入れる
  if(isNaN(win)) win = 0;
  if(isNaN(total)) total = 0;
  
  if(num == 1) {
    if(hand == 'グー') {
      judgement = 'あいこ';
      total+=1;
    } else if (hand == 'チョキ') {
      judgement ='負け';
      total+=1;
    } else if (hand == 'パー') {
      judgement = '勝ち';
      total+=1;
      win+=1;
    }
  }
  else if(num == 2) {
    if(hand == 'グー') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (hand == 'チョキ') {
      judgement ='あいこ';
      total+=1;
    } else if (hand == 'パー') {
      judgement = '負け';
      total+=1;
    }
  }
  else if(num == 3) {
    if(hand == 'グー') {
      judgement = '負け';
      total+=1;
    } else if (hand == 'チョキ') {
      judgement ='勝ち';
      win+=1;
      total+=1;
    } else if(hand == 'パー') {
      judgement = 'あいこ';
      total+=1;
    }
  }
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/attimuitehoi", (req, res) => {
  let face = req.query.face;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {face, win, total});
  const num = Math.floor( Math.random() * 4 + 1 );
  let judgement = '';
  let cpu = '';
  if( num==1 ) cpu = '上';
  else if( num==2 ) cpu = '下';
  else if ( num==3 ) cpu = '右';
  else if ( num==4 ) cpu = '左';
  // ここに勝敗の判定を入れる
  if(isNaN(win)) win = 0;
  if(isNaN(total)) total = 0;
  
  if(num == 1) {
    if(face == '上') {
      judgement = '負け';
      total+=1;
    } else if (face == '下') {
      judgement = '勝ち';
      total+=1;
      win+=1;
    } else if (face == '右') {
      judgement = '勝ち';
      total+=1;
      win+=1;
    } else if (face == '左') {
      judgement = '勝ち';
      total+=1;
      win+=1;
    }
  }
  else if(num == 2) {
    if(face == '上') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (face == '下') {
      judgement ='負け';
      total+=1;
    } else if (face == '右') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (face == '左') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    }
  }
  else if(num == 3) {
    if(face == '上') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (face == '下') {
      judgement ='勝ち';
      win+=1;
      total+=1;
    } else if(face == '右') {
      judgement = '負け';
      total+=1;
    } else if (face == '左') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    }
  }
  else if(num == 4) {
    if(face == '上') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (face == '下') {
      judgement ='勝ち';
      win+=1;
      total+=1;
    } else if(face == '右') {
      judgement = '勝ち';
      win+=1;
      total+=1;
    } else if (face == '左') {
      judgement = '負け';
      total+=1;
    }
  }
  const display = {
    your: face,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'attimuitehoi', display );
});

app.get("/tyouhann", (req, res) => {
  let card = req.query.card;
  let win = Number( req.query.win );
  let lose = Number( req.query.lose );
  console.log( {card, win, lose});
  const num = Math.floor( Math.random() * 6 + 1 );
  const num1 = Math.floor( Math.random() * 6 + 1 );
  let judgement = '';
  let cpu = '';
  if( num==1 && num1==1 ) cpu = ' 1,1 ';
  else if( num==1 && num1==2 ) cpu = ' 1,2 ';
  else if( num==2 && num1==1 ) cpu = ' 2,1 ';
  else if( num==1 && num1==3 ) cpu = ' 1,3 ';
  else if( num==3 && num1==1 ) cpu = ' 3,1 ';
  else if( num==1 && num1==4 ) cpu = ' 1,4 ';
  else if( num==4 && num1==1 ) cpu = ' 4,1 ';
  else if( num==1 && num1==5 ) cpu = ' 1,5 ';
  else if( num==5 && num1==1 ) cpu = ' 5,1 ';
  else if( num==1 && num1==6 ) cpu = ' 1,6 ';
  else if( num==6 && num1==1 ) cpu = ' 6,1 ';
  else if( num==2 && num1==2 ) cpu = ' 2,2 ';
  else if( num==2 && num1==3 ) cpu = ' 2,3 ';
  else if( num==3 && num1==2 ) cpu = ' 3,2 ';
  else if( num==2 && num1==4 ) cpu = ' 2,4 ';
  else if( num==4 && num1==2 ) cpu = ' 4,2 ';
  else if( num==2 && num1==5 ) cpu = ' 2,5 ';
  else if( num==5 && num1==2 ) cpu = ' 5,2 ';
  else if( num==2 && num1==6 ) cpu = ' 2,6 ';
  else if( num==6 && num1==2 ) cpu = ' 6,2 ';
  else if( num==3 && num1==3 ) cpu = ' 3,3 ';
  else if( num==3 && num1==4 ) cpu = ' 3,4 ';
  else if( num==4 && num1==3 ) cpu = ' 4,3 ';
  else if( num==3 && num1==5 ) cpu = ' 3,5 ';
  else if( num==5 && num1==3 ) cpu = ' 5,3 ';
  else if( num==3 && num1==6 ) cpu = ' 3,6 ';
  else if( num==6 && num1==3 ) cpu = ' 6,3 ';
  else if( num==4 && num1==4 ) cpu = ' 4,4 ';
  else if( num==4 && num1==5 ) cpu = ' 4,5 ';
  else if( num==5 && num1==4 ) cpu = ' 5,4 ';
  else if( num==4 && num1==6 ) cpu = ' 4,6 ';
  else if( num==6 && num1==4 ) cpu = ' 6,4 ';
  else if( num==5 && num1==5 ) cpu = ' 5,5 ';
  else if( num==5 && num1==6 ) cpu = ' 5,6 ';
  else if( num==6 && num1==5 ) cpu = ' 6,5 ';
  else if( num==6 && num1==6 ) cpu = ' 6,6 ';
  // ここに勝敗の判定を入れる
  if(isNaN(win)) win = 0;
  if(isNaN(lose)) lose = 0;
  
  if(num == 1 && num1 == 1) {
    if(card == '丁') {
      judgement = 'ピンゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'ピンゾロの丁';
      lose+=1;
    }
  }
  if(num == 1 && num1 == 2) {
    if(card == '丁') {
      judgement = 'イチニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'イチニの半';
      win+=1;
    }
  }
  if(num == 2 && num1 == 1) {
    if(card == '丁') {
      judgement = 'イチニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'イチニの半';
      win+=1;
    }
  }
  if(num == 1 && num1 == 3) {
    if(card == '丁') {
      judgement = 'サンミチの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'サンミチの丁';
      lose+=1;
    }
  }
  if(num == 3 && num1 == 1) {
    if(card == '丁') {
      judgement = 'サンミチの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'サンミチの丁';
      lose+=1;
    }
  }
  if(num == 1 && num1 == 4) {
    if(card == '丁') {
      judgement = 'ヨイチの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'ヨイチの半';
      win+=1;
    }
  }
  if(num == 4 && num1 == 1) {
    if(card == '丁') {
      judgement = 'ヨイチの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'ヨイチの半';
      win+=1;
    }
  }
  if(num == 1 && num1 == 5) {
    if(card == '丁') {
      judgement = 'グイチの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'グイチの丁';
      lose+=1;
    }
  }
  if(num == 5 && num1 == 1) {
    if(card == '丁') {
      judgement = 'グイチの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'グイチの丁';
      lose+=1;
    }
  }
  if(num == 1 && num1 == 6) {
    if(card == '丁') {
      judgement = 'イチロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'イチロクの半';
      win+=1;
    }
  }
  if(num == 6 && num1 == 1) {
    if(card == '丁') {
      judgement = 'イチロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'イチロクの半';
      win+=1;
    }
  }
  if(num == 2 && num1 == 2) {
    if(card == '丁') {
      judgement = '二ゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = '二ゾロの丁';
      lose+=1;
    }
  }
  if(num == 2 && num1 == 3) {
    if(card == '丁') {
      judgement = 'サニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'サニの半';
      win+=1;
    }
  }
  if(num == 3 && num1 == 2) {
    if(card == '丁') {
      judgement = 'サニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'サニの半';
      win+=1;
    }
  }
  if(num == 2 && num1 == 4) {
    if(card == '丁') {
      judgement = 'シニの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'シニの丁';
      lose+=1;
    }
  }
  if(num == 4 && num1 == 2) {
    if(card == '丁') {
      judgement = 'シニの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'シニの丁';
      lose+=1;
    }
  }
  if(num == 2 && num1 == 5) {
    if(card == '丁') {
      judgement = 'グニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'グニの半';
      win+=1;
    }
  }
  if(num == 5 && num1 == 2) {
    if(card == '丁') {
      judgement = 'グニの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'グニの半';
      win+=1;
    }
  }
  if(num == 2 && num1 == 6) {
    if(card == '丁') {
      judgement = 'ニロクの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'ニロクの丁';
      lose+=1;
    }
  }
  if(num == 6 && num1 == 2) {
    if(card == '丁') {
      judgement = 'ニロクの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'ニロクの丁';
      lose+=1;
    }
  }
  if(num == 3 && num1 == 3) {
    if(card == '丁') {
      judgement = 'サンゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'サンゾロの丁';
      lose+=1;
    }
  }
  if(num == 3 && num1 == 4) {
    if(card == '丁') {
      judgement = 'シソウの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'シソウの半';
      win+=1;
    }
  }
  if(num == 4 && num1 == 3) {
    if(card == '丁') {
      judgement = 'シソウの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'シソウの半';
      win+=1;
    }
  }
  if(num == 3 && num1 == 5) {
    if(card == '丁') {
      judgement = 'グサンの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'グサンの丁';
      lose+=1;
    }
  }
  if(num == 5 && num1 == 3) {
    if(card == '丁') {
      judgement = 'グサンの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'グサンの丁';
      lose+=1;
    }
  }
  if(num == 3 && num1 == 6) {
    if(card == '丁') {
      judgement = 'サブロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'サブロクの半';
      win+=1;
    }
  }
  if(num == 6 && num1 == 3) {
    if(card == '丁') {
      judgement = 'サブロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'サブロクの半';
      win+=1;
    }
  }
  if(num == 4 && num1 == 4) {
    if(card == '丁') {
      judgement = 'シゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'シゾロの丁';
      lose+=1;
    }
  }
  if(num == 4 && num1 == 5) {
    if(card == '丁') {
      judgement = 'グシの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'グシの半';
      win+=1;
    }
  }
  if(num == 5 && num1 == 4) {
    if(card == '丁') {
      judgement = 'グシの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'グシの半';
      win+=1;
    }
  }
  if(num == 4 && num1 == 6) {
    if(card == '丁') {
      judgement = 'シロクの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'シロクの丁';
      lose+=1;
    }
  }
  if(num == 6 && num1 == 4) {
    if(card == '丁') {
      judgement = 'シロクの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'シロクの丁';
      lose+=1;
    }
  }
  if(num == 5 && num1 == 5) {
    if(card == '丁') {
      judgement = 'ゴゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'ゴゾロの丁';
      lose+=1;
    }
  }
  if(num == 5 && num1 == 6) {
    if(card == '丁') {
      judgement = 'ゴロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'ゴロクの半';
      win+=1;
    }
  }
  if(num == 6 && num1 == 5) {
    if(card == '丁') {
      judgement = 'ゴロクの半';
      lose+=1;
    }
    else if(card == '半'){
      judgement = 'ゴロクの半';
      win+=1;
    }
  }
  if(num == 6 && num1 == 6) {
    if(card == '丁') {
      judgement = 'ロクゾロの丁';
      win+=1;
    }
    else if(card == '半'){
      judgement = 'ロクゾロの丁';
      lose+=1;
    }
  }
  const display = {
    your: card,
    cpu: cpu,
    judgement: judgement,
    win: win,
    lose: lose
  }
  res.render( 'tyouhann', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
