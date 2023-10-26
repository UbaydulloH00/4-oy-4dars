// While1
// let A, B, remainingLength;
// while (true) {
//     A = +prompt('A kesmani uzunligini kiriting: ')
//     B = +prompt('B kesmani uzunligini kiriting: ')
//     if (A <= B) {
//         alert("A kesma B kesmadan katta bo'lishi kerak")
//     } else if (isNaN(parseFloat(A)) || isNaN(parseFloat(B))) {
//         alert("Iltimos, faqat son kiriting")
//     } else {
//         break;
//     }
// };
// remainingLength = A;
// while (remainingLength >= B) {
//     remainingLength -= B;
// }
// document.write(remainingLength);

// While2
// let A, B, counter = 0;
// while (true) {
//     A = +prompt('A kesmani uzunligini kiriting: ')
//     B = +prompt('B kesmani uzunligini kiriting: ')
//     if (A <= B) {
//         alert("A kesma B kesmadan katta bo'lishi kerak")
//     } else if (isNaN(parseFloat(A)) || isNaN(parseFloat(B))) {
//         alert("Iltimos, faqat son kiriting")
//     } else {
//         break;
//     }
// };
// while (A >= B) {
//     A -= B;
//     counter++;
// }
// document.write(`B ni ${counter} marta joylashtirish mumkin`);

// While3
// let N, K, remainder;
// let integerPart = 0;
// while (true) {
//     N = +prompt('A kesmani uzunligini kiriting: ')
//     K = +prompt('B kesmani uzunligini kiriting: ')
//     if (N <= K) {
//         alert("A kesma B kesmadan katta bo'lishi kerak")
//     } else if (isNaN(parseFloat(N)) || isNaN(parseFloat(K))) {
//         alert("Iltimos, faqat son kiriting")
//     } else {
//         break;
//     }
// };
// remainder = N;

// while (remainder >= K) {
//     remainder -= K;
//     integerPart++;
// };
// document.write(`Butun qismi: ${integerPart} <br> Qoldiq qismi: ${remainder}`)

// While4
// let n;
// let checker = 1;
// let isPower = false;
// while (true) {
//     n = +prompt('Son kiriting: ');
//     if (isNaN(n)) {
//         alert("Faqam son kiriting")
//     } else if (n <= 0) {
//         alert("n ning qiymati 0 dan kichkina bo'la olmaydi")
//     } else {
//         break;
//     }
// }
// while (n > checker) {
//     checker *= 3;
//     if (checker == n) {
//         isPower = true;
//     };
// };
// if (isPower == true) {
//     document.write(`${n} soni 3-ning darajasi`)
// } else {
//     document.write(`${n} soni 3-ning darajasi emas`)
// }

// While5
// let n;
// let checker = 1;
// let isPower = false;
// let k = 0;
// while (true) {
//     n = +prompt('Son kiriting: ');
//     if (isNaN(n)) {
//         alert("Faqam son kiriting")
//     } else if (n <= 0) {
//         alert("n ning qiymati 0 dan kichkina bo'la olmaydi")
//     } else {
//         break;
//     }
// }
// while (n > checker) {
//     checker *= 2;
//     k++;
//     if (checker == n) {
//         isPower = true;
//     };
// };
// if (isPower == true) {
//     document.write(n + " soni 2 ning " + ` <span style="padding-left: 10px;color: red;">${k}-darajasi</span>`)

// } else {
//     document.write(`${n} soni 2 ning darajasi emas`)
// }

// While 17
// let n, m;
// let integerPart = 0;
// let remainder;
// while (true) {
//     n = +prompt('n ga qiymat kiriting: ')
//     m = +prompt("m ga qiymat kiriting: ")
//     if (isNaN(n) || isNaN(m)) {
//         alert('Faqat son kiriting')
//     } else if (n <= m) {
//         alert("n ning qiymati m nikidan katta bo'lishi kerak")
//     } else {
//         break;
//     }
// };
// remainder = n;
// while (remainder >= m) {
//     remainder -= m;
//     integerPart++;
// };
// document.write("Butun qismi: " + integerPart + "<br>Qoldig'i: " + remainder )

// While18
// let n;
// while (true) {
//     n = +prompt("n uchun qiymat kiriting: ")
//     if (n <= 0) {
//         alert("n ning qiymati musbat bo'lishi lozim")
//     } else if (isNaN(n)) {
//         alert("Raqam kiritsangiz bo'lmaydimi, brat")
//     } else {
//         break;
//     }
// };
// let loopName = n;
// let numberOfDigits = 0;
// while (loopName > 0) {
//     loopName = Math.trunc(loopName/10);
//     numberOfDigits++;
// }

