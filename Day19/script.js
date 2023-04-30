const CAT_API = "https://cat-fact.herokuapp.com/";
const GET_CAT_FACTS = "facts";
async function getCatsData() {
  try {
    const response = await fetch(`${CAT_API}${GET_CAT_FACTS}`);
    const result = await response.json();
    if (result.length > 0) {
      renderLists(result);
    } else {
      hideShow("no-data-container", "No Facts found");
    }
  } catch (error) {
    hideShow("no-data-container", "Something went wrong");
    console.log(error);
  }
}
getCatsData();

function renderLists(data = []) {
  const ulElement = document.getElementsByClassName("facts-list")[0];
  const liList = [];
  // ulElement.appendChild(createListitem({}));
  //   document.body.appendChild(ulElement);
  //   if (data.length > 0) {
  //     data.forEach((_d) => {
  //       liList.push(createListitem(_d));
  //     });
  //   }
  //   ulElement.append(...liList);
  if (data.length > 0) {
    data.forEach((_d) => {
      ulElement.appendChild(createListitem(_d));
    });
  }
}

function createListitem(item = {}) {
  const liItem = document.createElement("li");
  liItem.className = "fact-item";
  liItem.innerHTML = `<div class="profile-picture">
              <img src="./Assets/catlogo.png" />
            </div>
            <div>
              <p>
                ${item.text}
              </p>
            </div>`;
  return liItem;
}

function hideShow(classOfElement = "", message = "") {
  const element = document.getElementsByClassName(classOfElement)[0];
  // console.log(element.classList);
  element.className = "no-data-container";
  element.querySelector("p").innerText = message;
}
