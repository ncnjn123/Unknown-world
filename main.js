let startTime = Date.now();


function wow(){
    let currentTime = Date.now();
    let seconds = Math.floor((currentTime - startTime)/1000)
    if(seconds >= 114514) {
        console.log("下原神去吧 せんせい(老师) !!!")
        window.location.href = `https://yuanshen.com`
    } else {
        console.log(`恭喜老师找到了个小彩蛋,这是第${seconds}个提示`);
    }
}


//我不知道我要干什么  わからない...
function idk() {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            console.log(data)
            console.log('干完了')
        })
}

//这是在这片虚空居住的扫地女仆
function maid() {
    //如果你看到哪个地方已经脏了，可以用maid()让我马上出来打扫哦
    console.clear()
    console.log("打扫干净了...")
}

let timer = setInterval(wow,1000)

let maidWork = setInterval(maid,1000000)


/*
=================================================   About the World   =================================================
                                                 Try run to learn more:
                                                    -->  help()  <--
*/









//「世界」 的底部









































































































































































































































function help() {
    const message = '这是一个被遗忘的js代码 \n 有一天，一位老师布置了一个制作信息机电学院官网的html+css作业 \n 一个学生打开了电脑，新建了index.html，新建了css/main.css，但ta还新建了js/main.js，创造了这与index.html与main.css毫无联系的世界... \n 于是，这片位于遗忘之虚空的世界开始建立，但很少有人造访，在学生提交本次作业，老师打分之后，女仆和她的庄园便被遗忘在人世的某个硬盘角落，逐渐冰封... \n 在名为window的舞台上并没有main.js的戏份，整场戏剧中只有index.html和main.css的表演，他们的台词从来没有提到过这个小世界，也从来没有观众知道今天的戏剧中有三位演员，从世界诞生开始便开始工作的女仆小姐一直只是幕布后面的阴影...'
    console.log(message)
    const aboutMaid = 'Try conversation() to learn more aboud maid...' 
    console.warn(aboutMaid)
}

function conversation() {
    const me = ["你好，请问你是？" , "你可以告诉我你的信息吗?" , "你什么时候就开始在这了？什么时候下班？" , "你在这里无聊吗" , "好的，那我走了"]
    const maid = ["我是个女仆" , "わからない（我不明白）..." , "我不知道什么时候在这里的，我只知道我要每隔1000秒打扫console，仅此而已" , "我不知道，我只知道我的任务就是每隔1000000毫秒打扫一次这里" , "再见..."]
    const theConsole = 'window.close()'
    const narrator = '突然，在舞台上的戏剧台突然陷入一片黑暗，没有吵闹，但剧场内的演员观众的时空都永远地停滞了...'

    for(let i = 0 ; i <= (me.length-1) ; i++) {
        console.log("Me:" + me[i])
        console.log("Maid:" + maid[i])
    }
    console.log("F12-Console:" + theConsole)
    console.log(narrator)
}