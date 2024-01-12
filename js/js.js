// ****start api index1 ****
let _div1 = document.getElementById('div1')
let _div2 = document.getElementById('div2')
let _div4 = document.getElementById('div4')
let _div6 = document.getElementById('div6')
let _div7 = document.getElementById('div7')
let _div8 = document.getElementById('div8')
let _div9 = document.getElementById('div9')
let _div10 = document.getElementById('div10')
let _div11 = document.getElementById('div11')
let _div12 = document.getElementById('div12')
let _div13 = document.getElementById('div13')
let _shop = document.getElementById('shop')
let _modAdd = document.getElementById('modAdd')
let y = []
let min = 0
let max = 4
let y1 = 0
// ****end api index1 ****
// start mod
const _modImg = document.getElementById('modImg')
const _modName = document.getElementById('modName')
const _modTitle = document.getElementById('modTitle')
const _modPrice = document.getElementById('modPrice')
const _modName2 = document.getElementById('modName2')
const _modDescription1 = document.getElementById('modDescription1')
const _modDescription2 = document.getElementById('modDescription2')
const _main1 = document.getElementById('main1')
const _module = document.getElementById('module')
const _modClose = document.getElementById('modClose')
const _modNumber = document.getElementById('modNumber')
const _modNumberUp = document.getElementById('modNumberUp')
const _modNumberDown = document.getElementById('modNumberDown')

// end mod
// **************************************************************************************************

// scroll*********************************************************************
let _menu = document.getElementById('menu')
let _scroll = document.getElementById('scroll')

_scroll.addEventListener('scroll', (e) => {
    let st = e.target.scrollTop
    if (st > 100) {
        _menu.classList.add('top-[-100%]')
    } else {
        _menu.classList.remove('top-[-100%]')

    }
})

// ******************
let _main = document.getElementsByClassName('main')
let _clickMenu = document.querySelectorAll('.clickMenu>li')

_clickMenu.forEach((val, i) => {
    val.addEventListener('click', () => {
        for (let x = 0; x < _main.length; x++) {
            if (i != x) {
                _main[x].style.display = 'none'
                val.setAttribute('data-status', 'off')
            }
        }
        if (val.getAttribute('data-status') == 'on') {
            _main[i].style.display = 'none'
            val.setAttribute('data-status', 'off')
        } else {
            _main[i].style.display = 'block'
            val.setAttribute('data-status', 'on')
        }
    })
})



//start add Panel***********************************************************************************************

let _send = document.getElementById('send')
let _input1 = document.getElementById('inp1')
let _input2 = document.getElementById('inp2')
let _input3 = document.getElementById('inp3')
let _input4 = document.getElementById('inp4')
let _save = document.getElementById('save')
let _div3 = document.getElementById('div3')
let _mod1 = document.getElementById('mod1')
let _checkIn = document.getElementById('checkIn')


_send.addEventListener('click', () => {
    const _inp1 = document.querySelectorAll('.input-1')
    const name = _inp1[0].value;
    const price = _inp1[1].value;
    const image = _inp1[2].value;
    const title = _inp1[3].value;
    const Description1 = _inp1[4].value;
    const Description2 = _inp1[5].value;
    const newTask = {
        image: image,
        name: name,
        title: title,
        price: price,
        Description1: Description1,
        Description2: Description2,
    };

    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        // Send your data in the request body as JSON
        body: JSON.stringify(newTask)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
        alert('your message is resived!')
    }).catch(error => {
        // handle error
        alert('adam bash')
    })
})