// let i = n;
// let result = 0;
// let lastNumber;
// while (i > 0) {
//     lastNumber = i % 10;
//     numberOfDigits--;
//     result += (10 ** numberOfDigits) * lastNumber;
//     i = Math.trunc(i/10);
// };
// document.write(result);

// While19
// let n;
// while (true) {
//     n = +prompt("n uchun qiymat kiriting: ")
//     if (n <= 0) {
//         alert("n ning qiymati musbat bo'lishi lozim")
//     } else if (isNaN(n)) {
//         alert("Raqam kiritsangiz bo'lmaydimi, brat")
//     } else {
//         break;
//     }
// };
// let loopName = n;
// let numberOfDigits = 0;
// while (loopName > 0) {
//     loopName = Math.trunc(loopName/10);
//     numberOfDigits++;
// };
// let sumDigits = 0;
// let lastDigit;
// let i = n;
// while (i > 0) {
//     lastDigit = i % 10;
//     i = Math.trunc(i/10);
//     sumDigits += lastDigit;
// }

// document.write(`Raqamlar soni: ${numberOfDigits} <br> Raqamlar yi'gindisi: ${sumDigits}`);

// While20
// let n;
// while (true) {
//     n = +prompt("n uchun qiymat kiriting: ")
//     if (n <= 0) {
//         alert("n ning qiymati musbat bo'lishi lozim")
//     } else if (isNaN(n)) {
//         alert("Raqam kiritsangiz bo'lmaydimi, brat")
//     } else {
//         break;
//     }
// };
// let i = n;
// let lastNumber;
// let isTwo = false;
// while (i > 0) {
//     lastNumber = i % 10;
//     i = Math.trunc(i / 10);
//     if (lastNumber == 2) {
//         isTwo = true;
//         break;
//     };
// };
// if (isTwo == true) {
//     document.write(`${n} ning raqamlari orasida 2 raqami bor`)
// } else {
//     document.write(`${n} soning raqamlari orasida 2 raqami yo'q`)
// };

// While21
// let n;
// while (true) {
//     n = +prompt("n uchun qiymat kiriting: ")
//     if (n <= 0) {
//         alert("n ning qiymati musbat bo'lishi lozim")
//     } else if (isNaN(n)) {
//         alert("Raqam kiritsangiz bo'lmaydimi, brat")
//     } else {
//         break;
//     }
// };
// let i = n;
// let lastNumber;
// let isTwo = false;
// while (i > 0) {
//     lastNumber = i % 10;
//     i = Math.trunc(i / 10);
//     if (lastNumber % 2 == 1) {
//         isTwo = true;
//         break;
//     };
// };
// if (isTwo == true) {
//     document.write(`${n} ning raqamlari orasida toq raqam bor`)
// } else {
//     document.write(`${n} soning raqamlari orasida toq raqamlar yo'q`)
// }

// While22
// let n;
// while (true) {
//   n = +prompt("n uchun qiymat kiriting: ");
//   if (n <= 1) {
//     alert("Tub son uchun 1 dan katta butun son kiritishingiz kerak, brat");
//   } else if (isNaN(n)) {
//     alert("Iltimos, faqat son kiriting");
//   } else {
//     break;
//   }
// }

// let i = 1;
// let multipleCount = 0;
// while (i <= n) {
//     if (n % i == 0) {
//         multipleCount++;
//     }
//     i++;
// }
// if (multipleCount > 2) {
//     document.write(`${n} - tub son emas`)
// } else {
//     document.write(`${n} - tub son`)
// }

// Case1 
// let userInput = +prompt("Hafta kuni tartib raqamini kiriting: ");
// let dayName;
// switch (userInput) {
//     case 1:
//         dayName = 'Dushanba';
//         break;
//     case 2:
//         dayName = 'Seshanba';
//         break;
//     case 3:
//         dayName = 'Chorshanba';
//         break;
//     case 4:
//         dayName = 'Payshanba';
//         break;
//     case 5:
//         dayName = 'Juma';
//         break;
//     case 6:
//         dayName = 'Shanba';
//         break;
//     case 7:
//         dayName = 'Yakshanba';
//         break;
//     default:
//         dayName = "O'zi aslida 1 haftada bor yo'gi 7 dona kun bor"
//         break;
// }
// document.write(dayName);

