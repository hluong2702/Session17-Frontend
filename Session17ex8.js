let day1 = prompt(`Moi ban nhap vao ngay thang nam duoi dunh dang YYYY-MM-DD`);
let day2 = prompt(`Moi ban nhap vao ngay thang nam duoi dunh dang YYYY-MM-DD`);
let data1 = new Date(day1);
let data2 = new Date(day2);
let differentsDay = Math.abs(data2 - data1);
let inDay =differentsDay / (1000 * 3600 * 24);
document.write(`So ngay hon kem nhau la ${inDay}`);