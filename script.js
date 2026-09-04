const skeletonScreen = document.getElementById('skeletonScreen');
const secondaryBtn = document.getElementById('secondaryBtn');
const facebookPage = document.getElementById('facebookPage');
const youtubeChannel = document.getElementById('youtubeChannel');
const linkedinProfile = document.getElementById('linkedinProfile');
const backArrowTeext = document.getElementById('backArrowTeext');
const emailLink = document.getElementById('emailLink');

const hideSkeleton = () => {
    if (document.body) {
        document.body.classList.remove('is-loading');
    }

    if (skeletonScreen) {
        skeletonScreen.style.display = 'none';
        skeletonScreen.hidden = true;
    }
};

window.addEventListener('load', hideSkeleton);

if (secondaryBtn) {
    secondaryBtn.onclick = function () {
        window.open('https://drive.google.com/file/d/1t7zT4Zhl77PdLzdbBzpLQg6GLZWT072r/view?usp=sharing', '_blank');
    };
}

if (facebookPage) {
    facebookPage.onclick = function () {
        window.open('https://www.facebook.com/profile.php?id=61593977812787', '_blank');
    };
}

if (youtubeChannel) {
    youtubeChannel.onclick = function () {
        window.open('https://www.youtube.com/@code_with_minhaj', '_blank');
    };
}

if (linkedinProfile) {
    linkedinProfile.onclick = function () {
        window.open('https://www.linkedin.com/in/minhaj-rahman-126982433/', '_blank');
    };
}

if (backArrowTeext) {
    backArrowTeext.onclick = function () {
        window.location.href = 'index.html';
    };
}

if (emailLink) {
    emailLink.onclick = function () {
        location.href = 'mailto:minhajrahaman71@gmail.com';
    };
}