// *********
_input1.addEventListener('keyup', (e) => {
    let myVal = e.target.value
    if (
        myVal.search(/[ا-ی]/) >= 0 ||
        myVal.search(/[!@#$%^&*()_+-=]/) >= 0
    ) {
        e.target.value = ''
    }
})
_input2.addEventListener('keyup', (e) => {
    let myVal = e.target.value
    if (
        myVal.search(/[ا-ی]/) >= 0 ||
        myVal.search(/[a-z]/) >= 0
    ) {
        e.target.value = ''
    }
})
_save.addEventListener('click', () => {
    if (
        _input1.value == '' ||
        _input1.value == ' ' ||
        _input1.value == null ||
        // (_input1.search(/<script/)) >= 0 ||
        // (_input1.search(/\s/)) >= 0 ||
        _input2.value == '' ||
        _input2.value == ' ' ||
        _input2.value == null
        // (_input2.search(/<script/)) >= 0 ||
        // (_input2.search(/\s/)) >= 0
    ) {
        alert('adam bash')
    } else {
        const userName = _input1.value;
        const password = _input2.value;
        const newTask = {
            userName: userName,
            password: password,
        };

        fetch('https://6599acb9652b843dea530ec4.mockapi.io/userName', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // Send your data in the request body as JSON
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            alert('your message is resived!')
        }).catch(error => {
            // handle error
            alert('adam bash')
        })
    }
})

let y3 = []
let k1 = 0
async function getData3() {
    const x = await fetch('https://6599acb9652b843dea530ec4.mockapi.io/userName')
    y3 = await x.json()

    y3.forEach((val, i) => {
        k1 = i
    });
    const _div = document.createElement('div')
    _div.innerHTML = `
        <p class="w-[40%] h-[100%] flex justify-center items-center text-[1.5rem] md:text-[1rem] text-zinc-400">User Name : ${y3[k1].userName}</p>
        <p class="w-[40%] h-[100%] flex justify-center items-center text-[1.5rem] md:text-[1rem] text-zinc-400">Password : ${y3[k1].password}</p>
`
    _div3.appendChild(_div)
}
getData3()

_checkIn.addEventListener('click', () => {
    if (_input3.value == y3[k1].userName &&
        _input4.value == y3[k1].password) {
        _mod1.remove()
    } else {
        _input3.value = ''
        _input4.value = ''
    }
})

//end add Panel***********************************************************************************************


// start shop******************************************************************************************************

// start mod
const _modImg2 = document.getElementById('modImg2')
const _modName22 = document.getElementById('modName22')
const _modTitle2 = document.getElementById('modTitle2')
const _modPrice2 = document.getElementById('modPrice2')
const _modName222 = document.getElementById('modName222')
const _modDescription12 = document.getElementById('modDescription12')
const _modDescription22 = document.getElementById('modDescription22')
const _main12 = document.getElementById('main2')
const _module2 = document.getElementById('module2')
const _modClose2 = document.getElementById('modClose2')
const _modNumber2 = document.getElementById('modNumber2')
const _modNumberUp2 = document.getElementById('modNumberUp2')
const _modNumberDown2 = document.getElementById('modNumberDown2')

// end mod
let _shopName = document.getElementById('shopName')
let _shopUl = document.getElementById('shopUl')
let _shopAll = document.getElementById('shopAll')
let _shop2 = document.getElementById('shop2')
let _Search = document.getElementById('Search')
let _inpS = document.getElementById('inpS')
_shopAll.addEventListener('click', () => {
    async function getDataShop() {
        const x = await fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
        const y = await x.json()
        console.log(y)
        _shop2.innerHTML = ''
        _shopName.innerHTML = 'Home/All'
        y.map((val) => {
            const _fig5 = document.createElement('figure')
            _fig5.innerHTML = `     
                           <img src="${val.image}" onclick=_mod2(${val.id}) class="w-[100%] h-[12.5rem] object-cover cursor-pointer"></img>
                            <figcaption class="w-[100%] h-[6.25rem] flex flex-wrap content-start">
                                <h3 class="w-[100%] text-[1.3rem] md:text-[1rem] text-zinc-400 mb-3">${val.name}</h3>
                                <p class="w-[100%] text-[1.8rem] md:text-[1.5rem] text-zinc-600">${val.price}</p>
                                <p class="w-[100%] text-[1.3rem] md:text-[1rem] text-zinc-400">${val.title}</p>
                                <p class="w-[100%] text-[1.3rem] md:text-[1rem] text-zinc-400">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </p>
                                <button onclick=_addCart(${val.id}) class="w-[30%] text-[1.2rem] py-1 my-1 rounded-lg  text-white bg-color1 hover:bg-black transition-all duration-300"><i class="bi bi-basket3-fill"></i></button>
                            </figcaption>
        `
            _shop2.appendChild(_fig5)
        })
    }
    getDataShop()
})

async function getData4() {
    const x = await fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
    const y = await x.json()

    y.map((val) => {

        const _ul = document.createElement('ul')
        _ul.innerHTML = `     
                        <li class="w-[100%] flex my-3 gap-2 cursor-pointer">
                                                <p onclick="getData5(${val.id})" class="text-[1.1rem] text-color1 hover:text-black transition-all duration-300">${val.title}</p>
                                                <span class="text-[1.1rem] text-black">(1)</span>
                                            </li>                   
        `
        _shopUl.appendChild(_ul)
    })
}
getData4()

function getData5(x) {
    _shop2.innerHTML = ''

    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            _shopName.innerHTML = 'Home/' + data.name
            const _fig4 = document.createElement('figure')
            _fig4.innerHTML = `     
                           <img src="${data.image}" onclick=_mod2(${x}) class="w-[100%] h-[200px] object-cover cursor-pointer"></img>
                            <figcaption class="w-[100%] h-[100px] flex flex-wrap content-start">
                                <h3 class="w-[100%] text-[1rem] text-zinc-400 mb-3">${data.name}</h3>
                                <p class="w-[100%] text-[1.5rem] text-zinc-600">${data.price}</p>
                                <p class="w-[100%] text-[1rem] text-zinc-400">${data.title}</p>
                                <p class="w-[100%] text-[1rem] text-zinc-400">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </p>
                                <button onclick=_addCart(${data.id}) class="w-[30%] text-[1.2rem] py-1 my-1 rounded-lg  text-white bg-color1 hover:bg-black transition-all duration-300"><i class="bi bi-basket3-fill"></i></button>
                            </figcaption>
        `
            _shop2.appendChild(_fig4)
        })
}

