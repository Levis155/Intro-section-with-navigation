document.querySelector('.js-features')
.addEventListener('click', () => {
    const featuresMenu = document.querySelector('.features-dropdown-minimized')

    if(!featuresMenu.classList.contains('features-dropdown-toggled')) {
        featuresMenu.classList.add('features-dropdown-toggled')

        document.querySelector('.features-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-up.svg">';
    } else{
        featuresMenu.classList.remove('features-dropdown-toggled')
        
        document.querySelector('.features-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-down.svg">';
    }
})

document.querySelector('.js-company')
.addEventListener('click', () => {
    const companyMenu = document.querySelector('.company-dropdown-minimized')

    if(!companyMenu.classList.contains('company-dropdown-toggled')) {
        companyMenu.classList.add('company-dropdown-toggled')

        document.querySelector('.company-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-up.svg">';
    } else{
        companyMenu.classList.remove('company-dropdown-toggled')

        document.querySelector('.company-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-down.svg">';
    }
})

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', () => {
    const sideMenu = document.querySelector('.untoggled-side-menu')

    if(!sideMenu.classList.contains('toggled-side-menu')) {
        sideMenu.classList.add('toggled-side-menu')
    } else{
        sideMenu.classList.remove('toggled-side-menu')
    }
})

const closeButton = document.querySelector('.close-sm-button')
closeButton.addEventListener('click', () => {
    const sideMenu = document.querySelector('.untoggled-side-menu')
    
    sideMenu.classList.remove('toggled-side-menu')
    }
)

const featuresLink = document.querySelector('.sm-js-features')
featuresLink.addEventListener('click', () => {
    console.log('hello')
    const sfcb =document.querySelector('.sfcb-untoggled')

    if (!sfcb.classList.contains('sfcb-toggled')) {
        sfcb.classList.add('sfcb-toggled')

        document.querySelector('.sm-features-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-up.svg">';
    } else{
        sfcb.classList.remove('sfcb-toggled')

        document.querySelector('.sm-features-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-down.svg">';
    }
})

const companyLink = document.querySelector('.sm-js-company')
companyLink.addEventListener('click', () => {
    console.log('hello')
    const sccb =document.querySelector('.sccb-untoggled')

    if (!sccb.classList.contains('sccb-toggled')) {
        sccb.classList.add('sccb-toggled')

        document.querySelector('.sm-company-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-up.svg">';
    } else{
        sccb.classList.remove('sccb-toggled')

        document.querySelector('.sm-company-arrow-down')
        .innerHTML = '<img src="images/icon-arrow-down.svg">';
    }
})