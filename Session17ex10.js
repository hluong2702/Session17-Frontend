let number = +prompt(`Moi bann nhap vao mot so chinh phuong`);
if (Number.isInteger(Math.sqrt(number)) && number >0 ) {
    document.write(`So ${number} la so chinh phuong`);
} else {
    document.write(`So ${number} k la so chinh phuong`);
}