const _mod2 = (x) => {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            _module2.style.display = 'block'
            _modImg2.setAttribute('src', data.image)
            _modName22.innerHTML = data.name
            _modTitle2.innerHTML = data.title
            _modPrice2.innerHTML = data.price
            _modName222.innerHTML = data.name
            _modDescription12.innerHTML = data.Description1
            _modDescription22.innerHTML = data.Description2
            const _divMod = document.createElement('div')
            _divMod.innerHTML = `
                                    <button onclick=_addCart(${data.id})
                                        class="w-[50%] h-[90%] bg-color1 text-[1.2rem] uppercase hover:bg-black text-white transition-all duration-300">add
                                        to cart</button>
            `
            _div7.appendChild(_divMod)
        })
}

_modClose2.addEventListener('click', () => {
    _module2.style.display = 'none'
    _div7.innerHTML = ''
})

// search************************************************************

_Search.addEventListener('click',()=>{
    _shop2.innerHTML = ''

    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
        .then(res => res.json())
        .then(data => {
            data.map((val)=>{
             if(_inpS.value===val.title){
                _shopName.innerHTML = 'Home/' + val.name
                const _fig4 = document.createElement('figure')
                _fig4.innerHTML = `     
                               <img src="${val.image}" onclick=_mod2(${x}) class="w-[100%] h-[200px] object-cover cursor-pointer"></img>
                                <figcaption class="w-[100%] h-[100px] flex flex-wrap content-start">
                                    <h3 class="w-[100%] text-[1rem] text-zinc-400 mb-3">${val.name}</h3>
                                    <p class="w-[100%] text-[1.5rem] text-zinc-600">${val.price}</p>
                                    <p class="w-[100%] text-[1rem] text-zinc-400">${val.title}</p>
                                    <p class="w-[100%] text-[1rem] text-zinc-400">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                    </p>
                                    <button onclick=_addCart(${val.id}) class="w-[30%] text-[1.2rem] py-1 my-1 rounded-lg  text-white bg-color1 hover:bg-black transition-all duration-300"><i class="bi bi-basket3-fill"></i></button>
                                </figcaption>
            `
                _shop2.appendChild(_fig4)
             }   
            })
            
        })
})

let _list=document.getElementById('list')
async function fetchTitle() {
    const x = await fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
    const y = await x.json()

    y.map((val) => {

        const _li = document.createElement('li')
        _li.innerHTML = `     
                        <li class="w-[100%] flex my-3 gap-2 cursor-pointer">
                                                ${val.title}
                                            </li>                   
        `
        _list.appendChild(_li)
    })
}
fetchTitle();

function para(e) {
    let temp = e.target.value
    let _li = document.querySelectorAll('#list li')
   if (temp==''){
        _li.forEach((s)=>s.style.display='none')
   }else{
    _li.forEach((val) => {
        val.style.display = 'none'
        if (
            ((val.innerText.toLowerCase()).slice(0, temp.length)) == temp
        ) {
            val.style.display = 'block'
        }
    })
   }
}




