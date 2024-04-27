let lessonToinfoBoxP = {
    "Data Types": 'Data types in Python define the kind of data stored in variables and the operations that can be performed on them. <br> <br> <b> String </b> - Words inside quotations marks like: "Hello World!" (or inside single quotation marks however we will be using ""). They are basically words or a multiple characters. <br> <b> Character </b> - Just a single character like "a" however in python it will just call it a string so dont worry about this one <br> <b> Integer </b> - Numbers that do NOT have a decimal point like 5 or 5782886, basically any number. <br> <b> Float </b> - Numbers that DO have a decimal point like 0.5 <br> <b> Boolean </b> - Like binary, True or False <br> <br> Examples: <br> String: "Hello World!" <br> Character: "A" <br> Integer: 5 <br> Float: 0.5 <br> Boolean: True',
    "Variables": 'A variable is a named piece of memory which hold data that can be changed during the running of a program. To declare a variable in python you have to write the name then "=" to something else like so: <br> <br> name = "Luke" <br> <br> Variables can store any of the data types from the last lesson as well as some other things. Examples of multiple variables: <br> <br>name = "Luke" <br>Age = 16<br>isCool = True<br>money = 99999.99<br>',
    "Printing": 'Printing is essential to programming and will be a vital tool for debugging your code. You can print to the console any data type like:<br><br>print("Hello World!")<br><br>>Hello World!<br><br>The syntax of printing is important, the "p" must be lowercase and if your printing words make sure you do not forget the ""! You can also print the value of variables which will help debugging programs so you know what is happening.<br><br>num = 2<br>print(num)<br>>2<br><br>Its also possible to print multiple things at once like:<br><br>print("Hello", "World!")<br>>Hello World!<br><br>The comma puts a space between the strings (This works for all data types!).',
    "Maths": 'Maths in programming is extremely useful, to solve problems and make programs. In python you can add numbers together to get an output like this:<br><br>total = 1 + 1<br><br>This would save the result of 1 + 1 to total so if we printed this to the console it would say it is 2. There are 4 basic opperators you will need to know:<br><br>+ This is used for addition<br>- This is used for subtraction<br>* This is used for multiplication<br>/ This is used for dividing<br><br>An example for each are shown below with print statements to show what each does:<br><br>add = 1 + 4<br>print(add)<br>>5<br>sub = 4 - 1<br>print(sub)<br>>3<br>multi = 4 * 4<br>print(multi)<br>>16<br>div = 16 / 2<br>print(div)<br>>8<br><br>You can also do maths in the print statement:<br><br>print(2 + 2)<br>>4',
    "Maths With Variables": 'You can also do maths with variables themselves like:<br><br>num1 = 1<br>num2 = 3<br>total = num1 + num2<br><br>This would add the values of both of the variables and save the result as the variable total. If your trying to add a number to a variable though there is a more intuitive way:<br><br>num1 = 1<br>num1 += 1<br><br>The += will mean the value of num1 will be added to the number on the right of the equals sign. You can do the same with the other operators too!'
}


let lessonToQuestion = {
    "Data Types": ['What data type is this: <br> "Steven"', 'What data type is this: <br> "Giraffes are 30 times more likely to get hit by lightning than people."', 'What data type is this: <br> "E"', "What data type is this: <br> 14890", "What data type is this: <br> 8595.2", "What data type is this: <br> False", "What data type is this: <br> True"],
    "Variables": ['What is the value of "name"?<br>name = "Steve"', 'What is the value of "number"?<br>number = 64', 'What is the name of the variable?<br>myVariable = "cool fact here"', 'What is the name of the variable?<br>steve = "not old"', 'What is the data type of "name"?<br>name = "Steve"', 'What is the data type of "coolvariable"?<br>coolvariable = 64', 'What is the data type of "arrow"?<br>arrow = True'],
    "Printing": ['What does this output:<br>print("Daniel")', 'What does this output:<br>print(5)', 'What does this output:<br>print(false)', 'What does this output:<br>print("Im cool")', 'What does this output:<br>print(True)'],
    "Maths": ['Declare a variable called "num" and set it equal to 1 + 1', 'Declare a variable called "num" and set it equal to 16 / 4', 'Declare a variable called "num" and set it equal to 4 * 7', 'Declare a variable called "num" and set it equal to 100 - 10']
}

