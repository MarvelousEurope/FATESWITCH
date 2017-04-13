/*ADD EVENT LISTENER START---------------------------------*/
function addEvt(t,l,f){
	try{t.addEventListener(l,f,false);}
	catch(e){t.attachEvent('on'+l,f);}
};
/*ADD EVENT LISTENER END---------------------------------*/

/*ARROW CHANGE START ---------------------------------*/
function arrowChange() {
    var btnParent = 'arrow'
				btn = document.getElementById(btnParent).getElementsByTagName('li'),
				btnLen = btn.length;
				dispParent = 'view',
				disp = document.getElementById(dispParent).getElementsByTagName('img'),
				dispLen = disp.length,
				button = [],
				backParent = document.getElementById('arrow-back'),
				backBtn = backParent.getElementsByTagName('a')[0],
				count = -1;
				
    for (var i = 0; i < btn.length; i += 1) {
        button[i] = btn[i].getElementsByTagName('a')[0];
    }
    
    var clickAdd = function (num) {
        addEvt(button[num], 'click', function (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            clickRun(num);
        });
    };
    var backAdd = function(){
        addEvt(backBtn, 'click', function (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            clickRun('back');
        });
    };
    //
    var clickRun = function(num){
         
        if (num === 'back'){
            count = 0;
        }else if (num === 0){
            count--;
        }else if (num === 1){
            count++;
        }
        //
        for (var j = 0; j < dispLen; j += 1){
            disp[j].style.display = 'none';
        }
        //
        for (var k = 0; k < btnLen; k += 1){
            btn[k].className = '';
        }
        backParent.className = 'current';
        
        if (0 >= count){
            btn[0].className = 'current';
            count = 0;
        }
        if (dispLen-1 <= count){
            btn[1].className = 'current';
            backParent.className = '';
            count = dispLen-1;
        }
        disp[count].style.display = 'block';
    };
    //
    for (var m = 0; m < button.length; m += 1) {
          clickAdd(m);
    }
    backAdd();
    clickRun(1);
}
//
addEvt(window, 'load', function (e) {
		arrowChange();
});
/*ARROW CHANGE END ---------------------------------*/