// ****start api index1 ****

async function getData() {
    const x = await fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
    y = await x.json()
    y.forEach((val, i) => {
        y1 = i
    });
    _more()

}
getData()

function _more(s) {
    if (max == y1 + 1) {
        s.remove()
    }
    for (k = min; k < max; k++) {
        const _fig = document.createElement('figure')
        _fig.innerHTML = `       
                                 <img src="${y[k].image}" onclick=_mod(${y[k].id}) class="w-[100%] h-[15.6rem] object-cover cursor-pointer"></img>
                                <figcaption class="w-[100%] h-[10.9rem] flex flex-wrap content-start">
                                <h3 class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400 mb-3">${y[k].name}</h3>
                                <p class="w-[100%] text-[2rem] md:text-[1.5rem] text-zinc-600">${y[k].price}</p>
                                <p class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400">${y[k].title}</p>
                                <p class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                </p>
                                <button onclick=_addCart(${y[k].id}) class="w-[30%] text-[1.2rem] py-1 my-1 rounded-lg  text-white bg-color1 hover:bg-black transition-all duration-300"><i class="bi bi-basket3-fill"></i></button>
                                </figcaption>
            `
        _div1.appendChild(_fig)

    }
    min += 4
    max += 4
}

const getData2 = () => {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop')
        .then(res => res.json())
        .then(data => {
            data.map((val, i) => {
                const _fig2 = document.createElement('figure')
                if (i > y1 - 4) {
                    _fig2.innerHTML = `       
                           <img src="${val.image}" onclick=_mod(${val.id}) class="w-[100%] h-[15.6rem] object-cover cursor-pointer"></img>
                            <figcaption class="w-[100%] h-[10.9rem] flex flex-wrap content-start">
                                <h3 class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400 mb-3">${val.name}</h3>
                                <p class="w-[100%] text-[2rem] md:text-[1.5rem] text-zinc-600">${val.price}</p>
                                <p class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400">${val.title}</p>
                                <p class="w-[100%] text-[1.5rem] md:text-[1rem] text-zinc-400">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </p>
                                <button onclick=_addCart(${val.id}) class="w-[30%] text-[1.2rem] py-1 my-1 rounded-lg  text-white bg-color1 hover:bg-black transition-all duration-300"><i class="bi bi-basket3-fill"></i></button>
                            </figcaption>
        `
                    _div2.appendChild(_fig2)

                }
            })
        })
}
getData2()


const _mod = (x) => {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            _main1.style.display = 'none'
            _module.style.display = 'block'
            _modImg.setAttribute('src', data.image)
            _modName.innerHTML = data.name
            _modTitle.innerHTML = data.title
            _modPrice.innerHTML = data.price
            _modName2.innerHTML = data.name
            _modDescription1.innerHTML = data.Description1
            _modDescription2.innerHTML = data.Description2
            const _divMod = document.createElement('div')
            _divMod.innerHTML = `
                                    <button onclick=_addCart(${data.id})
                                        class="w-[50%] h-[90%] bg-color1 text-[1.2rem] uppercase hover:bg-black text-white transition-all duration-300">add
                                        to cart</button>
            `
            _div6.appendChild(_divMod)
        })
}

_modClose.addEventListener('click', () => {
    _main1.style.display = 'block'
    _module.style.display = 'none'
    _div6.innerHTML = ''
})

// ****end api index1 ****
let _addNumber = document.getElementsByClassName('addNumber')
let _total = document.getElementById('total')
let flag = 0
let _tdPrice1 = document.getElementById('tdPrice1')
let _tdPrice2 = document.getElementById('tdPrice2')
let _total1 = document.getElementById('total1')
let _total2 = document.getElementById('total2')
const priceCart = []
let y6 = ''