// Case2
// let K = +prompt("Bahoni kiriting: ");
// let studentStatus;
// switch (K) {
//     case 1:
//         studentStatus = 'Yomon'
//         break;
//     case 2:
//         studentStatus = 'Qoniqarsiz'
//         break;
//     case 3:
//         studentStatus = 'Qoniqarli'
//         break;
//     case 4:
//         studentStatus = 'Yaxshi'
//         break;
//     case 5:
//         studentStatus = "A'lo"
//         break;
//     default:
//         studentStatus = 'Faqat 1 dan 5 gacha baho kiritish mumkin'
//         break;
// }
// document.write(studentStatus);

// Case3
// let seasonName;
// let monthNumber;
// switch (monthNumber) {
//     case 1:
//         seasonName = 'Winter'
//         break;
//     case 2:
//         seasonName = 'Winter'
//         break;
//     case 3:
//         seasonName = 'Spring'
//         break;
//     case 4:
//         seasonName = 'Spring'
//         break;
//     case 5:
//         seasonName = 'Spring'
//         break;
//     case 6:
//         seasonName = 'Summer'
//         break;
//     case 7:
//         seasonName = 'Summer'
//         break;
//     case 8:
//         seasonName = 'Summer'
//         break;
//     case 9:
//         seasonName = 'Autumn'
//         break;
//     case 10:
//         seasonName = 'Autumn'
//         break;
//     case 11:
//         seasonName = 'Autumn'
//         break;
//     case 12:
//         seasonName = 'Winter'
//         break;

//     default:
//         seasonName = 'There is no such season'
//         break;
// }

// document.write(seasonName);

// Case4
// let monthNumber = +prompt("Oy raqamini kiriting: ");
// let numberOfDays;
// let monthName;
// switch (monthNumber) {
//     case 1:
//         numberOfDays = 31;
//         monthName = 'January'
//         break;
//     case 2:
//         numberOfDays = `28/29`;
//         monthName = 'February'
//         break;
//     case 3:
//         numberOfDays = 31;
//         monthName = 'March'
//         break;
//     case 4:
//         numberOfDays = 30;
//         monthName = 'April'
//         break;
//     case 5:
//         numberOfDays = 31;
//         monthName = 'May'
//         break;
//     case 6:
//         numberOfDays = 30;
//         monthName = 'June'
//         break;
//     case 7:
//         numberOfDays = 31;
//         monthName = 'July'
//         break;
//     case 8:
//         numberOfDays = 31;
//         monthName = 'August'
//         break;
//     case 9:
//         numberOfDays = 30;
//         monthName = 'September'
//         break;
//     case 10:
//         numberOfDays = 31;
//         monthName = 'October'
//         break;
//     case 11:
//         numberOfDays = 30;
//         monthName = 'November'
//         break;
//     case 12:
//         numberOfDays = 31;
//         monthName = 'December'
//         break;
//     default:
//         numberOfDays = "Ma'lumot uchun: bir yilda faqat 12 oy mavjud"
//         monthName = null;
//         break;
// }
// if (monthName == null) {
//     document.write(numberOfDays);
// } else {
//     document.write(`${monthName} - ${numberOfDays}`);
// }

// Case5 
// let A = +prompt("Birinchi son kiriting: ");
// let B = +prompt("Ikkinchi sonni kiriting: ");
// let operation = +prompt("Qaysi matematik amalni bajaray(1-Qo'shish, 2-Ayrish, 3-Bo'lish 4-Ko'paytirish): ");
// let result;
// let operationSign;

// switch (operation) {
//     case 1:
//         result = A + B; 
//         operationSign = "+";
//         break;
//     case 2:
//         result = A - B; 
//         operationSign = "-";
//         break;
//     case 3:
//         result = A / B; 
//         operationSign = '/';
//         break;
//     case 4:
//         result = A * B; 
//         operationSign = "*";
//         break;
//     default:
//         break;
// }
// if (result == undefined) {
//     document.write("Men faqat 4 xil (qo'shish, ayrish, bo'lish va ko'paytirish) ammallarini bajara olaman")
// } else {
//     document.write(`${A} ${operationSign} ${B} = ${result}`);
// }

