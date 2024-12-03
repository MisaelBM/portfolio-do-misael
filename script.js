let pointNumber = 0;
PositionScroll();
document.getElementById("upButton").addEventListener('click', () => {
    pointNumber == 0 ? pointNumber = 2 : pointNumber--;
    PointPosition("up");
});
document.getElementById("downButton").addEventListener('click', () => {
    pointNumber == 2 ? pointNumber = 0 : pointNumber++;
    PointPosition("down");
});
function PointPosition(upOrDown) {
    document.querySelectorAll(".point")[upOrDown == "up" ? pointNumber == 2 ? 0 : pointNumber + 1 : pointNumber == 0 ? 2 : pointNumber - 1].classList.remove("marked-point");
    document.querySelectorAll(".point")[pointNumber].classList.add("marked-point");
    document.querySelectorAll(".text-point")[upOrDown == "up" ? pointNumber == 2 ? 0 : pointNumber + 1 : pointNumber == 0 ? 2 : pointNumber - 1].classList.remove("anim-point");
    document.querySelectorAll(".text-point")[pointNumber].classList.add("anim-point");
    PositionScroll()
};
document.querySelectorAll(".points-bar").forEach(e => {
    e.addEventListener('click', () => {
        let point = document.querySelectorAll(".points-bar");
        document.querySelectorAll(".point")[pointNumber].classList.remove("marked-point");
        document.querySelectorAll(".text-point")[pointNumber].classList.remove("anim-point");
        for (let i = 0; i < point.length; i++) {
            point[i] == e ? pointNumber = i : false;
        };
        document.querySelectorAll(".point")[pointNumber].classList.add("marked-point");
        PositionScroll();
    });
});
function PositionScroll() {
    window.scrollTo(0, document.getElementById("myProfile").scrollHeight * pointNumber);
};
let slideSkillPosition = 0;
document.getElementById("skillsLeftButton").addEventListener('click', () => {
    !slideSkillPosition ? slideSkillPosition = -document.querySelectorAll(".skill").length : false;
    document.getElementById("skillsSlide").style.transform = `translateX(${180 * ++slideSkillPosition}px)`;
});
document.getElementById("skillsRightButton").addEventListener('click', () => {
    -document.querySelectorAll(".skill").length + 1 == slideSkillPosition ? slideSkillPosition = 1 : false;
    document.getElementById("skillsSlide").style.transform = `translateX(${180 * --slideSkillPosition}px)`;
});