let lessonToAnswer = {
    "Data Types": ["string", "string", "character", "integer", "float", "boolean", "boolean"],
    "Variables": ["steve", "64", "myvariable", "steve", "string", "integer", "boolean"],
    "Printing": ["Daniel", "5", "false", "Im cool", "True"],
    "Maths": ['num = 1 + 1', 'num = 16 /4', 'num = 4 * 7', 'num = 100 - 10']
}

let giveAnExapleQuestions = {
    "Data Types": ["Write 'Hello World' as a string", "Write '5' as a integer", "Write '5' as a float", "Write 'c' as a character", "Write false as a boolean"],
    "Variables": ['Declare a variable called "myVariable" which equals "isCool"','Declare a variable called "trolleys" which equals "8"', 'Declare a variable called "slices" which equals "12.5"', 'Declare a variable called "friends" which equals "10"', 'Declare a variable called "cool" which equals "True"', 'Declare a variable called "fileName" which equals "NotAVirus.exe"'],
    "Printing": ['What comes before this:<br>("I am being printed")', 'Fix this statment:<br>print(Im not a odd person)', 'Fix this statment:<br>PRINT("I should be revising', 'Print the variable:<br>num = 78', 'Print the variable:<br>cool = True', 'Print the variable:<br>float = 14.4'],
    "Maths": ['Print 5 multiplied by 5', 'Print 9 divided by 3', 'Print 8 add 2', 'Print 10 subtract 4', 'Declare a variable called "num" and set it equal to 5 + 5 + 5']
}

let giveAnExapleAnswers = {
    "Data Types": ['"hello world"', "5", "5.0", '"c"', "false"],
    "Variables": ['myVariable = "isCool"', 'trolleys = 8', 'slices = 12.5', 'friends = 10', 'cool = true', 'file = "notavirus.exe"'],
    "Printing": ['print', 'print("Im not a odd person")', 'print("I should be revising")', 'print(num)', 'print(cool)', 'print(float)'],
    "Maths": ['print(5 * 5)', 'print(9 / 3)', 'print(8 + 2)', 'print(10 - 4)', 'num = 5 + 5 + 5']
}


function setupLesson(lesson) {
    document.getElementById('list').style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('learn-info').style.display = "none";
    document.getElementById('lessons').style.display = "none";

    document.getElementById("quiz-box-1").style.display = "none";
    document.getElementById("quiz-box-2").style.display = "none";
    document.getElementById("quiz-box-3").style.display = "none";
    document.getElementById("quiz-box-4").style.display = "none";
    document.getElementById("quiz-box-5").style.display = "none";
    document.getElementById("quiz-box-6").style.display = "none";
    document.getElementById("Completion-info").style.display = "none";

    document.getElementById("secondContinue").style.display = "none";
    document.getElementById("thirdContinue").style.display = "none";
    document.getElementById("fourthContinue").style.display = "none";
    document.getElementById("fifthContinue").style.display = "none";
    document.getElementById("sixthContinue").style.display = "none";
    document.getElementById("seventhContinue").style.display = "none";
    document.getElementById("completion-button").style.display = "none";

    document.getElementById("backButton").style.display = "block";

    document.getElementById("lesson-h").innerHTML = lesson;
    document.getElementById("info-box-p").innerHTML = lessonToinfoBoxP[lesson];
    document.getElementById("info-box").style.display = "block";
    document.getElementById("firstContinue").style.display = "inline-block";

    document.getElementById("lesson-stuff").style.display = "block";
}

