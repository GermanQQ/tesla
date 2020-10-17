


function scrole(){
    const el = document.querySelector('.backgtound');
    el.style.transform = "scale(2)";
    document.querySelector('.name_3').style.opacity = '1';
    document.querySelector('.name_3').style.transform = 'translateX(-80%)';

}

setTimeout (scrole,1500);

    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const points = document.querySelector('.points');

    // const hideDiv1 = document.querySelector('.hidden_1');
    // const hideDiv2 = document.querySelector('.hidden_2');

    

function goToSlide_1(){
    document.querySelector('.name_S').style.opacity = '1';
    document.querySelector('.name_3').style.opacity = '0';
    document.querySelector('.name_X').style.opacity = '0';

    document.querySelector('.name_S').style.transform = 'translateX(-100%)';

    
    const fillPoint = document.querySelector('.slide_1');
    fillPoint.style.color = '#E04040';
    document.querySelector('.slide_2').style.color = 'white';
    document.querySelector('.slide_3').style.color = 'white';


    

    // hideDiv1.style.left = "-50%";
    // hideDiv2.style.right = "50%";

    points.style.transform = "translateX(-50%)";
    header.style.transform = "translateX(-50%)";
    body.style.transform = "translateX(50%)";
}

function goToSlide_2(){
    document.querySelector('.name_S').style.opacity = '0';
    document.querySelector('.name_3').style.opacity = '1';
    document.querySelector('.name_X').style.opacity = '0';

    document.querySelector('.name_3').style.transform = 'translateX(-50%)';

    const fillPoint = document.querySelector('.slide_2');
    fillPoint.style.color = '#E04040';
    document.querySelector('.slide_1').style.color = 'white';
    document.querySelector('.slide_3').style.color = 'white';

    // hideDiv1.style.left = "0";
    // hideDiv2.style.right = "0";

    points.style.transform = "translateX(0)";
    header.style.transform = "translateX(0)";
    body.style.transform = "translateX(0)";
}
function goToSlide_3(){
    document.querySelector('.name_S').style.opacity = '0';
    document.querySelector('.name_3').style.opacity = '0';
    document.querySelector('.name_X').style.opacity = '1';

    document.querySelector('.name_X').style.transform = 'translateX(0%)';

    const fillPoint = document.querySelector('.slide_3');
    fillPoint.style.color = '#E04040';
    document.querySelector('.slide_1').style.color = 'white';
    document.querySelector('.slide_2').style.color = 'white';

    // hideDiv1.style.left = "50%";
    // hideDiv2.style.right = "-50%";

    points.style.transform = "translateX(50%)";
    header.style.transform = "translateX(50%)";
    body.style.transform = "translateX(-50%)";
}
