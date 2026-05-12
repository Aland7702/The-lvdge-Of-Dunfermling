const mobileMenuClick = document.getElementById("mobileMenu");
const onClick = document.getElementById("mobileNavLinks");
mobileMenuClick.addEventListener("click", function () {
    onClick.classList.toggle("showMenu");
});

const mobileHistoryClick = document.getElementById("historySubMenu");
const onHistoryClick = document.getElementById("historyExpanded");
mobileHistoryClick.addEventListener("click", function () {
    onHistoryClick.classList.toggle("showHistory");
});

const mobileMembersClick = document.getElementById("membersSubMenu");
const onMembersClick = document.getElementById("membersExpanded");
mobileMembersClick.addEventListener("click", function () {
    onMembersClick.classList.toggle("showMembers");
});

const mobileMeetingsClick = document.getElementById("meetingsSubMenu");
const onMeetingsClick = document.getElementById("meetingsExpanded");
mobileMeetingsClick.addEventListener("click", function () {
    onMeetingsClick.classList.toggle("showMeetings");
});

const mobileGalleryClick = document.getElementById("gallerySubMenu");
const onGalleryClick = document.getElementById("galleryExpanded");
mobileGalleryClick.addEventListener("click", function () {
    onGalleryClick.classList.toggle("showGallery");
});

const mobileVisitClick = document.getElementById("visitSubMenu");
const onVisitClick = document.getElementById("visitExpanded");
mobileVisitClick.addEventListener("click", function () {
    onVisitClick.classList.toggle("showVisit");
});