export function successTemplate(fee, adult, participantsCount) {
    let all = document.querySelector(".testbox")
    all.style.display = "none"
    let p = document.createElement("p");
    p.innerHTML = `Thank you ${adult} for registering. The total fee is $${fee} and you have registered ${participantsCount} participants.`
    document.body.appendChild(p)
}

export function GetFee(participants) {
    let fee = 0;
    participants.forEach((participant) => {
        let feeinput = parseFloat(participant.querySelector("[id^= 'feeinput']").value);
        fee += feeinput;
    });
    return fee;
}