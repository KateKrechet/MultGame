let comp = ''
let hum = ''
const turn = ['k', 'n', 'b']
const win = ['kn', 'nb', 'bk']
const loose = ['kb', 'nk', 'bn']
const draw = ['kk', 'nn', 'bb']
let scoreh = 0
let scorec = 0
function reload() {
    location.reload(10)
}
function NumbersToPictures(x, y) {
    switch (x) {
        case('k'): {
            $(y).html('<img src="ilya3.jpg" width="100%" height="100%">')
            break;
        }
        case('n'): {
            $(y).html('<img src="bird2.jpg" width="100%" height="100%">')
            break;
        }
        case('b'): {
            $(y).html('<img src="kn2.jpg" width="100%" height="100%">')
            break;
        }
    }

}

function f1(x) {

    hum = x
    NumbersToPictures(x, '#gamer')
    let r = Math.floor(Math.random() * 3)
    comp = turn[r]
    NumbersToPictures(comp, '#rival')
    proverka()
}

function proverka() {
    let result = hum + comp
    switch (result) {
        case ('kn'): {
            scoreh++
            $('#out').text('Никакая сила не сравнится с силой русского богатыря!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break;
        }
        case ('nb'): {
            scoreh++
            $('#out').text('Ты проиграл князь! Плати или отдавай часть земель!!!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }
        case ('bk'): {
            scoreh++
            $('#out').text('Богатырь! Ты замахнулся на своего руководителя?! Ты уволен!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }
        case ('kb'): {
            scorec++
            $('#out').text('Князь, прости! Я плохо вижу в темноте! Буду работать бесплатно!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }
        case ('nk'): {
            scorec++
            $('#out').text('Илья Муромец, прости, если увидишь меня под ногами. Я сдаюсь и уплываю!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }
        case ('bn'): {
            scorec++
            $('#out').text('Соловушка Дорогой, может Забаву вместо земель?!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }
        default: {
            $('#out').text('Ты встретился с равным противником!')
            $('#scoreh').text('Очки: ' + scoreh)
            $('#scorec').text('Очки: ' + scorec)
            break
        }

    }

}

$('#hero1').click(function () {
    f1('k')
})
$('#hero2').click(function () {
    f1('n')
})
$('#hero3').click(function () {
    f1('b')
})
$('#new_game').click(reload)
