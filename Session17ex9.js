let a = +prompt('Nhập giá trị a:');
let b = +prompt('Nhập giá trị b:');
let c = +prompt('Nhập giá trị c:');

let delta = b * b - 4 * a * c;
if(a !=0){
    if (delta > 0 ) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
    let x1 = -b / (2 * a);
    document.write(`Phương trình có nghiệm kép: x1 = x2 = ${x1}`);
    } else {
    document.write(`Phương trình vô nghiệm`);
    }
}else{
    document.write(`Phương trình bậc nhất`);
}