function ContinueTofirstQuestion() {
    let lesson = document.getElementById("lesson-h").innerHTML;

    document.getElementById("quiz-answer-1").style.display = "none";
    document.getElementById("info-box").style.display = "none";
    document.getElementById("firstContinue").style.display = "none";
    document.getElementById("quiz-in-1").style.display = "inline-block";

    let listOfQuestions = lessonToQuestion[lesson];
    let listOfAnswers = lessonToAnswer[lesson];

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);
    
    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-1").innerHTML = question;

    document.getElementById("quiz-in-1").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue
            if (lesson !== "Printing") {
                input = enteredValue.toLowerCase()
            }
            if (input === answer) {
                document.getElementById("quiz-answer-1").style.display = "block";
                document.getElementById("quiz-answer-1").innerHTML = document.getElementById("quiz-in-1").value;
                document.getElementById("quiz-in-1").style.display = "none";
                document.getElementById("quiz-in-1").value = "";
                document.getElementById("secondContinue").style.display = "inline-block";
                document.getElementById("quiz-in-1").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-1").style.display = "block";
}

function continueToSecondQuestion() {
    document.getElementById("quiz-box-1").style.display = "none";
    document.getElementById("secondContinue").style.display = "none";
    document.getElementById("quiz-answer-2").style.display = "none";
    document.getElementById("quiz-in-2").style.display = "inline-block";

    let lesson = document.getElementById("lesson-h").innerHTML;

    let listOfQuestions = lessonToQuestion[lesson];
    let listOfAnswers = lessonToAnswer[lesson];

    let questionToRemove = document.getElementById("quiz-q-1").innerHTML;
    let index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);

    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-2").innerHTML = question;

    document.getElementById("quiz-in-2").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue
            if (lesson !== "Printing") {
                input = enteredValue.toLowerCase()
            }
            if (input === answer) {
                document.getElementById("quiz-answer-2").style.display = "block";
                document.getElementById("quiz-answer-2").innerHTML = document.getElementById("quiz-in-2").value;
                document.getElementById("quiz-in-2").style.display = "none";
                document.getElementById("quiz-in-2").value = "";
                document.getElementById("thirdContinue").style.display = "inline-block";
                document.getElementById("quiz-in-2").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-2").style.display = "block";
}

function continueToThirdQuestion() {
    document.getElementById("quiz-box-2").style.display = "none";
    document.getElementById("thirdContinue").style.display = "none";
    document.getElementById("quiz-answer-3").style.display = "none";
    document.getElementById("quiz-in-3").style.display = "inline-block";

    let lesson = document.getElementById("lesson-h").innerHTML;

    let listOfQuestions = lessonToQuestion[lesson];
    let listOfAnswers = lessonToAnswer[lesson];

    let questionToRemove = document.getElementById("quiz-q-1").innerHTML;
    let index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }
    questionToRemove = document.getElementById("quiz-q-2").innerHTML;
    index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);

    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-3").innerHTML = question;

    document.getElementById("quiz-in-3").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue
            if (lesson !== "Printing") {
                input = enteredValue.toLowerCase()
            }
            if (input === answer) {
                document.getElementById("quiz-answer-3").style.display = "block";
                document.getElementById("quiz-answer-3").innerHTML = document.getElementById("quiz-in-3").value;
                document.getElementById("quiz-in-3").style.display = "none";
                document.getElementById("quiz-in-3").value = "";
                document.getElementById("fourthContinue").style.display = "inline-block";
                document.getElementById("quiz-in-3").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-3").style.display = "block";
}

function continueToGiveAnExampleOne() {
    document.getElementById("quiz-box-3").style.display = "none";
    document.getElementById("fourthContinue").style.display = "none";
    document.getElementById("quiz-answer-4").style.display = "none";
    document.getElementById("quiz-in-4").style.display = "inline-block";

    let lesson = document.getElementById("lesson-h").innerHTML;

    let listOfQuestions = giveAnExapleQuestions[lesson];
    let listOfAnswers = giveAnExapleAnswers[lesson];

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);

    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-4").innerHTML = question;

    document.getElementById("quiz-in-4").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue.toLowerCase()
            if (input === answer) {
                document.getElementById("quiz-answer-4").style.display = "block";
                document.getElementById("quiz-answer-4").innerHTML = document.getElementById("quiz-in-4").value;
                document.getElementById("quiz-in-4").style.display = "none";
                document.getElementById("quiz-in-4").value = "";
                document.getElementById("fifthContinue").style.display = "inline-block";
                document.getElementById("quiz-in-4").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-4").style.display = "block";
}