// Case6 
// let unitMeasureIndex = +prompt(`Siz kiritmoqchi bo'lgan uzunlik o'lchovini tanlang: \n 1. Detsimetr \n 2. Kilometr \n 3. Metr \n 4. Millimetr \n 5. Santimetr `);
// let unitMeasureName;
// let lineLength = +prompt(`Uzunligini kiriting: `);
// let lengthInMeters;
// let errorMessage = "Men faqat 5 turdagi uzunlik o'lchovlarini metrga o'tkaza olaman."
// switch (unitMeasureIndex) {
//     case 1:
//         unitMeasureName = "detsimetr";
//         lengthInMeters = lineLength / 10;
//         break;
//     case 2:
//         unitMeasureName = "kilometr";
//         lengthInMeters = lineLength * 1000;
//         break;
//     case 3:
//         unitMeasureName = "metr";
//         lengthInMeters = lineLength;
//         break;
//     case 4:
//         unitMeasureName = "millimetr";
//         lengthInMeters = lineLength / 1000;
//         break;
//     case 5:
//         unitMeasureName = "santimetr";
//         lengthInMeters = lineLength / 100;
//         break;
//     default:
//         break;
// }
 
// if (!unitMeasureName) {
//     document.write(errorMessage);
// } else {
//     document.write(`${lineLength} ${unitMeasureName} => ${lengthInMeters} metr`)
// }

// Case7
// let unitMeasureIndex = +prompt("Siz konvertatsiya qilmoqchi bo'lgan og'irlik o'lchov birligini tanlang: \n 1. Kilogramm \n 2. Milligramm \n 3. Gramm \n 4. Tonna \n 5. Sentner");
// let unitMeasureName;
// let weight = +prompt("Og'irlikni kiriting: ");
// let weightInKilogramms;
// let errorMessage = "Men faqat 5 turdagi og'irlik o'lchovlarini kilogrammga konvertatsiya qila olaman";

// switch (unitMeasureIndex) {
//     case 1:
//         unitMeasureName = 'Kilogramm';
//         weightInKilogramms = weight;
//         break;
//     case 2:
//         unitMeasureName = 'Milligram';
//         weightInKilogramms = weight / 1000000;
//         break;
//     case 3:
//         unitMeasureName = 'Gramm';
//         weightInKilogramms = weight / 1000;
//         break;
//     case 4:
//         unitMeasureName = 'Tonna';
//         weightInKilogramms = weight * 1000;
//         break;
//     case 5:
//         unitMeasureName = 'Sentner';
//         weightInKilogramms = weight * 100;
//         break;
//     default:
//         break;
// }

// if (!unitMeasureName) {
//     document.write(errorMessage);
// } else {
//     document.write(`${(weight.toLocaleString())} ${unitMeasureName} => ${weightInKilogramms.toLocaleString()} Kilogramms`)
// }

// Case8
// let birthDate = prompt("Tug'ilgan oyingiz, kuningiz va yilingizni ushbu ko'rinishda kiriting (MM/DD/YYYY): ");
// let month = +birthDate.slice(0, 2);
// let date = +birthDate.slice(3, 5);
// let year = +birthDate.slice(6, 10);
// let monthName;
// let numberOfDays;
// let errorMessage = "Iltimos, haqiqiy tug'ilgan kuningizni kiriting";
// switch (month) {
//     case 1:
//         monthName = 'Yanvar'
//         numberOfDays = 31;
//         break;
//     case 2:
//         monthName = 'Fevral'
//         numberOfDays = 28;
//         break;
//     case 3:
//         monthName = 'Mart'
//         numberOfDays = 31;
//         break;
//     case 4:
//         monthName = 'Aprel'
//         numberOfDays = 30;
//         break;
//     case 5:
//         monthName = 'May'
//         numberOfDays = 31;
//         break;
//     case 6:
//         monthName = 'Iyun'
//         numberOfDays = 30;
//         break;
//     case 7:
//         monthName = 'Iyul'
//         numberOfDays = 31;
//         break;
//     case 8:
//         monthName = 'Avgust'
//         numberOfDays = 31;
//         break;
//     case 9:
//         monthName = 'Sentabr'
//         numberOfDays = 30;
//         break;
//     case 10:
//         monthName = 'Oktabr'
//         numberOfDays = 31;
//         break;
//     case 11:
//         monthName = 'Noyabr'
//         numberOfDays = 30;
//         break;
//     case 12:
//         monthName = 'Dekabr'
//         numberOfDays = 31;
//         break;
//     default:
//         break;
// }
// if (!monthName || year > 2023 || date > numberOfDays) {
//     document.write("Iltimos, tug'ilgan kuningizni to'g'ri ko'rinishda kiriting")
// } else {
//     document.write(`Siz ${year}-yil ${date}-${monthName}da tu'gilgansiz`)
// }

