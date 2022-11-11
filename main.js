const fs = require('fs');
const readlineSync = require('readline-sync');

console.log('Добро пожаловать на Quize!');

function start() {
    console.log('');
    console.log('Выберите тему');
    console.log('');
    console.log('1. Вопросы\n2. Упоротые вопросы\n3. Russian MTV');
    const readLine = readlineSync.question('>');
    let count = 0;
    // return readLine;

    function topicQuestion(readLine) {
        if (readLine == 1) {
            const question = fs.readFileSync(`${__dirname}/topics/1.txt`, 'utf-8')
            const questionArr = question.split('\n').filter(el => el)
            for (let i = 0; i < questionArr.length; i += 2) {
                console.log(`${questionArr[i]}`);
                const answer = readlineSync.question('>');
                if (answer === 'topic') {
                    start()
                }
                else if (answer === 'end') {
                    return `Ваш результат:${count}`;
                }
                else if (answer.toLowerCase() === questionArr[i + 1].toLowerCase()) {
                    console.log('');
                    console.log(`Верно!`);
                    console.log('');
                    count++
                } else {
                    console.log('');
                    console.log(`Неверно!\nПравильный ответ:\n${questionArr[i + 1]}`);
                    console.log('');
                };
            }

        }


if (readLine == 2) {
  const question = fs.readFileSync(`${__dirname}/topics/2.txt`, "utf-8");
  const questionArr = question.split("\n").filter((el) => el);
  for (let i = 0; i < questionArr.length; i += 2) {
    console.log(`${questionArr[i]}`);
    const answer = readlineSync.question(">");
    if (answer === "topic") {
      start();
    } else if (answer === "end") {
      return `Ваш результат:${count}`;
    } else if (answer === questionArr[i + 1]) {
      console.log("");
      console.log(`Верно!`);
      console.log("");
      count++;
    } else {
      console.log("");
      console.log(`Неверно!\nПравильный ответ:\n${questionArr[i + 1]}`);
      console.log("");
    }
  }
}


    }
    topicQuestion(readLine)
    console.log(`Ваш результат:${count}`);
    return
}

start()