function _addCart(x) {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            let p = data.price
            p1 = p.slice(0, 5)
            const _tr = document.createElement('tr')
            _tr.innerHTML = `
                                    <td id="td${data.id}" class="w-[20%] h-[10vh] md:h-[15vh] text-[1.5rem] flex justify-center items-center text-zinc-500">
                                        <div class="w-[30%] h-[100%] flex justify-center items-center">
                                            <i onclick=_close3(${data.id}) class="bi bi-x-square cursor-pointer"></i>
                                            </div>
                                        <div class="w-[70%] h-[100%] flex justify-center items-center">
                                        <img class="w-[5rem] h-[5rem] object-cover" src="${data.image}" alt="">
                                        </div>
                                        </td>
                                        <td class="w-[30%] h-[10vh] md:h-[15vh] text-[1.5rem] flex justify-center items-center text-zinc-500 text-color">${data.title}</td>
                                    <td class="w-[20%] h-[10vh] md:h-[15vh] text-[1.5rem] flex justify-center items-center text-zinc-500">${data.price}</td>
                                    <td class="w-[10%] h-[10vh] md:h-[15vh] text-[1.5rem] flex justify-center items-center text-zinc-500">
                                    <div class="w-[100%] h-[50%] flex text-[1.5rem] border-2 bg-white border-zinc-300">
                                    <p data-status${data.id}="1" id="number${data.id}" class="addNumber w-[70%] h-[100%] text-[1.7rem] flex items-center px-1">
                                    1
                                    </p>
                                    <div
                                    class="w-[30%] h-[100%] flex justify-center content-center flex-wrap gap-1">
                                    <div  onclick=_numberUp(${data.id})
                                    class="w-[90%] h-[40%] text-zinc-700 text-[1rem] cursor-pointer flex justify-center items-center">
                                    <i  class="bi bi-caret-up-square-fill"></i>
                                    </div>
                                    <div onclick=_numberDown(${data.id})
                                    class="w-[90%] h-[40%] text-zinc-700 text-[1rem] cursor-pointer flex justify-center items-center">
                                    <i class="bi bi-caret-down-square-fill"></i>
                                    </div>
                                    </div>
                                    </div>
                                    </td>
                                    <td data-status="${p1}" id="prise2${data.id}" class="w-[20%] h-[10vh] md:h-[15vh] text-[1.5rem] flex justify-center items-center text-zinc-500">${data.price}</td>
                                    `
            _div4.appendChild(_tr)

            const _li = document.createElement('li')

            _li.innerHTML = `
           <p class=" text-[1.3rem] md:text-[1rem] text-zinc-800 flex justify-end ">
           ${data.title}
           </p>
           `
            _div9.appendChild(_li)

            // const _li3 = document.createElement('li')
            // _li.innerHTML = `
            //   <p class="text-[1rem] text-zinc-800">
            //       <span class="me-6">1</span>  
            //   </p>
            //        `
            // _div10.appendChild(_li3)
            const _li2 = document.createElement('li')

            _li2.innerHTML = `
           <p data-status="${data.id}" class="text-[1.3rem] md:text-[1rem] text-zinc-800 flex justify-end ">
             ${data.price} 
           </p>
           `
            _div11.appendChild(_li2)


            priceCart.push(data.price)
            flag = parseInt(data.price) + flag
            _tdPrice1.innerHTML = flag + '.00$'
            _tdPrice2.innerHTML = flag + '.00$'
            _total1.innerHTML = flag + '.00$'
            _total2.innerHTML = flag + '.00$'
        })

}



function _numberUp(x) {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            let _number = document.getElementById('number' + x)
            let _prise2 = document.getElementById('prise2' + x)
            p = data.price
            p1 = p.slice(0, 5)
            y = _number.getAttribute('data-status' + x)
            y++
            _number.setAttribute('data-status' + x, y)
            y2 = _number.getAttribute('data-status' + x)
            _number.innerHTML = y2
            _prise2.innerHTML = y2 * p1 + '.00$'
            pp = _prise2.innerHTML
            pp1 = parseInt(pp)
            _prise2.setAttribute('data-status', pp1)
          
            // const _li = document.createElement('li')
            // _li.innerHTML = `
            //   <p class="text-[1rem] text-zinc-800">
            //       <span class="me-6">${y}</span>  
            //   </p>
            //        `
            // _div10.appendChild(_li)
            // _div10.replaceChild(x)



            flag = parseInt(data.price) + flag
            _tdPrice1.innerHTML = flag + '.00$'
            _tdPrice2.innerHTML = flag + '.00$'
            _total1.innerHTML = flag + '.00$'
            _total2.innerHTML = flag + '.00$'
        })
}

