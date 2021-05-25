document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });
  document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal1"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal1').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close1"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal1').style.marginLeft = '0px';
    });
  });

  document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal3"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal3').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close1"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal3').style.marginLeft = '0px';
    });
  });