// Case9
// let monthIndex = +prompt("Oy tartib raqamini kiriting: ");
// let monthName;
// let date = +prompt("Kunni kiriting: ");
// let maxDays;
// let errorMessage = "Iltimos, to'gri sanani kiriting";

// monthSwitch();

// if (maxDays == date) {
//     monthIndex++;
//     date = 1;
// }

// monthSwitch();

// function monthSwitch() {
//     switch (monthIndex) {
//         case 1:
//             monthName = 'Yanvar'
//             maxDays = 31;
//             break;
//         case 2:
//             monthName = 'Fevral'
//             maxDays = 28;
//             break;
//         case 3:
//             monthName = 'Mart'
//             maxDays = 31;
//             break;
//         case 4:
//             monthName = 'Aprel'
//             maxDays = 30;
//             break;
//         case 5:
//             monthName = 'May'
//             maxDays = 31;
//             break;
//         case 6:
//             monthName = 'Iyun'
//             maxDays = 30;
//             break;
//         case 7:
//             monthName = 'Iyul'
//             maxDays = 31;
//             break;
//         case 8:
//             monthName = 'Avgust'
//             maxDays = 31;
//             break;
//         case 9:
//             monthName = 'Sentabr'
//             maxDays = 30;
//             break;
//         case 10:
//             monthName = 'Oktabr'
//             maxDays = 31;
//             break;
//         case 11:
//             monthName = 'Noyabr'
//             maxDays = 30;
//             break;
//         case 12:
//             monthName = 'Dekabr'
//             maxDays = 31;
//             break;
//         default:
//             break;
//     }
// }

// if (!monthName || maxDays < date) {
//     document.write(errorMessage);
// } else {
//     document.write(`Siz kiritgandan keyingi sana: ${date}-${monthName}`)
// }

// Case10
// let Y = prompt(`Robot yo'nalishini tanlang: \n S. Shimol \n J. Janub \n Q. Sharq \n G. G'arb`).toUpperCase();
// let K = +prompt(`Buyruqni tanlang: \n 0. Harakatni davom ettir \n 1. Chapga buril \n 2. O'ngga buril`);
// let movement;
// let direction;
// switch (Y) {
//     case 'S':
//         direction = "Shimol"
//         break;
//     case 'J':
//         direction = "Janub"
//         break;
//     case 'Q':
//         direction = "Sharq"
//         break;
//     case 'G':
//         direction = "G'arb"
//         break;
//     default:
//         break;
// }
// switch (K) {
//     case 0: 
//         movement = "va harakatni davom ettirdi"
//         break;
//     case 1: 
//         movement = "va chapga burildi"
//         break;
//     case 2: 
//         movement = "va o'ngga burildi"
//         break;
//     default:
//         break;
// }

// if (!direction || !movement) {
//     document.write("Tanlovda mavjud bo'lmagan variantni tanladingiz")
// } else {
//     document.write(`Robot ${direction} tomonga qaradi ${movement}`);
// }

// To'rtburchak 
// let a = +prompt("Tog'ri to'rtburchakning 1-tomoni uzunligini kiriting: ");
// let b = +prompt("Tog'ri to'rtburchakning 2-tomoni uzunligini kiriting: ");
// let area = a * b;
// let perimeter = 2 * (a + b);
// let greaterValue = perimeter;
// if (area > perimeter) {
//     greaterValue = area;
// }
// document.write(greaterValue);

// HTTS
// let N = +prompt("Son kiriting: ");
// let numberOfDigits = 0;
// let lastNumber;
// let i = N;
// isValid = true;
// while (i > 0) {
//     numberOfDigits++;
//     lastNumber = i % 10;
//     i = Math.trunc(i / 10);
//     if (lastNumber % 2 == 0) {
//         isValid = false;
//         break;
//     }
// }
// if (numberOfDigits % 2 == 0) {
//     isValid = false;
// }
// if (isValid === true) {
//     document.write("YES");
// } else {
//     document.write("NO")
// }

// Kechikkan poyezd
// let t = +prompt("Poyezd soat nechada ketishi kerak edi: ");
// let T = +prompt("Poyezd nechada soatga kechikdi: ");
// let departure = t + T;
// if (departure > 24) {
//     departure -= 24;
// } 
// document.write(departure);

// Sanash vaqti
// let secondsPerNumber = 10;
// let N = prompt("1-Son kiriting: ");
// let M = prompt("2-son kiriting: ");
// let timeSpent = (Math.abs(N - M) + 1) * secondsPerNumber;
// document.write(timeSpent); 

