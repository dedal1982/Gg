const btnSearch = document.querySelector(".nav-search");
const navtSearch = document.querySelector(".nav-search");
const inputSearch = document.querySelector(".input-search");

btnSearch.addEventListener("click", () => {
  navtSearch.classList.add("active");
  inputSearch.classList.add("active");
});

//бургер + мобильное меню
const burgerClick = document.querySelector(".header__burger");
const burgerOpenMobile = document.querySelector(".mobile-menu");
const scrollLock = document.querySelector(".page");

burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  burgerOpenMobile.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

let tabButton = document.querySelectorAll(".tab-button");
let tabContent = document.querySelectorAll(".tabs-content");

tabButton.forEach((button) =>
  button.addEventListener("click", function () {
    tabButton.forEach((activeButton) => {
      activeButton.classList.remove("tab-active");
    });

    button.classList.add("tab-active");

    tabContent.forEach((content) => {
      content.classList.add("tab-hidden");
    });

    let findId = document.querySelector("#" + button.dataset.tab);
    findId.classList.remove("tab-hidden");
  })
);

// tabs

// buttons tabs

const tabButtons = document.querySelectorAll(".tab-button");
const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");

let activeTabIndex = 0;

if (buttonPrev) {
  buttonPrev.addEventListener("click", function () {
    if (activeTabIndex > 0) {
      activeTabIndex--;
      updateActiveTab();
    }
  });
}

if (buttonNext) {
  buttonNext.addEventListener("click", function () {
    if (activeTabIndex < tabButtons.length - 1) {
      activeTabIndex++;
      updateActiveTab();
    }
  });
}

function updateActiveTab() {
  tabButtons.forEach((button, index) => {
    if (index === activeTabIndex) {
      button.classList.add("tab-active");
    } else {
      button.classList.remove("tab-active");
    }
  });

  const tabContentId = tabButtons[activeTabIndex].getAttribute("data-tab");
  tabContent.forEach((content) => {
    if (content.id === tabContentId) {
      content.classList.remove("tab-hidden");
    } else {
      content.classList.add("tab-hidden");
    }
  });
}

//menu;
// function toggleActiveClass() {
//   const authList = document.querySelector(".header__auth-list");
//   const authIconBtn = document.querySelector(".header__auth-tringle");
//   authList.classList.toggle("active");
//   authIconBtn.classList.toggle("active");
// }

// document
//   .querySelector("#myButton")
//   .addEventListener("click", toggleActiveClass);

// const itemBox = document.querySelector(".bids__item-box");
// const itemBoxFull = document.querySelector(".bids__item-box-full");

// document.getElementById("toggleButton").addEventListener("click", () => {
//   itemBox.classList.toggle("active");
//   itemBoxFull.classList.toggle("active");
// });

const arrowBtn = document.querySelector(".toggleButton");
const itemBox = document.querySelector(".bids__item-box");
const itemBoxFull = document.querySelector(".bids__item-box-full");

if (arrowBtn) {
  arrowBtn.addEventListener("click", () => {
    itemBox.classList.toggle("active");
    itemBoxFull.classList.toggle("active");
    arrowBtn.classList.toggle("active");
  });
}

const popupModal = document.querySelector(".how-to-play");
const popupModalContainer = document.querySelector(".how-to-play__container");

function openPopupModal() {
  popupModal.classList.add("active");
  popupModalContainer.classList.add("active");
}

function closePopupModal() {
  popupModal.classList.remove("active");
  popupModalContainer.classList.remove("active");
}

function closeAllPopupModal() {
  const containers = document.querySelectorAll(".how-to-play__container");
  containers.forEach((container) => {
    container.classList.remove("active");
    popupModal.classList.remove("active");
  });
}

//функция перехода между модальными окнами
function toggleActiveClass() {
  const elements = document.querySelectorAll(".how-to-play__container");

  elements.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
}

//выпадающий список
const dropTops = document.querySelectorAll(".faq__drop-item");

dropTops.forEach((dropTop) => {
  dropTop.addEventListener("click", () => {
    const dropHidden = dropTop.querySelector(".faq__drop-hidden");
    const dropArrow = dropTop.querySelector(".faq__drop-item span");
    dropHidden.classList.toggle("active");
    dropArrow.classList.toggle("active");
  });
});

//выбор суммы
const pageInput = document.querySelector(".page-input");
const inputBtnsItems = document.querySelectorAll(".input-btns-item button");
const inputBtn = document.querySelectorAll(".input-btns-item");

inputBtnsItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    pageInput.value = value;

    inputBtnsItems.forEach((item) => {
      item.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.toggle(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".tabs-btn", ".popup-deposit__inner");
makeCodeUniversal(".history-btn", ".history-text-wrapper");
makeCodeUniversal(".withdraw", ".withdraw-up");

//-------------------------------------------------
const bankItems = document.querySelectorAll(".bank-item");
const allBank = document.querySelector(".page-all-bank");
const bankItemNext = document.querySelector(".page-item-image img");
const bankItemTextNext = document.querySelector(".age-item-text span");
const priceInput = document.querySelector(".page-input");
const inputPrice = document.querySelectorAll(".input-btns-item button");
const pageTelegram1 = document.querySelector(".page-telegram");
const pageCrypto1 = document.querySelector(".page-crypto");
const page500 = document.getElementById("page-500");
const page2000 = document.getElementById("page-2000");

if (bankItems) {
  bankItems.forEach((item) => {
    item.addEventListener("click", () => {
      bankItems.forEach((btn) => {
        btn.classList.remove("active");
      });
      pageTelegram1.classList.remove("active");
      pageCrypto1.classList.remove("active");
      if (item.dataset.value === "500") {
        allBank.classList.remove("active");
        page2000.classList.remove("active");
        page500.classList.add("active");
      } else {
        page500.classList.remove("active");
        page2000.classList.remove("active");
        allBank.classList.remove("active");
        document.querySelector(".input-btns").style.display = "flex";
        document.querySelector(".page-input").value = "1000";
        allBank.classList.add("active");
        if (item.dataset.value === "2000") {
          allBank.classList.remove("active");
          page500.classList.remove("active");
          page2000.classList.add("active");
          bankItemNext.src = item.querySelector(".top-list-item img").src;
        } else {
          page500.classList.remove("active");
          page2000.classList.remove("active");
          allBank.classList.remove("active");
          document.querySelector(".input-btns").style.display = "flex";
          document.querySelector(".page-input").value = "1000";
          allBank.classList.add("active");
        }
      }
      // item.classList.add("active");
      bankItemNext.src = item.querySelector(".top-list-item img").src;
      bankItemTextNext.textContent = item.textContent;
    });
  });
}

//------------------
const historyCloseBtn = document.querySelector(".history-close-btn");
const historyText = document.querySelector(".history-text");

if (historyCloseBtn) {
  historyCloseBtn.addEventListener("click", () => {
    historyText.style.display = "none";
  });
}

//-------------------
const topDropBtn = document.querySelector(".top-drop");
const topDropSpan = document.querySelector(".top-drop span");

if (topDropBtn) {
  topDropBtn.addEventListener("click", () => {
    topDropSpan.classList.toggle("active");
  });
}

//--------------------
const pageTelegram = document.querySelector(".page-telegram");
const pageAllBank = document.querySelector(".page-all-bank");
const telegramWalletBtn = document.getElementById("tel-wallet");
const pageAll = document.querySelectorAll(".page-item");
const steamWallletBtn = document.getElementById("steam");

if (telegramWalletBtn) {
  telegramWalletBtn.addEventListener("click", () => {
    pageAll.forEach((item) => {
      item.classList.remove("active");
    });
    pageTelegram.classList.add("active");
  });
}

if (steamWallletBtn) {
  steamWallletBtn.addEventListener("click", () => {
    pageAll.forEach((item) => {
      item.classList.remove("active");
    });
    pageAllBank.classList.add("active");
    document.querySelector(".input-btns").style.display = "none";
    document.querySelector(".page-input").value = "500";
  });
}

//копирования телеграм
function telegramCopyFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
}

function cryptoDepCopyFunction() {
  var copyText = document.getElementById("cryptoInput");
  copyText.select();
  document.execCommand("copy");
}

//перебор криптокнопок
const cryptoButton = document.querySelectorAll(".crypto-button");

if (cryptoButton) {
  cryptoButton.forEach((button) => {
    button.addEventListener("click", () => {
      cryptoButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
}

//цены криптокошелек
const cryptoWalletBtn = document.getElementById("crypto-wallet");
const pageCrypto = document.querySelector(".page-crypto");
const pageItemPrice = document.querySelectorAll(".page-item");

if (cryptoWalletBtn) {
  cryptoWalletBtn.addEventListener("click", () => {
    pageItemPrice.forEach((item) => {
      item.classList.remove("active");
    });
    pageCrypto.classList.add("active");
    cryptoWalletBtn.classList.add("active");
  });
}

//перебор и активация унопок на  вывод вывод
const withdrawBtn = document.querySelectorAll(".withdraw");
const withdrawPage = document.getElementById("withdrawPage");

if (withdrawBtn) {
  withdrawBtn.forEach((button) => {
    button.addEventListener("click", () => {
      withdrawBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
}

//мобильная версия выбора банка для оплаты
const selectNested = document.querySelectorAll(".page-select-nested");
const nextImg = document.querySelector(".next-img");
const nextText = document.querySelector(".next-text");

if (selectNested) {
  selectNested.forEach((item) => {
    item.addEventListener("click", () => {
      nextImg.src = item.querySelector(".prev-img").src;
      nextText.textContent = item.textContent;
      listNested.classList.toggle("active");
    });
  });
}

const pageSelectBtn = document.querySelector(".page-select");
const listNested = document.querySelector(".list-nested");
const pageSelectArrow = document.querySelector(".page-select span");

if (pageSelectBtn) {
  pageSelectBtn.addEventListener("click", () => {
    listNested.classList.toggle("active");
    pageSelectArrow.classList.toggle("active");
  });
}

const telNested = document.getElementById("tel-nested");
const pageTelNested = document.querySelector(".page-telegram");
const cryptoNested = document.getElementById("crypto-nested");

if (telNested) {
  telNested.addEventListener("click", () => {
    if (listNested.closest(".active")) {
      listNested.classList.remove("active");
      pageTelNested.classList.add("active");
    } else {
      pageTelNested.classList.remove("active");
      listNested.classList.add("active");
    }
  });
}

// if (cryptoNested) {
//   cryptoNested.addEventListener("click", () => {
//     if (listNested.closest(".active")) {
//       listNested.classList.remove("active");
//     } else {
//       cryptoNested.classList.add("active");
//       pageTelNested.classList.remove("active");
//     }
//   });
// }
