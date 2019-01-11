console.log('hi');

confirmDefault = ['no bun', 'no lettuce', 'no patty', 'no tomato', 'no cheese', 'no mayo'];

class HamburgerKing {
  constructor(name, score, timer, customers, level, orders, confirm) {
    this.name = name;
    this.score = score;
    this.timer = timer;
    this.customers = customers;
    this.level = level;
    this.orders = orders;
    this.requests = [null, null, null, null, null, null];
    this.confirm = [...confirm];
  }


  // getInfo(){
  //   const name = prompt('enter your name');
  //   $('.info').show();
  //   $('h3').eq(0).text(name);
  //   $('#profile h3').show();
  //   hamburger.start();
  // }

  start(){
    //console.log('START THIS VALUE = ', this);//note: 'this' in this func !== class HamburgerKing
    console.log(this)
    let missionTimer;
    if (this.level === 1) {
      const name = prompt('enter your name');
      $('.info').show();
      $('h3').eq(0).text(name);
      $('#profile h3').show();
      this.play();
      // hamburger.start();
    }

    clearInterval(missionTimer);

    //1. h1 tag and start button should be gone;
    $('h1').hide();
    $('#startBtn').hide();

    //2. timer should start at the profile messageBox
    missionTimer = setInterval(function() {
      //console.log('TIMER THIS VALUE = ', this);//note: check ()=>{} and function(){}
      if(hamburger.timer <= 0){
        clearInterval(missionTimer)
        //alert('Time over');
        $('#cook').hide();
        $('#middle').append(`<img id="cook2" src="./css/burgermanv2.png">`);
        hamburger.reset()
      }
      else if(hamburger.score === hamburger.orders){
        clearInterval(missionTimer);
        // hamburger.levelTwo();
      }else{
        hamburger.timer--;
        $('#timer').show();
        $('#timer').text(`${hamburger.timer}`)
      }
    }, 1000)

    $('#level').text(`Level : ${hamburger.level}`);
    $('#left').text(`Burger : ${hamburger.score}`)

    //3. take plyaer's info
    // hamburger.getInfo();
    //4. requestbox need to pop
    // hamburger.confirm = ['no bun', 'no lettuce', 'no patty', 'no tomato', 'no cheese', 'no mayo'];
    hamburger.getRequest();
    //5. make icons to be clickable
    // this.play();
  }

  getRequest(){
    const bunText = ['bun', 'no bun'];
    const lettText = ['lettuce', 'no lettuce'];
    const pattyText = ['patty', 'no patty'];
    const tomaText = ['tomato', 'no tomato'];
    const cheeseText =['cheese', 'no cheese'];
    const mayoText = ['mayo', 'no mayo'];

    const idx1 = Math.floor(Math.random()*2)
    const idx2 = Math.floor(Math.random()*2)
    const idx3 = Math.floor(Math.random()*2)
    const idx4 = Math.floor(Math.random()*2)
    const idx5 = Math.floor(Math.random()*2)
    const idx6 = Math.floor(Math.random()*2)

    //this.requests.push(bunText[idx1],lettText[idx2],pattyText[idx3],tomaText[idx4],cheeseText[idx5], mayoText[idx6])
    this.requests[0] = bunText[idx1]
    this.requests[1] = lettText[idx2]
    this.requests[2] = pattyText[idx3]
    this.requests[3] = tomaText[idx4]
    this.requests[4] = cheeseText[idx5]
    this.requests[5] = mayoText[idx6]

    $('#request').show();
    $('#request').text(`Customer(${this.customers}) : I want... ${bunText[idx1]}, ${lettText[idx2]}, ${pattyText[idx3]}, ${tomaText[idx4]}, ${cheeseText[idx5]}, ${mayoText[idx6]}. Please.`);
  }