function continueToGiveAnExampleTwo() {
    document.getElementById("quiz-box-4").style.display = "none";
    document.getElementById("fifthContinue").style.display = "none";
    document.getElementById("quiz-answer-5").style.display = "none";
    document.getElementById("quiz-in-5").style.display = "inline-block";

    let lesson = document.getElementById("lesson-h").innerHTML;

    let listOfQuestions = giveAnExapleQuestions[lesson];
    let listOfAnswers = giveAnExapleAnswers[lesson];

    let questionToRemove = document.getElementById("quiz-q-4").innerHTML;
    let index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);

    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-5").innerHTML = question;

    document.getElementById("quiz-in-5").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue.toLowerCase()
            if (input === answer) {
                document.getElementById("quiz-answer-5").style.display = "block";
                document.getElementById("quiz-answer-5").innerHTML = document.getElementById("quiz-in-5").value;
                document.getElementById("quiz-in-5").style.display = "none";
                document.getElementById("quiz-in-5").value = "";
                document.getElementById("sixthContinue").style.display = "inline-block";
                document.getElementById("quiz-in-5").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-5").style.display = "block";
}

function continueToGiveAnExampleThree() {
    document.getElementById("quiz-box-5").style.display = "none";
    document.getElementById("sixthContinue").style.display = "none";
    document.getElementById("quiz-answer-6").style.display = "none";
    document.getElementById("quiz-in-6").style.display = "inline-block";

    let lesson = document.getElementById("lesson-h").innerHTML;

    let listOfQuestions = giveAnExapleQuestions[lesson];
    let listOfAnswers = giveAnExapleAnswers[lesson];

    let questionToRemove = document.getElementById("quiz-q-4").innerHTML;
    let index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }
    questionToRemove = document.getElementById("quiz-q-5").innerHTML;
    index = listOfQuestions.indexOf(questionToRemove);
    if (index !== -1) {
        listOfQuestions.splice(index, 1);
        listOfAnswers.splice(index, 1);
    }

    let randomNumber = Math.floor(Math.random() * listOfQuestions.length);

    let question = listOfQuestions[randomNumber];
    let answer = listOfAnswers[randomNumber];

    document.getElementById("quiz-q-6").innerHTML = question;

    document.getElementById("quiz-in-6").addEventListener('input', function() {
        let enteredValue = this.value;
        if (enteredValue !== "") {
            let input = enteredValue.toLowerCase()
            if (input === answer) {
                document.getElementById("quiz-answer-6").style.display = "block";
                document.getElementById("quiz-answer-6").innerHTML = document.getElementById("quiz-in-6").value;
                document.getElementById("quiz-in-6").style.display = "none";
                document.getElementById("quiz-in-6").value = "";
                document.getElementById("seventhContinue").style.display = "inline-block";
                document.getElementById("quiz-in-6").removeEventListener('input', this);
            }
        }
    });

    document.getElementById("quiz-box-6").style.display = "block";
}

function continueToFinish() {
    document.getElementById("quiz-box-6").style.display = "none";
    document.getElementById("seventhContinue").style.display = "none";
    
    document.getElementById("Completion-info").style.display = "block";
    document.getElementById("completion-button").style.display = "inline-block";
}

function back() {
    document.getElementById('learn-info').style.display = "block"
    document.getElementById('lessons').style.display = "block"

    if (window.innerWidth <= 960) {
        document.getElementById('sidebar').style.display = "block"
        document.getElementById('list').style.display = "none"
    } else {
        document.getElementById('list').style.display = "block"
    }

    document.getElementById("lesson-stuff").style.display = "none"
    document.getElementById("backButton").style.display = "none"
}
