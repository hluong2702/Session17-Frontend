let number = +prompt(`Moi ban nhap vao mot so nguyen`);
if (number < 0){
    alert(`Khong hop le`);
} else{
    let squareRoot = Math.sqrt(number);
    document.write(`Can bac hai cua ${number} la ${squareRoot}`);
}