  play(){

    $bun.on('click',() => {

      if(this.requests[0] === 'bun'){
        this.confirm[0] = 'bun';
        // console.log(this.confirm[0]);
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate bunB" src="./css/BottomBun.png">')
        $('.order-wrapper').append('<img class="on-plate bunU" src="./css/Bun.png">')
        $('.bunB').velocity("callout.bounce");
        $('.bunU').velocity("callout.bounce");
      }else{
        this.confirm[0] = 'no bun';
        $('#bun').velocity("callout.shake")
      }
    });
    $lettuce.on('click',()=>{
      // console.log(this.confirm[1]);
      if(this.requests[1] === 'lettuce'){
        this.confirm[1] = 'lettuce';
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate lett" src="./css/Lettus.png">')
        $('.lett').velocity("callout.bounce");
      }else{
        this.confirm[1] = 'no lettuce';
        $('#lettuce').velocity("callout.shake")
      }
    });
    $patty.on('click',()=>{
      // console.log(this.confirm[2]);

      if(this.requests[2] === 'patty'){
        this.confirm[2] = 'patty'
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate patt" src="./css/Patty.png">')
        $('.patt').velocity("callout.bounce")
      }else{
        this.confirm[2] = 'no patty'
        $('#patty').velocity("callout.shake")
      }
    });
    $tomato.on('click',()=>{
      // console.log(this.confirm[3]);

      if(this.requests[3] === 'tomato'){
        this.confirm[3] = 'tomato';
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate toma" src="./css/Tomato.png">')
        $('.toma').velocity("callout.bounce")
      }else{
        this.confirm[3] = 'no tomato';
        $('#tomato').velocity("callout.shake")
      }
    });

    $cheese.on('click',()=>{
      // console.log(this.confirm[4]);

      if(this.requests[4] === 'cheese'){
        this.confirm[4] = 'cheese';
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate chee" src="./css/Cheese.png">')
        $('.chee').velocity("callout.bounce")
      }else{
        this.confirm[4] = 'no cheese';
        $('#cheese').velocity("callout.shake")
      }
    });
    $mayo.on('click',()=>{
      // console.log(this.confirm[5]);

      if(this.requests[5] === 'mayo'){
        this.confirm[5] =  'mayo';
        console.log('The Order = ', this.requests);
        console.log('The Player Burger = ', this.confirm);
        $('.order-wrapper').append('<img class="on-plate mayo" src="./css/Mayo.png">')
        $('.mayo').velocity("callout.bounce")
      }else{
        this.confirm[5] = 'no mayo';
        $('#mayo').velocity("callout.shake")
      }
    });

    $done.on('click', () => {
      let orderArray = [];

      for(let i = 0; i < this.requests.length; i++){
        if(this.requests[i] !== this.confirm[i]){
          orderArray.push(false);
        } else {
          orderArray.push(true);
        }
      }

      if (orderArray.includes(false)) {
        return alert('You lost...!');
      } else  {
        this.score += 1;
        this.customers += 1;
        $('#left').text(`Burger : ${this.score}`);
        //alert('Order is correct...!')
        // this.getRequest()
        // document.querySelector('.bunB').remove()
        $('.order-wrapper').empty().append(`<img id="plate" src="./css/tray.png">`)
      // }

      // if(this.score === this.orders){
        this.level += 1;
        alert('Congrats! you are going to move level [ ' +  this.level + ' ] now!')
        $('#level').text(`Level : ${hamburger.level}`);
        this.levelTwo();
      };
    });
  };

  reset(){
    $('#request').hide();
    $('#timer').hide();
    $('#profile h3').hide();
    $('.info').hide();
    $('#messageBox').append(`<div id="newMess">Try again?</div>`);
    $('#messageBox').append(`<button id="againBtn">Again</button>`);
    $('#againBtn').on('click', () =>{
      // $('#messageBox').empty();fail -> it shouldn't be empty..
      // $('#profile').empty();fail -> it shouldn't be empty..
      $('.on-plate').remove();
      $('#newMess').remove();
      $('#againBtn').remove();
      hamburger = new HamburgerKing(name, 0, 3, 1, 1, 5, ['no bun', 'no lettuce', 'no patty', 'no tomato', 'no cheese', 'no mayo']);
      $('#cook').show();
      $('#cook2').remove();
      this.getInfo();
    });
  }

  levelTwo(){
    $('#request').hide();
    $('#timer').hide();
    $('#messageBox').append(`<div id="levelUpMess">congrats!</div>`);
    $('#messageBox').append(`<button id="next">next</button>`);
    $('#next').on('click', () =>{
      $('.on-plate').remove();
      $('#levelUpMess').remove();
      $('#next').remove();
      // hamburger = new HamburgerKing(name, 0, 30, 1, 2, 6, confirmDefault);
      this.start();
      // this.level++;
      this.orders = 6;
      this.confirm = [...confirmDefault];
      this.timer = 30;
      this.start();
    });
  }


}//class closer


//constructor(name, score, timer, customers, level, orders);
//score => how many player made so far..
//orders => how many player should make each level
//customers => start from 1
let hamburger = new HamburgerKing(name, 0, 20, 1, 1, 2, confirmDefault);

//variable
const $startBtn = $('#startBtn');
const $bun = $('#bun');
const $lettuce = $('#lettuce');
const $patty = $('#patty');
const $tomato = $('#tomato');
const $cheese = $('#cheese');
const $mayo = $('#mayo');
const $done = $('#cook')
const $againBtn = $('#againBtn');


//event listner
$startBtn.on('click', () => hamburger.start());
