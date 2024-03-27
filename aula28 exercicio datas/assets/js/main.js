const titleDate = document.querySelector('.container h1');
const actualyDate = new Date();
const options = {
    dateStyle: 'full',
    timeStyle: 'short'
};
titleDate.innerHTML = actualyDate.toLocaleString('pt-BR', options);

// function setZeroLeft(time){
//     return time < 10 ? `0${time}` : time
// }
// function getWeekDayName(dayNumber){
//     switch (dayNumber){
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-Feira';
//         case 5:
//             return 'Sexta-Feira';
//         case 6:
//             return 'Sábado';
//     }
// }
// function getMonthName(monthNumber){
//     switch (monthNumber){
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//     }
// }
// function formatsDate(actualyDate){
//     const day = actualyDate.getDate();
//     const month = getMonthName(actualyDate.getMonth());
//     const year = actualyDate.getFullYear();
//     const hour = setZeroLeft(actualyDate.getHours());
//     const min = setZeroLeft(actualyDate.getMinutes());
//     const weekDay = getWeekDayName(actualyDate.getDay());
//     return `${weekDay}, ${day} de ${month} de ${year} <br> ${hour}:${min}`
// }
// titleDate.innerHTML = formatsDate(actualyDate);