function _numberDown(x) {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            let _number = document.getElementById('number' + x)
            let _prise2 = document.getElementById('prise2' + x)
            p = data.price
            p1 = p.slice(0, 5)
            y4 = _number.getAttribute('data-status' + x)

            // const _li = document.createElement('li')

            // _li.innerHTML = `
            // <p class="text-[1rem] text-zinc-800">
            // <span class="me-6">${y4}</span>  ${pp} 
            // </p>
            // `
            // _div10.appendChild(_li)

            if (y4 > 1) {
                y4--
                _number.innerHTML = y4
                _number.setAttribute('data-status' + x, y4)
                _prise2.innerHTML = y4 * p1 + '.00$'
                pp = _prise2.innerHTML
                pp1 = parseInt(pp)
                _prise2.setAttribute('data-status', pp1)

                flag = flag - parseInt(data.price)
                _tdPrice1.innerHTML = flag + '.00$'
                _tdPrice2.innerHTML = flag + '.00$'
                _total1.innerHTML = flag + '.00$'
                _total2.innerHTML = flag + '.00$'
            }
        })
}

function _close3(x) {
    fetch('https://6599acb9652b843dea530ec4.mockapi.io/shop/' + x)
        .then(res => res.json())
        .then(data => {
            let _td = document.getElementById('td' + x)
            _td.parentElement.remove()
            priceCart.pop(data.price)
            flag = flag - parseInt(data.price)
            _tdPrice1.innerHTML = flag + '.00$'
            _tdPrice2.innerHTML = flag + '.00$'
            console.log(priceCart);
            if (priceCart == '') {
                flag = 0
                _tdPrice1.innerHTML = '00.00$'
                _tdPrice2.innerHTML = '00.00$'
                _total1.innerHTML = '00.00$'
                _total2.innerHTML = '00.00$'
            }
        })
}




// contact*********************************************************************************

let _send11 = document.getElementById('send11')

_send11.addEventListener('click', () => {
    let _inp11 = document.getElementById('inp11')
    let _inp12 = document.getElementById('inp12')
    let _inp13 = document.getElementById('inp13')
    let _inp14 = document.getElementById('inp14')
    if (
        _inp11.value == '' ||
        _inp11.value == ' ' ||
        _inp11.value == null ||
        _inp12.value == '' ||
        _inp12.value == ' ' ||
        _inp12.value == null ||
        _inp13.value == '' ||
        _inp13.value == ' ' ||
        _inp13.value == null ||
        _inp14.value == '' ||
        _inp14.value == ' ' ||
        _inp14.value == null
    ) {
        alert('false')
    } else {

        const first = _inp11.value;
        const last = _inp12.value;
        const email = _inp13.value;
        const message = _inp14.value;
        const newTask = {
            First: first,
            Last: last,
            Email: email,
            Message: message,
        };

        fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // Send your data in the request body as JSON
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            alert('your message is resived!')
        }).catch(error => {
            // handle error
            alert('adam bash')
        })
    }
})


async function getData8() {
    x = await fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Contact')
    y = await x.json()
    y.map((val) => {
        const _tr = document.createElement('tr')
        _tr.innerHTML = `
        <td
        class="border-2 border-zinc-400 w-[5%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.id}
    </td>
        <td
        class="border-2 border-zinc-400 w-[10%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.First}
    </td>
    <td
        class="border-2 border-zinc-400 w-[10%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.Last}
    </td>
    <td
        class="border-2 border-zinc-400 w-[30%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.Email}
    </td>
    <td
        class="border-2 border-zinc-400 w-[40%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.Message}
    </td>
    <td
        class="border-2 border-zinc-400 w-[5%] h-[10vh] flex justify-center items-center text-[1.5rem] text-black">
        <i onclick=del2(${val.id}) class="bi bi-x-square cursor-pointer"></i>
    </td>

        `
        _div8.appendChild(_tr)
    })
}

getData8()

function del2(x) {
    fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Contact/' + x, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
 
            return res.json();
        }
        // handle error
    }).then(task => {
        // Do something with deleted task
        alert('user by id ' + x + ' deleted!')
        location.reload()
    }).catch(error => {
        // handle error
    })
}

// signUp login***********************************************************

