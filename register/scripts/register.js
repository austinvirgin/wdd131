import { successTemplate } from './templates.js';
import { GetFee } from './templates.js';

let participantsCount = 0;

function Participants() {
    participantsCount += 1;
    addParticipant(participantsCount);
};

function addParticipant(participantsCount){
    let index = participantsCount
    let participant = document.createElement('section');
    participant.id = ("participant"+index);
    let participantNum = document.createElement('p');
    participantNum.innerText = "Participant " + index;

    let item = document.createElement("div");
    item.classList.add("item");

    let fname = document.createElement('label');
    fname.htmlfor = "fname" + index;
    fname.id = 'fname' + index;
    fname.innerText = "First Name";

    let span = document.createElement('span');
    span.innerText = "*";

    let fnameinput = document.createElement('input');
    fnameinput.id = "fnameinput" + index;
    fnameinput.type = "text";
    fnameinput.name = "fname" + index;
    
    let itemActivity = document.createElement("div");
    itemActivity.classList.add("itemactivities");

    let activity = document.createElement('label');
    activity.htmlforfor = "activity" + index;
    activity.id = "activity" + index;
    activity.innerText = "Activity #";
    let span1 = document.createElement('span');
    span1.innerText = "*";

    let activityInput = document.createElement("input");
    activityInput.type = "text";
    activityInput.name = "activity" + index;

    let itemfee = document.createElement("div");
    itemfee.classList.add("itemfee");

    let fee = document.createElement('label');
    fee.for = "fee" + index;
    fee.id = "fee" + index;
    fee.innerText = "Fee ($)";
    let span2 = document.createElement('span');
    span2.innerText = "*";

    let feeInput = document.createElement("input");
    feeInput.type = "number";
    feeInput.name = "feeinput" + index;
    feeInput.id = "feeinput" + index;

    let itemdate = document.createElement("div");
    itemdate.classList.add("itemdate");
    
    let date = document.createElement('label');
    date.htmlfor = "date";
    date.innerText = "Desired Date";
    let span3 = document.createElement('span');
    span3.innerText = "*";

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "date" + index;

    let itemgrade = document.createElement("div");
    itemgrade.classList.add("itemgrade");

    let select = document.createElement("select");

    let grade = document.createElement("label");
    grade.htmlfor = "grade" + index;
    grade.id = "grade" + index;
    grade.innerText = "Grade";

    let div = document.createElement("div");
    div.classList.add("itemgradediv");

    let option = document.createElement("option");
    option.selectedvalue = "";
    option.disabled = true;
    option.selected = true;

    for (let index = 1; index < 13; index++) {
        option = document.createElement("option");
        option.value = index;
        option.innerText = index
        select.appendChild(option);
    }
    document.querySelector("#participants").appendChild(participant);
    participant.appendChild(participantNum);
    participant.appendChild(item);
    item.appendChild(fname);
    fname.appendChild(span);
    item.appendChild(fnameinput);
    participant.appendChild(itemActivity);
    itemActivity.appendChild(activity);
    itemActivity.appendChild(span1);
    itemActivity.appendChild(activityInput);
    participant.appendChild(itemfee);
    itemfee.appendChild(fee);
    itemfee.appendChild(span2);
    itemfee.appendChild(feeInput);
    participant.appendChild(itemdate);
    itemdate.appendChild(date);
    itemdate.appendChild(span3);
    itemdate.appendChild(dateInput);
    participant.appendChild(itemgrade);
    itemgrade.appendChild(select);
    itemgrade.appendChild(grade);
    itemgrade.appendChild(div);
}

Participants();

document.querySelector("#addpart").addEventListener("click" , Participants);

function submitForm(event) {
    event.preventDefault();
    let fee = 0;
    let participants = document.querySelectorAll("#participants > section");
    fee = GetFee(participants);

    let adult = document.querySelector("#adult_name").value;
    successTemplate(fee, adult, participantsCount);
}



document.querySelector("#submitButton").addEventListener("click", submitForm);

