
    const input = document.querySelectorAll('input')
    console.log(input);

    const logo = document.querySelector('.logo>img')
    const num1 = document.querySelector('.num1')
    const num2 = document.querySelector('.num2')
    const num3 = document.querySelector('.num3')
    const num4 = document.querySelector('.num4')
    const cv = document.querySelector('.cv')
    const yy = document.querySelector('.yy')
    const mm = document.querySelector('.mm')
    const fname = document.querySelector('.name>span')
    const inpnum = document.querySelectorAll('.inpnum>input')
    const inpexp = document.querySelectorAll('.inpexp>input')
    const inpcv = document.querySelector('.inpcv>input')
    const sub = document.querySelector('.sub')
    const body = document.querySelector('body')


    // name ////////

    let name = prompt('ENTER YOUR FULL NAME PLEASE')
    fname.innerHTML = name

    // name ////////

    //    numbers inputs   ///////////


    inpnum.forEach((val, i) => {
        val.addEventListener('keyup', (e) => {
            let myKeyCode = e.keycode || e.which
            if (myKeyCode == 8) {
                if (val.value.length == 0) {
                    if (i != 0) {
                        val.previousElementSibling.focus()
                    }
                }
            } else {
                if (val.value.length >= 4) {
                    val.value = val.value.slice(0, 4)
                    if (i != 3) {
                        val.nextElementSibling.focus()
                    } else {
                        inpexp[0].focus()
                    }
                }

            }
            if (i == 0) num1.textContent = val.value;
            if (i == 1) num2.textContent = val.value;
            if (i == 2) num3.textContent = val.value;
            if (i == 3) num4.textContent = val.value;


            // end of the card number 


            const bank = firstsix()

            switch (bank) {
                case '603799':
                    logo.src = 'assets/img/meli bank.png';
                    break;
                case '627412':
                    logo.src = 'assets/img/eqtesad novin.png';
                    break;
                case '621986':
                    logo.src = 'assets/img/saman.png';
                    break;
                case '610433':
                    logo.src = 'assets/img/melat.png';
                    break;
                case '622106':
                    logo.src = 'assets/img/parsian.png';
                    break;
                case '627884':
                    logo.src = 'assets/img/parsian.png';
                    break;
                case '603769':
                    logo.src = 'assets/img/saderat.png';
                case '589210':
                    logo.src = 'assets/img/sepah.png';
                    break;
                case '628023':
                    logo.src = 'assets/img/maskan.png';
                    break;
                case '627353':
                    logo.src = 'assets/img/tejarat.png';
                    break;
                case '585983':
                    logo.src = 'assets/img/tejarat.png';
                    break;

                default:
                    break;
            }
            if (bank < 6) {
                logo.src = ''
            }
        })


    })


    // end of the logos 


    inpexp.forEach((val, i) => {
        val.addEventListener('keyup', (e) => {
            let mykeycode = e.keycode || e.which
            if (mykeycode == 8) {
                if (val.value.length == 0) {
                    if (i != 0) {
                        val.previousElementSibling.focus()
                    } else {
                        inpnum[3].focus()
                    }
                }
            } else {
                if (val.value.length >= 2) {
                    val.value = val.value.slice(0, 2)
                    if (i != 1) {
                        val.nextElementSibling.focus()
                    } else {
                        inpcv.focus()
                    }
                }
            }
            if (i == 0) mm.textContent = val.value;
            if (i == 1) yy.textContent = val.value;
        })
    })


    // end of the exp


    inpcv.addEventListener('keyup', (e) => {
        let myKeyCode = e.keycode || e.which
        if (myKeyCode == 8) {
            if (inpcv.value.length == 0) {
                inpexp[1].focus()

            }
        } else {
            if (inpcv.value.length >= 4) {
                inpcv.value = inpcv.value.slice(0, 4)
                sec.focus()

            }
        }

        cv.textContent = inpcv.value;
    })
    // end of the cv 

    const sec = document.querySelector('#inpsec')
    const randomNumber = document.querySelector('#randomNumber')



    sec.addEventListener('keyup', (e) => {
        let myKeyCode = e.keycode || e.which
        if (myKeyCode == 8) {
            if (sec.value.length == 0) {
                inpcv.focus();
            }
        } else {
            if (sec.value.length >= 3) {
                sec.value = sec.value.slice(0, 3)
            }
        }

    })

    // end of the security section 
    const myalert = false
    const mysec = false
    sub.addEventListener('click', () => {
        input.forEach((val) => {
            if (val.value.trim() == '' && !myalert) {
                alert('you missed at least on field')
                myalert = true
            } else {
                if (randomNumber.innerHTML != sec.value && !mysec) {
                    alert('security code is incorrect , please try again')

                } else {
                    if (randomNumber.innerHTML == sec.value) {
                        alert('thanks for submiting')
                    }
                }
            }
            myalert = false;
            mysec = false;
            sec = ''
        })



    })








    function firstsix() {
        let bank = '';
        bank += inpnum[0].value.slice(0, 4);
        bank += inpnum[1].value.slice(0, 4);
        return bank;

    }
    // for logo 
    let x = ''
    function random() {
        var x = Math.floor(Math.random() * (999 - 100) + 100);
        // console.log(x);
        randomNumber.innerHTML = x;
    }
    random()
    // random number 








