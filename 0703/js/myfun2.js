function plus(a, b) {
  return a + b;
}

function CreateDiv(wrong, result) {
  var divNode = document.createElement("div");
  var txtNode = document.createTextNode("결과는 " + result);
  divNode.appendChild(txtNode);

  // obj = document.getElementById("parent");
  // if (document.getElementById("result") != null) {
  //   obj.removeChild(document.getElementById("result"));
  // }
  // document.getElement;
  // newDiv = document.createElement("div");
  // newDiv.setAttribute("id", "result");
  // newDiv.style.color = wrong ? "red" : "black";
  // newDiv.innerHTML = wrong ? result : "결과는 " + result;
  // obj.appendChild(newDiv);
}

function calc() {
  const su1 = document.calcForm.su1.value;
  const su2 = document.calcForm.su2.value;
  if (su1 == "" || su2 == "") {
    CreateDiv(true, "두 개의 수를 입력해주세요");
    return;
  }
  const newSu1 = parseInt(su1);
  const newSu2 = parseInt(su2);
  if (isNaN(newSu1) || isNaN(newSu2)) {
    CreateDiv(true, " 숫자만 입력!!");
    if (isNaN(newSu1)) {
      document.calcForm.su1.value = "";
    }
    if (isNaN(newSu2)) {
      document.calcForm.su2.value = "";
    }
    return;
  }

  const result = plus(parseInt(su1), parseInt(su2));
  console.log("Result", result);
  CreateDiv(false, result);
}
