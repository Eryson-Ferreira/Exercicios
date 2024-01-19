//Exercício 3

process.env.TZ = 'Greenwich'
const date = '2022-06-07T01:01:06.336Z';

function dateConverter(d){

    const data = new Date (d)

    
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

}

console.log(dateConverter(date))