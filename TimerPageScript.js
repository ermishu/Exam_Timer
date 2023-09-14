// Store Values 
var TotalQuestion = parseInt(localStorage.getItem("TQ"));
var TotalTime = parseInt(localStorage.getItem("TT"));
var RevisionTime = parseInt(localStorage.getItem("RT"));

var min = parseInt(localStorage.getItem("min"));
var sec = parseInt(localStorage.getItem("sec"));

var TotalExamHours = parseInt(TotalTime / 60);

var TotalExamMinutes = parseInt(TotalTime % 60);

var Num = document.querySelector("#no");


// MustHave Attempted Timmer
var MHAM = 0;
var MHAS = 0;

// Show Question Table
var RemainingQuesCurr = document.querySelector('#options #RemainingQues .current');
var RemainingQuesNext = document.querySelector('#options #RemainingQues .next');

var AttemptedQuesCurr = document.querySelector('#options #AttemptedQues .current');
var AttemptedQuesNext = document.querySelector('#options #AttemptedQues .next');

var MustAttemptedQuesCurr = document.querySelector('#options #MustAttemptedQues .current');
var MustAttemptedQuesNext = document.querySelector('#options #MustAttemptedQues .next');

if (parseInt(TotalQuestion) <= 9) {
    RemainingQuesCurr.innerText = "0" + TotalQuestion;
    RemainingQuesNext.innerText = "0" + (parseInt(TotalQuestion) - 1);
} else {
    RemainingQuesCurr.innerText = TotalQuestion;
    RemainingQuesNext.innerText = TotalQuestion - 1;
}

// Buttons

var Done = document.querySelector("#Done");
var Submit = document.querySelector("#Submit");

// Start Exam Timer
var ExamSecondCurr = document.querySelector('#TotalTime #Seconds .current');
var ExamSecondNext = document.querySelector('#TotalTime #Seconds .next');

var ExamMinuteCurr = document.querySelector('#TotalTime #Minutes .current');
var ExamMinuteNext = document.querySelector('#TotalTime #Minutes .next');

var ExamHoursCurr = document.querySelector('#TotalTime #hours .current');
var ExamHoursNext = document.querySelector('#TotalTime #hours .next');
var Startintervalevent;

// Single Question Timer

var SingleQuesMinutescurr = document.querySelector("#questionTimer div#Minutes p.current");

var SingleQuesMinutesnext = document.querySelector("#questionTimer div#Minutes p.next");

var SingleQuesSecondscurr = document.querySelector("#questionTimer div#Seconds p.current");

var SingleQuesSecondsnext = document.querySelector("#questionTimer div#Seconds p.next");

var SingleQuesIntervalevent;

var minArray = [];
var secArray = [];

// Bonus Timer
var BTminutescurr = document.querySelector("#BonusTime div#Minutes p.current");
var BTminutesnext = document.querySelector("#BonusTime div#Minutes p.next");

var BTSecondscurr = document.querySelector("#BonusTime div#Seconds p.current");
var BTSecondsnext = document.querySelector("#BonusTime div#Seconds p.next");

var hC = document.querySelector("#BonusTime div#hours p.current");
var mC = document.querySelector("#BonusTime div#Minutes p.current");
var sC = document.querySelector("#BonusTime div#Seconds p.current");
var hN = document.querySelector("#BonusTime div#hours p.next");
var mN = document.querySelector("#BonusTime div#Minutes p.next");
var sN = document.querySelector("#BonusTime div#Seconds p.next");


// Couter To Start the Timer
alert("Start!!");

// Start Timer
StartTimer();

function StartTimer() {
    ExamTimer();
    SingleQuesTimer();
}

function ExamTimer() {
    Startintervalevent = setInterval(ExamSecondCounter, 1000);
}

function ExamSecondCounter() {

    if (MHAM == min && MHAS == sec) {
        console.log("yes");
        MustHaveAttempted();
        MHAM = 0;
        MHAS = 0;
    }
    if (parseInt(ExamSecondCurr.innerText) == 60) {
        MHAS = 0;
        resetExamSecond();
        ExamMinuteCounter();
        if (MHAM == min && MHAS == sec) {
            console.log("yes");
            MustHaveAttempted();
            MHAM = 0;
            MHAS = 0;
        }
    }
    if (parseInt(ExamHoursCurr.innerText) == TotalExamHours && parseInt(ExamMinuteCurr.innerText) == TotalExamMinutes) {
        clearInterval(Startintervalevent);
        TimeOver();
        return;
    }
    MHAS++;
    ExamSecondNext.classList.add('animate');
    setTimeout(function () {
        ExamSecondCurr.innerText = ExamSecondNext.innerText;
        ExamSecondNext.classList.remove('animate');
        ExamSecondNext.innerText = parseInt(ExamSecondNext.innerText) + 1;
        if (0 < parseInt(ExamSecondNext.innerText) && parseInt(ExamSecondNext.innerText) <= 9) {
            ExamSecondNext.innerText = '0' + ExamSecondNext.innerText;
        }
    }, 500);
}

