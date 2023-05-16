"use strict";

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const findBtn = document.getElementById("find-btn");
const tableBodyE1 = document.getElementById("tbody");
const formE1 = document.getElementById("container-form");
const tableBodyEl = document.getElementById("tbody");

renderTableData(petArr);
console.log(petArr);

function renderTableData(petArr) {
    // Xóa nội dung hiện có của bảng
    tableBodyEl.innerHTML = "";

    // Tạo hàng (row) chứa dữ liệu mỗi thú cưng trên bảng
    petArr.forEach((pet) => {
                const row = document.createElement("tr");
                row.innerHTML = `<th scope = "row">${pet.id}</th>
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.type}</td>
    <td>${pet.weight}</td>
    <td>${pet.length}</td>
    <td>${pet.breed}</td>
    <td>
    <i class = "bi bi-square-fill" style = "color: ${pet.color}"></i>
    </td>
    <td><i class = "bi
    ${pet.vaccinated ? `bi-check-circle-fill` : `bi-x-circle-fill`}"></i></td>
    <td><i class = "bi
    ${pet.dewormed ? `bi-check-circle-fill` : `bi-x-circle-fill`}"></i></td>
    <td><i class = "bi
    ${pet.sterilized ? `bi-check-circle-fill` : `bi-x-circle-fill`}"></i></td>
    <td>
    ${displayTime(pet.date).slice(8, 10)}
    /${displayTime(pet.date).slice(5, 7)}
    /${displayTime(pet.date).slice(0, 4)}
    </td>

    <td><button onclick = "deletePet('${pet.id}')"
     type = "button" class = "btn btn-danger">Delete</button></td>
    `;
    tableBodyEl.appendChild(row);
  });
}
// nút find

findBtn.addEventListener("click", function () {
  let petArrFind = petArr;
  if (idInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.id.includes(idInput.value));
    renderTableData(petArrFind);
  }
  // nếu chọn name thì tìm theo name
  if (nameInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.name.includes(nameInput.value));
  }

  // nếu chọn type thì tìm theo type
  if (typeInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.type.includes(typeInput.value));
  }

  // nếu chọn breed thì tìm theo breed
  if (breedInput.value) {
    petArrFind = petArrFind.filter((pet) =>
      pet.breed.includes(breedInput.value)
    );
  }
  // nếu tích chọn vaccinatedInput
  if (vaccinatedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.vaccinated === true);
  }
  // nếu tích chọn dewormedInput
  if (dewormedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.dewormed === true);
  }
  // nếu tích chọn  sterilizedInput
  if (sterilizedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.sterilized === true);
  }
});

//hiển thị danh sách thú cưng
function renderTableBreed(petArr) {
  tableBodyE1.innerHTML = "";
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
     <th scope="row" >${petArr[i].id}</th>
      <td>${petArr[i].name}</td>
      <td>${petArr[i].age}</td>
      <td>${petArr[i].type}</td>
      <td>${petArr[i].weight}</td>
      <td>${petArr[i].length}</td>
      <td>${petArr[i].breed}</td>
      <td>
     <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
      </td>
      <td><i class="bi ${
        petArr[i].vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petArr[i].dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petArr[i].sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td>${displayTime(pet.date).slice(8, 10)}
        /${displayTime(pet.date).slice(5, 7)}
         /${displayTime(pet.date).slice(8, 10)}</td>
      <td><button  type="button"
        class="btn btn-danger"
        onclick="editPet('${pet.id}')"
             style="background-color:#ffc107; color:#000;">Edit</button>
        </td>`;
    tableBodyE1.appendChild(row);
  });
}

// hàm hiển thị thời gian
function displayTime(date) {
  if (typeof date === "string") {
    return date;
  } else if (typeof date === "object") {
    return JSON.parse(JSON.stringify(date));
  }
}

// hiển thị breed
renderBreed();
// hiển thị giống breed
function renderBreed() {
  breedArr.forEach(function (breedItem) {
    const option = document.createElement("option");
    option.innerHTML = "${breedItem.breed}";
    breedInput.appendChild(option);
  });
}