var min;
var sec;

function checkQuestions() {
    var TotalQuestion = parseInt(document.getElementById("TotalQuestions").value);

    if (isNaN(TotalQuestion)) {
        alert("Please Enter a Valid Total Question!!");
        return;
    }

}

function checkTotalTime() {

    var TotalTime = parseInt(document.getElementById("TotalTime").value);

    if (isNaN(TotalTime)) {
        alert("Please Enter a Valid Total Time!!");
        return;
    }
}

function Checked() {

    var TotalQuestion = parseInt(document.getElementById("TotalQuestions").value);

    var TotalTime = parseInt(document.getElementById("TotalTime").value);

    var cb = document.querySelector('#checkbox');
    if (cb.checked) {

        var RevisionTime = parseInt(document.getElementById("RevisionTime").value);

        if (TotalTime == RevisionTime || TotalTime < RevisionTime) {
            alert("Please Enter a Valid Revision Time!!");
            cb.checked = false;
            return;
        }
        else if (isNaN(RevisionTime)) {
            alert("Please Enter a Valid Revision Time!!");
            cb.checked = false;
            return;
        }
        else {
            var Questions = document.querySelector("#Questions");
            Questions.innerText = TotalQuestion;

            var Time = document.querySelector("#Time");
            Time.innerText = TotalTime;

            var Revision = document.querySelector("#Revision");
            Revision.innerText = RevisionTime;

            var SingleTime = TotalTime - RevisionTime;

            SingleTime = SingleTime / TotalQuestion;


            min = parseInt(SingleTime);

            sec = SingleTime - min;
            sec = sec*60;
            sec = parseInt(sec);
            
            console.log(sec);
            var SingleQuestion = document.querySelector("#SingleQuestion");

            SingleQuestion.innerText = min + " Minutes " + sec + " Seconds";

            var Body = document.querySelector("#body");
            Body.style.display = "block";
        }

    }

}

function StartCounter() {

    var TotalQuestion = parseInt(document.getElementById("TotalQuestions").value);

    var TotalTime = parseInt(document.getElementById("TotalTime").value);

    var RevisionTime = parseInt(document.getElementById("RevisionTime").value);

    localStorage.setItem("TQ",TotalQuestion);
    localStorage.setItem("TT",TotalTime);
    localStorage.setItem("RT",RevisionTime);

    localStorage.setItem("min",min);
    localStorage.setItem("sec",sec);

    NewTab();
}
function NewTab() {
    window.open(
        "TimerPage.html", "_blank");
}