let _modLog = document.getElementById('modLog')
let _signUp = document.getElementById('signUp')
let _signUp1 = document.getElementById('signUp1')
let _login = document.getElementById('login')
let _log1 = document.getElementById('log1')
let _log2 = document.getElementById('log2')
let _log3 = document.getElementById('log3')
let _login1 = document.getElementById('login1')
let _box1 = document.getElementById('box1')
let _box2 = document.getElementById('box2')
let _box3 = document.getElementById('box3')
let _inpSign1 = document.getElementById('inpSign1')
let _inpSign2 = document.getElementById('inpSign2')
let _inpSign3 = document.getElementById('inpSign3')
let _inpLogin1 = document.getElementById('inpLogin1')
let _inpLogin2 = document.getElementById('inpLogin2')
let flag1 = 0

_log1.addEventListener('click', () => {
    _modLog.classList.remove('hidden')
    _box1.style.transform = 'translateX(100%)'
    _box2.style.transform = 'translateX(-100%)'
    _box3.style.transform = 'translateX(0%)'
})

_log2.addEventListener('click', () => {
    _modLog.classList.remove('hidden')
})

_login.addEventListener('click', () => {
    _box1.style.transform = 'translateX(0%)'
    _box2.style.transform = 'translateX(0%)'
    _box3.style.transform = 'translateX(100%)'

})
_signUp.addEventListener('click', () => {
    _box1.style.transform = 'translateX(100%)'
    _box2.style.transform = 'translateX(-100%)'
    _box3.style.transform = 'translateX(0%)'

})

_signUp1.addEventListener('click', () => {
    if (
        _inpSign1.value == '' ||
        _inpSign1.value == ' ' ||
        _inpSign1.value == null ||
        _inpSign2.value == '' ||
        _inpSign2.value == ' ' ||
        _inpSign2.value == null ||
        _inpSign3.value == '' ||
        _inpSign3.value == ' ' ||
        _inpSign3.value == null
    ) {
        alert('false')
    } else {
        fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Login')
            .then(res => res.json())
            .then(data => {
                data.map((val) => {
                    if (
                        _inpSign2.value === val.Email
                    ) {
                        flag1++
                        alert('There is an account')
                    }
                })
                if (flag1 == 0) {

                    const fullName = _inpSign1.value;
                    const email = _inpSign2.value;
                    const password = _inpSign3.value;
                    const newTask = {
                        FullName: fullName,
                        Email: email,
                        Password: password,
                    };

                    fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Login', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        // Send your data in the request body as JSON
                        body: JSON.stringify(newTask)
                    }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                    }).then(task => {
                        // do something with the new task
                        alert('your message is resived!')
                    }).catch(error => {
                        // handle error
                        alert('adam bash')
                    })
                }
            })
    }
})

_login1.addEventListener('click', () => {
    fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Login')
        .then(res => res.json())
        .then(data => {
            data.map((val) => {
                if (_inpLogin1.value === val.Email
                ) {
                    _modLog.classList.add('hidden')
                    _log3.innerHTML = val.FullName
                    _main1.style.display = 'black'
                } 
            })


        })
})

async function getData82() {
    x = await fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Login')
    y = await x.json()
    y.map((val) => {
        const _tr = document.createElement('tr')
        _tr.innerHTML = `
        <td
        class="border-2 border-zinc-400 w-[5%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.id}
    </td>
        <td
        class="border-2 border-zinc-400 w-[20%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.FullName}
    </td>
    <td
        class="border-2 border-zinc-400 w-[40%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.Email}
    </td>
    <td
        class="border-2 border-zinc-400 w-[30%] h-[10vh] flex justify-center items-center text-[1rem] text-black">
        ${val.Password}
    </td>
    
    <td
        class="border-2 border-zinc-400 w-[5%] h-[10vh] flex justify-center items-center text-[1.5rem] text-black">
        <i onclick=del22(${val.id}) class="bi bi-x-square cursor-pointer"></i>
    </td>

        `
        _div13.appendChild(_tr)
    })
}

getData82()

function del22(x) {
    fetch('https://65a013a25023b02bfe8b3a4d.mockapi.io/Login/' + x, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
 
            return res.json();
        }
        // handle error
    }).then(task => {
        // Do something with deleted task
        alert('user by id ' + x + ' deleted!')
        location.reload()
    }).catch(error => {
        // handle error
    })
}

// checkout ******************************************************************
let _checkout = document.getElementById('checkout')
let _checkoutClose = document.getElementById('checkoutClose')

_checkout.addEventListener('click', () => {
    _modAdd.classList.remove('hidden')

})
_checkoutClose.addEventListener('click', () => {
    _modAdd.classList.add('hidden')

})