function ExamMinuteCounter() {
    if (parseInt(ExamMinuteCurr.innerText) == 60) {
        resetExamMinute();
        ExamHoursCounter();
    }
    if (parseInt(ExamHoursCurr.innerText) == TotalExamHours && parseInt(ExamMinuteCurr.innerText) == TotalExamMinutes) {
        clearInterval(Startintervalevent);
        TimeOver();
        return;
    }
    MHAM++;
    ExamMinuteNext.classList.add('animate');
    setTimeout(function () {
        ExamMinuteCurr.innerText = ExamMinuteNext.innerText;
        ExamMinuteNext.classList.remove('animate');
        ExamMinuteNext.innerText = parseInt(ExamMinuteNext.innerText) + 1;
        if (0 < parseInt(ExamMinuteNext.innerText) && parseInt(ExamMinuteNext.innerText) <= 9) {
            ExamMinuteNext.innerText = '0' + ExamMinuteNext.innerText;
        }
    }, 500);
}

function ExamHoursCounter() {
    ExamHoursNext.classList.add('animate');
    setTimeout(function () {
        ExamHoursCurr.innerText = ExamHoursNext.innerText;
        ExamHoursNext.classList.remove('animate');
        ExamHoursNext.innerText = parseInt(hoursnext.innerText) + 1;
        if (0 < parseInt(ExamHoursNext.innerText) && parseInt(ExamHoursNext.innerText) <= 9) {
            ExamHoursNext.innerText = '0' + ExamHoursNext.innerText;
        }
    }, 500);

}

// Reset Exam Timer Funtions

function resetExamSecond() {
    ExamSecondCurr.innerText = '00';
    ExamSecondNext.innerText = '01';
}
function resetExamMinute() {
    ExamMinuteCurr.innerText = '00';
    ExamMinuteNext.innerText = '01';
}
function resetExamHours() {
    ExamHoursCurr.innerText = '00';
    ExamHoursNext.innerText = '01';
}



function SingleQuesTimer() {
    SingleQuesIntervalevent = setInterval(SingleQuessecondCounter, 1000);
}


function SingleQuessecondCounter() {

    if (parseInt(SingleQuesSecondscurr.innerText) == 60) {
        resetSingleQuessecond();
        SingleQuesminuteCounter();
    }
    if ((parseInt(SingleQuesMinutescurr.innerText) > min) || (parseInt(SingleQuesMinutescurr.innerText) == min && parseInt(SingleQuesSecondscurr.innerText) >= sec)) {
        BonusTimerSecond();
    }
    SingleQuesSecondsnext.classList.add('animate');
    setTimeout(function () {
        SingleQuesSecondscurr.innerText = SingleQuesSecondsnext.innerText;
        SingleQuesSecondsnext.classList.remove('animate');
        SingleQuesSecondsnext.innerText = parseInt(SingleQuesSecondsnext.innerText) + 1;
        if (0 < parseInt(SingleQuesSecondsnext.innerText) && parseInt(SingleQuesSecondsnext.innerText) <= 9) {
            SingleQuesSecondsnext.innerText = '0' + SingleQuesSecondsnext.innerText;
        }
    }, 500);
}

function SingleQuesminuteCounter() {

    SingleQuesMinutescurr.classList.add('animate');
    setTimeout(function () {
        SingleQuesMinutescurr.innerText = SingleQuesMinutesnext.innerText;
        SingleQuesMinutesnext.classList.remove('animate');
        SingleQuesMinutesnext.innerText = parseInt(SingleQuesMinutesnext.innerText) + 1;
        if (0 < parseInt(SingleQuesMinutesnext.innerText) && parseInt(SingleQuesMinutesnext.innerText) <= 9) {
            SingleQuesMinutesnext.innerText = '0' + SingleQuesMinutesnext.innerText;
        }
    }, 500);
}

function resetSingleQuessecond() {
    SingleQuesSecondscurr.innerText = "00";
    SingleQuesSecondsnext.innerText = "01";
}
function resetSingleQuesMinute() {
    SingleQuesMinutescurr.innerText = "00";
    SingleQuesMinutesnext.innerText = "01";
}



