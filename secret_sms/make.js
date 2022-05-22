var link="";
var q=location.search;

document.addEventListener("click",s);
var sn=0;
function s() {
  sn++;
  if(sn>=4){
    document.removeEventListener("click",s);
    start();
  }
}

function start(){
  if(q){
    q=q.replace("?h=","");
    q=decodeURI(q);
    log(q)
    makeShowPan();
  }else{
    makeMakePan("1947","918578069916","Your message here... Kokko")
  }
}

function checkP(e){
  var decIt=decrypt(q);
  decIt=decIt.split("~~~");

  if(e.value==decIt[1]){
    e.remove();
    op("#msgBx").innerHTML=decIt[0];
  }
}



function makeLnk() {
  var sec=encrypt(op("#msg").value+"~~~"+op("#pass").value);
  log(sec)
  link=encodeURI(document.URL.split('?')[0]+"?h="+sec);
}

function copyLnk(){
  makeLnk();
  copy(link);
}

function dirSend(){
  makeLnk();
  window.open(`https://wa.me/${op("#wano").value}?text=${link}`);
} 

function makeMakePan(pass="",num="",place="Your msg here..."){
  var html=`  <div class="pan make active">
    <label class="fr">
      <textarea id="msg" placeholder="${place}"></textarea>
    </label>

    <label class="fr">
      <p>Password</p>
      <input type="number" placeholder="PIN" value="${pass}" id="pass">
    </label>

    <div class="fr">
      <div class="btn">
        <button id="cl" onclick="copyLnk()">Copy Link</button>
      </div>
    </div>

    <div class="fr">
      <p>Send to:</p>
      <div class="btn"><input type="tel" placeholder="Whatsapp No." id="wano" value="${num}"><button onclick="dirSend()">Send</button></div>
    </div>
  </div>`;

  document.body.innerHTML=html;
  resetFormat();
}

function makeShowPan(){
  var html=`  <div class="pan active">
    <div class="flex c show">
      <input type="number" oninput="checkP(this)" id="pin" placeholder="PIN" style="text-align: center;">
      <div class="msgBx">
        <pre id="msgBx"></pre>
      </div>
      <button onclick='makeMakePan("1947","918578069916","Your message here... Kokko")'>Create Message</button>
    </div>
  </div>`;
  log("ca")
  document.body.innerHTML=html;
}