// Katta-kichik
// let A = +prompt("A ga qiymat: ");
// let B = +prompt("B ga qiymat: ");
// let result;
// if (A > B) {
//     result = '>';
// } else if (A == B) {
//     result = '=';
// } else {
//     result = '<';
// }
// document.write(A, " ",  result, " ",  B);

// Yangi yil sovg'asi
// let N = +prompt("Sovg'aning narxi: ");
// let A = +prompt("To'ngichidagi pul: ");
// let B = +prompt("O'rtanchasidagi pul: ");
// let C = +prompt("Kenjasidagi pul: ");
// let canAfford = false;
// if (N <= A + B + C) {
//     canAfford = true;
// }
// if (canAfford) {
//     document.write("Yes");
// } else {
//     document.write("No")
// }

// Ikki xonali sonning birinchi raqami
// let N;
// while (true) {
//     N = +prompt("Ikki xonali son kiriting: ");
//     if (isNaN(N)) {
//         alert('Bu son emas')
//     } else if (N > 99 || 10 > N) {
//         alert('Bu ikki xonalik son emas');
//     } else {
//         break;
//     }
// }
// let tenthDigit = Math.trunc(N / 10);
// document.write(tenthDigit); 

// Oxirgi raqam
// let N;
// while (true) {
//     N = +prompt("Son kiriting: ");
//     if (isNaN(N)) {
//         alert("Bu son emas");
//     } else {
//         break;
//     }
// } 
// let lastDigit = N % 10;
// document.write(lastDigit);

// Diagonallar soni
// let N = +prompt("Ko'pburchakning tomonlari sonini kiriting: ");
// let numberOfDiagonals = (N*(N-3))/2;
// document.write(`Diagonallar soni: ${numberOfDiagonals}`);

// Azimjonning qo'ylari
// let n = prompt("Podadagi oyoqlari sonini kiriting: ");
// let numberOfEars = n / 2;
// document.write(`Quloqlar soni: ${numberOfEars}`);

// Isfandiyor algebra darsida
// let x = +prompt("x ga qiymat kiriting: "); 
// let fx = x**5 + 8 * x**4 - 5 * x**3 + 3 * x**2 + x - 12;
// document.write(fx);

// 10 ming qadam
// let targetSteps = 10000;
// let n = prompt("Qadamlar sonini kiriting: ");
// let percentageComplete = Math.round((n / targetSteps) * 100);
// if (percentageComplete > 100) {
//     document.write("Alisher allaqachon 10,000 qadamni bosib o'tdi")
// } else {
//     document.write(`Alisher ${percentageComplete}% yo'lni bosib o'tdi`)
// }

// Omadsiz chipta
// let ticketNumber = +prompt("Chipta raqamini kiriting: ");
// let i = ticketNumber;
// let lastDigits;
// let isLucky = true;
// while (i > 0) {
//     lastDigits = i % 100;
//     if (lastDigits == 13) {
//         isLucky = false;
//     }
//     i = Math.trunc(i / 10);
// } 
// if (isLucky) {
//     document.write("Omadli chipta");
// } else {
//     document.write("Omadsiz chipta")
// }

// Qiziqarli ketma-ketlik
// let N = +prompt("Ketma-ketlikning ohirgi sonini kiriting: ");
// let succession = 0;
// for (let i = 1; i <= N; i++) {
//     succession += i**3;
// }
// let multipleCount = 0;
// let i2 = 1;
// while (succession >= i2) {
//     if (succession % i2 == 0) {
//         multipleCount++;
//     }
//     i2++;
// }
// if (multipleCount % 2 == 1) {
//     document.write("Qiziqarli ketma-ketlik")
// } else {
//     document.write("Zerikarli ketma-ketlik")
// }   

// Harorat
let celsius, kelvin, fahrenheit; 
while (true) {
    celsius = +prompt("Temperaturani Celsius da kiriting: "); 
    if (isNaN(celsius)) {
        alert("Temperatureni sonda kiritishizngiz kerak")
    } else if (celsius < -1000) {
        alert("Temperaturani -1000° dan kichik bo'la olmaydi")   
    } else {
        break;
    }
}
kelvin = Math.round(celsius + 273.15);
fahrenheit = Math.round(celsius * 1.8 + 32);
document.write(`Kelvinda: ${kelvin} <br>`);
document.write(`Fahrenheitda: ${fahrenheit} `);