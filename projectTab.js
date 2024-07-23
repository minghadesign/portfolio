//scrollOn
/* function popupScroll() {
  document.getElementById("popupScroll");
} */


let allTabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content")

allTabs.forEach(t=>{

  t.addEventListener('mouseover',e=>{
    switchTab(e);
  })

})

let switchTab = (e) => {

  allTabs.forEach(t=>{
    t.classList.remove('active');
  })
  e.target.classList.add('active');

  content.forEach(c=>{
    c.classList.remove('active');
  })

  let selectedTab = e.target.getAttribute("data-tab");
  let activeTab = document.querySelector(selectedTab);
  activeTab.classList.add('active');
}

//-----------------------------------------------------

/* popupImage */
const popupScroll = document.querySelector('.popupScroll');
let allMoreBtn = document.querySelectorAll(".btnImage");
let allBtnContent = document.querySelectorAll(".allBtnContent");
const popupWrapper = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');


/*     allMoreBtn.forEach(r=>{

      r.addEventListener('click',btnMore=>{
        switchContent(btnMore);
      })
    })


    let switchContent = (btnMore) =>{
      allBtnContent.forEach(removeClass=>{
        removeClass.classList.remove('active');
      })

      let selectedBtnContent = a.target.getAttribute("data-tab");
      let activeBtnContent = document.querySelector(selectedBtnContent);
      activeBtnContent.classList.add('active');
} */

//lightbox hide


/* allMoreBtn.forEach(addEventListener('click',()=>{
  
    popupWrapper.classList.remove('hide')
})
) */
//-----------------------------------------
//MoreBtn popop
    allMoreBtn.forEach(r1=>{

      r1.addEventListener('click',h1=>{
        popupBox(h1);
      })
    })

    let popupBox = (h1) =>{
      
      allBtnContent.forEach(removeClass=>{
        removeClass.classList.remove('active');
      })
      
      let selectedBtnContent = h1.target.getAttribute("data-tab");
      let activeBtnContent = document.querySelector(selectedBtnContent);
      activeBtnContent.classList.add('active');
      popupWrapper.classList.remove('hide');
      popupScroll.scrollTo(0,0);
    }
//-----------------------------------------
/*     popupWrapper.forEach(r2=>{

      r2.addEventListener('click',h2=>{
        popupBox2(h2);
      })
    })


    let popupBox2 = (h2) =>{
      popupWrapper.classList.add('hide');
      
    } */



/* allBtnImages.addEventListener('click',()=>{
  popupWrapper.classList.remove('hide');
}) */
popupWrapper.addEventListener('click',()=>{
    popupWrapper.classList.add('hide');
})
closeBtn.addEventListener('click',()=>{
    popupWrapper.classList.add('hide');
})
popup.addEventListener('click',(e)=>{
    e.stopPropagation();
})
