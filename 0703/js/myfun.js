function plus(a, b) {
  console.log("pluc", a, b);
  return a + b;
}
function calc() {
  const su1 = document.calcForm.su1.value;
  const su2 = document.calcForm.su2.value;
  if (su1 == "" || su2 == "") {
    alert("두 개의 수를 입력해주세요");
    return;
  }
  const newSu1 = parseInt(su1);
  const newSu2 = parseInt(su2);
  if (isNaN(newSu1) || isNaN(newSu2)) {
    alert(" 숫자만 입력!!");
    if (isNaN(newSu1)) {
      document.calcForm.su1.value = "";
    }
    if (isNaN(newSu2)) {
      document.calcForm.su2.value = "";
    }
    return;
  }

  const result = plus(parseInt(su1), parseInt(su2));
  document.calcForm.result.value = result;
  //   document.getElementById("result").innerHTML = result;
}
