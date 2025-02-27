let a = +prompt('Nhap gia tri a:');
let b = +prompt('Nhap gia tri b:');
let c = +prompt('Nhap gai tri c:');

let delta = b * b - 4 * a * c;
if(a !=0){
    if (delta > 0 ) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(`Phuong trinh co 2 nghiem phan biet: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
    let x1 = -b / (2 * a);
    document.write(`Phuong trinh co nghiem kep: x1 = x2 = ${x1}`);
    } else {
    document.write(`Phuong trinh vo nghiem`);
    }
}else{
    document.write(`Phuong trinh bac nhat`);
}