function Stops() {

    RemainingQues();
    AttempedQues();
    BonusTimer();
    resetSingleQuesMinute();
    resetSingleQuessecond();
    var temp = parseInt(Num.innerText) + 1;
    if(temp>TotalQuestion){
        TimeOver();
    }
    Num.innerText = temp;

}
function BonusTimer() {
    var m = parseInt(BTminutescurr.innerText);
    var s = parseInt(BTSecondscurr.innerText);

    var BonusMin;
    var BonusSec;

    var m1 = parseInt(SingleQuesMinutescurr.innerText);
    var s1 = parseInt(SingleQuesSecondscurr.innerText);
    minArray.push(m1);
    secArray.push(s1);
    if ((m1 > min) || (m1 == min) && (s1 >= sec)) {
        return;
    }
    var m2 = min;
    var s2 = sec;

    if (m1 >= m2) {
        if (s1 >= s2) {
            BonusSec = s1 - s2;
        }
        else {
            m1--;
            s1 += 60;
            BonusSec = s1 - s2;
        }
        BonusMin = m1 - m2;
    } else {
        if (s2 >= s1) {
            BonusSec = s2 - s1;
        }
        else {
            m2--;
            s2 += 60;
            BonusSec = s2 - s1;
        }
        BonusMin = m2 - m1;
    }
    console.log(BonusMin, BonusSec);
    var ansM;
    var ansS;

    ansS = s + BonusSec;
    var temp = parseInt(ansS / 60);
    ansS = ansS % 60;
    ansM = temp + m + BonusMin;
    console.log(ansM, ansS);
    BTminutescurr.innerText = ansM;
    BTminutesnext.innerText = ansM - 1;
    BTSecondscurr.innerText = ansS;
    BTSecondsnext.innerText = ansS - 1;

}
function BonusTimerSecond() {

    if (parseInt(BTSecondscurr.innerText) == -60) {
        resetBTSEcondCounter();
        BonusTimerMinute();
    }
    BTSecondscurr.classList.add('animate');
    setTimeout(function () {
        BTSecondscurr.innerText = BTSecondsnext.innerText;
        BTSecondsnext.classList.remove('animate');
        BTSecondsnext.innerText = parseInt(BTSecondsnext.innerText) - 1;
        if (0 < parseInt(BTSecondsnext.innerText) && parseInt(BTSecondsnext.innerText) <= 9) {
            BTSecondsnext.innerText = '0' + BTSecondsnext.innerText;
        }
    }, 500);

}

function BonusTimerMinute() {
    BTminutescurr.classList.add('animate');
    setTimeout(function () {
        BTminutescurr.innerText = BTminutesnext.innerText;
        BTminutesnext.classList.remove('animate');
        BTminutesnext.innerText = parseInt(BTminutesnext.innerText) - 1;
        if (0 < parseInt(BTminutesnext.innerText) && parseInt(BTminutesnext.innerText) <= 9) {
            BTminutesnext.innerText = '0' + BTminutesnext.innerText;
        }
    }, 500);
}

function resetBTSEcondCounter() {
    BTSecondscurr.innerText = "00";
    BTSecondsnext.innerText = "-01"
}
function RemainingQues() {
    RemainingQuesCurr.classList.add('animate');
    setTimeout(function () {
        RemainingQuesCurr.innerText = RemainingQuesNext.innerText;
        RemainingQuesNext.classList.remove('animate');
        RemainingQuesNext.innerText = parseInt(RemainingQuesNext.innerText) - 1;
        if (0 < parseInt(RemainingQuesNext.innerText) && parseInt(RemainingQuesNext.innerText) <= 9) {
            RemainingQuesNext.innerText = '0' + RemainingQuesNext.innerText;
        }
    }, 500);
}

function AttempedQues() {
    AttemptedQuesCurr.classList.add('animate');
    setTimeout(function () {
        AttemptedQuesCurr.innerText = AttemptedQuesNext.innerText;
        AttemptedQuesNext.classList.remove('animate');
        AttemptedQuesNext.innerText = parseInt(AttemptedQuesNext.innerText) + 1;
        if (0 < parseInt(AttemptedQuesNext.innerText) && parseInt(AttemptedQuesNext.innerText) <= 9) {
            AttemptedQuesNext.innerText = '0' + AttemptedQuesNext.innerText;
        }
    }, 500);
}


// Must Have Attempted

function MustHaveAttempted() {
    MustAttemptedQuesCurr.classList.add('animate');
    setTimeout(function () {
        MustAttemptedQuesCurr.innerText = MustAttemptedQuesNext.innerText;
        MustAttemptedQuesNext.classList.remove('animate');
        MustAttemptedQuesNext.innerText = parseInt(MustAttemptedQuesNext.innerText) + 1;
        if (0 < parseInt(MustAttemptedQuesNext.innerText) && parseInt(MustAttemptedQuesNext.innerText) <= 9) {
            MustAttemptedQuesNext.innerText = '0' + MustAttemptedQuesNext.innerText;
        }
    }, 500);
}

function NewTab() {
    window.open(
        "result.html");
}

function TimeOver() {
    
    localStorage.setItem("SQ", parseInt(AttemptedQuesCurr.innerText));

    localStorage.setItem("RQ", TotalQuestion-parseInt(AttemptedQuesCurr.innerText));

    localStorage.setItem("minArray", minArray);
    localStorage.setItem("secArray", secArray);
    NewTab();
}