// *****************************************************
let _send111 = document.getElementById('send111')
_send111.addEventListener('click', () => {
    let _inpCheckout = document.getElementsByClassName('inpCheckout')
    
    if (
        _inpCheckout[0].value == '' ||
        _inpCheckout[0].value == ' ' ||
        _inpCheckout[0].value == null ||
        _inpCheckout[1].value == '' ||
        _inpCheckout[1].value == ' ' ||
        _inpCheckout[1].value == null ||
        _inpCheckout[5].value == '' ||
        _inpCheckout[5].value == ' ' ||
        _inpCheckout[5].value == null ||
        _inpCheckout[7].value == '' ||
        _inpCheckout[7].value == ' ' ||
        _inpCheckout[7].value == null||
        _inpCheckout[8].value == '' ||
        _inpCheckout[8].value == ' ' ||
        _inpCheckout[8].value == null||
        _inpCheckout[9].value == '' ||
        _inpCheckout[9].value == ' ' ||
        _inpCheckout[9].value == null
    ) {
        alert('false')
    } else {

        const First = _inpCheckout[0].value;
        const Last = _inpCheckout[1].value;
        const Company = _inpCheckout[2].value;
        const Street1 = _inpCheckout[3].value;
        const Street2 = _inpCheckout[4].value;
        const Town = _inpCheckout[5].value;
        const County = _inpCheckout[6].value;
        const Postcode = _inpCheckout[7].value;
        const Phone = _inpCheckout[8].value;
        const Email = _inpCheckout[9].value;
        const Order = _inpCheckout[10].value;
        const newTask = {
            First: First,
            Last: Last,
            Company: Company,
            Street1:Street1,
            Street2:Street2,
            Town: Town,
            County: County,
            Postcode: Postcode,
            Phone: Phone,
            Email: Email,
            Order: Order,
        };

        fetch('https://65a164d5600f49256fb195be.mockapi.io/Checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // Send your data in the request body as JSON
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            alert('your message is resived!')
        }).catch(error => {
            // handle error
            alert('adam bash')
        })
    }
})

async function getData81() {
    x = await fetch('https://65a164d5600f49256fb195be.mockapi.io/Checkout')
    y = await x.json()
    y.map((val) => {
        const _table = document.createElement('table')
        _table.innerHTML = `
        <tr id="tr81" class="w-[100%] flex bg-white">
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">First Name : ${val.First} </td>
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Last Name : ${val.Last}</td>
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Company Name : ${val.Company}</td>
    </tr>
    <tr class="w-[100%] flex bg-white">
        <td class="w-[50%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Street Address1 : ${val.Street1} </td>
        <td class="w-[50%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Street Address2 : ${val.Street2}</td>
    </tr>
    <tr class="w-[100%] flex bg-white">
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Town / City : ${val.Town} </td>
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">County : ${val.County}</td>
        <td class="w-[33.3333%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Postcode : ${val.Postcode}</td>
    </tr>
    <tr class="w-[100%] flex bg-white">
        <td class="w-[50%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Phone : ${val.Phone} </td>
        <td class="w-[50%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Email : ${val.Email}</td>
    </tr>
    <tr class="w-[100%] flex bg-white">
        <td class="w-[100%] border-2 border-zinc-400 h-[10vh] flex justify-center items-center text-[1rem] text-black">Order notes : ${val.Order} </td>
    </tr>
    <tr class="w-[100%] flex bg-white">                         
        <td class="w-[100%] flex justify-center items-center border-2 border-zinc-400 h-[10vh]">
            <button onclick=myDel(${val.id}) class="w-[30%] h-[3.5rem] md:h-[2.5rem] my-5 text-[2.5rem] md:text-[1.5rem] bg-color1 text-white hover:bg-black transition-all duration-300">remove</button>
        </td>
    </tr>
        `
        _div12.appendChild(_table)
    })
}

getData81()

function myDel(x) {
    fetch('https://65a164d5600f49256fb195be.mockapi.io/Checkout/' + x, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            let _tr = document.getElementById('tr81' + x)
                _tr.parentElement.remove()
            return res.json();
        }
        // handle error
    }).then(task => {
        // Do something with deleted task
        alert('user by id ' + x + ' deleted!')
        location.reload()
    }).catch(error => {
        // handle error
    })
}