if (readLine == 3) {
    const question = fs.readFileSync(`${__dirname}/topics/3.txt`, 'utf-8')
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
        else if (answer === questionArr[i + 1]) {
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