// الأسئلة والإجابات
const questions = [
    { 
        question: "قيمة البيكو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-12</suP>فاراد" 
    },
    { 
        image: "alaa.jpg", // مسار الصورة الصحيح
        question: "قيمة نانو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-9</suP>فاراد"
    },
    { 
        question: "قيمة ميكرو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-6</suP>فاراد"
    },
    { 
        question: "قيمة مللي فاراد تساوي ..............", 
        answers: ["10<suP>-2</suP>فاراد", "10<suP>-3</suP>فاراد", "10<suP>3</suP>فاراد"], 
        correct: "10<suP>-3</suP>فاراد" 
    },
    { 
        question: "قيمة ميجا فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>6</suP>فاراد"
    },
    { 
        question: "قيمة جيجا فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>9</suP>فاراد"
    },
    { 
        question: "قيمة كيلو فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>3</suP>فاراد" 
    },
    { 
        question: "قيمة تيرا فاراد تساوي ..............", 
        answers: ["10<suP>6</suP>فاراد", "10<suP>12</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>12</suP>فاراد" 
    },
    { 
        question: "وحدة قياس الشحنة الكهربائية هي", 
        answers: ["الأمبير", "الفولت", "الكولوم"], 
        correct: "الكولوم" 
    },
    { 
        question: "وحدة قياس القوة الدافعة الكهربائية هي", 
        answers: ["الأوم", "الفولت", "الوات"], 
        correct: "الفولت" 
    },
    { 
        question: "تتكون الدائرة الكهربية من .........", 
        answers: ["منبع كهربي", "حمل كهربي", "مفتاح تحكم","اسلاك توصيل","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "وجد ثلاثة أنواع شائعة من الأحمال.........", 
        answers: ["حمل مادي", "حمل حثي", "حمل سعوي","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "عند ثبوت المقاومة تكون العلاقة بين (......) المار في موصل و (.....) بين طرفيه علاقة (......)", 
        answers: ["التيار , الجهد , عكسية", "التيار , الجهد , طردية"], 
        correct:  "التيار , الجهد , طردية"
    },
    { 
        question: "ينص قانون أوم على أن التيار المار في موصل يتناسب طردياً مع فرق الجهد بين طرفي هذا الموصل عند ثبوت  قيمة مقاومة الموصل", 
        answers: ["صح", "خطأ"], 
        correct: "صح" 
    },
    { 
        question: "الصيغ الرياضية المختلفة لقانون أوم (.....),(......),(.......) ", 
        answers: ["I = V / R", "R = V / I", "V = I * R","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "  القدرة فى دوائر التيار المستمر تساوى حاصل ضرب ....... * ....... وتقاس بوحدة .......", 
        answers: ["الجهد * التيار وتقاس بالوات", "الجهد في المقاومة وتقاس بالامبير","التيار في المقاومة وتقاس بالفولت"], 
        correct: "الجهد * التيار وتقاس بالوات"
    },
    {
        question: "وحدة قياس الجهد ..........",
        answers: ["جول / كولوم", "كولوم / ثانية","نيوتن"], 
        correct: "جول / كولوم"
    },{
        question: "وحدة قياس التيار ..........",
        answers: ["جول / كولوم", "كولوم / ثانية","نيوتن"], 
        correct: "كولوم / ثانية"
    },
    {
        question: "دائرة كهربية تحوي مقاومة قيمتها 5 كيلو أوم موصلة بمصدر جهد مستمر قيمته 9 فولت. احسب قيمة التيار المار في الدائرة بالمللي أمبير والقدرة بالوات. ..........",
        answers: ["التيار = 1.8 مللي أمبير ، القدرة = 0.0162 وات", "التيار = 0.0018 مللي أمبير ، القدرة = 0.0162 وات","التيار = 1.8 مللي أمبير ، القدرة = 0.0018 وات"], 
        correct: "التيار = 1.8 مللي أمبير ، القدرة = 0.0162 وات"
    },
    {
        question: "إذا كان التيار المار في مقاومة كهربية هو 5 مللي أمبير عندما كان فرق الجهد بين طرفيها 24 فولت، احسب قيمة المقاومة بالكيلو أوم وقيمة القدرة بالوات........",
        answers: ["المقاومة = 4.8 كيلو أوم ، القدرة = 0.012 وات", "المقاومة = 4.8 كيلو أوم ، القدرة = 0.12 وات","التيار = 1.8 مللي أمبير ، القدرة = 0.0018 وات"], 
        correct: "المقاومة = 4.8 كيلو أوم ، القدرة = 0.12 وات"
    },
    {
        question: "إذا كان التيار المار قيمته 10 أمبير وفرق الجهد 230 فولت فإن قيمة المقاومة تساوي ......",
        answers: ["المقاومة = 2.3 أوم", "المقاومة = 23 أوم","المقاومة = 2.3 كيلو أوم"], 
        correct: "المقاومة = 23 أوم"
    },

    {
        question: "إذا كان فرق الجهد 220 فولت وكانت قيمة المقاومة 44 أوم كم يكون التيار المار بالدائرة .........",
        answers: ["التيار = 0.2 أمبير", "التيار = 5 مللي أمبير","التيار = 5 أمبير"], 
        correct: "التيار = 5 أمبير"
    },

    {
        question: "إذا كان فرق الجهد 110 فولت وكانت قيمة المقاومة 15 أوم كم يكون التيار المار بالدائرة .........",
        answers: ["التيار = 7.33 أمبير", "التيار = 7.33 مللي أمبير","التيار = 0.136 أمبير"], 
        correct: "التيار = 7.33 أمبير"
    },

    {
        question: "إذا كانت شدة التيار 5 أمبير وكانت قيمة المقاومة 25 أوم كم يكون فرق الجهد .........",
        answers: ["فرق الجهد = 125 فولت", "فرق الجهد = 125 ميجا فولت","فرق الجهد = 0.2 فولت"], 
        correct: "فرق الجهد = 125 فولت"
    }
    ,

    { 
        question: "أوجد قيمة المقاومة علماً بأن الألوان التي عليها (أحمر - أحمر - بني - ذهبي )", 
        answers: [
            "قيمة المقاومة 2200 أوم  " + "\u00B1" + " 5%", 
            "قيمة المقاومة 220 أوم  " + "\u00B1" + " 10%",
            "قيمة المقاومة 220 أوم  " + "\u00B1" + " 5%"
        ], 
        correct:  "قيمة المقاومة 220 أوم  " + "\u00B1" + " 5%"
    },
    { 
        question: "ثلاث مقاومات متصلة على التوالي قيمها: 5، 15 و 20 كيلو أوم. ما قيمة المقاومة الكلية؟", 
        answers: [
            "المقاومة الكلية = 40 أوم", 
           "المقاومة الكلية = 3.1 أوم",
            "المقاومة الكلية = 1500 أوم"
        ], 
        correct: "المقاومة الكلية = 40 أوم"
    },
    { 
        question: "خمس مقاومات متساوية متصلة على التوالي قيمة كل منها 6.8 كيلو أوم. احسب المقاومة الكلية", 
        answers: [
            "المقاومة الكلية = 34 كيلو أوم", 
           "المقاومة الكلية = 43 كيلو أوم",
           "المقاومة الكلية = 0.147 كيلو أوم"
        ], 
        correct:  "المقاومة الكلية = 34 كيلو أوم"
    },
    {
        question: "ثلاث مقاومات متصلة على التوازي و قيمهم 4، 8 و 24 كيلو أوم. ما قيمة المقاومة الكلية؟", 
        answers: [
            "المقاومة الكلية = 36 كيلو أوم", 
           "المقاومة الكلية = 2.4 كيلو أوم",
           "المقاومة الكلية = 0.416 كيلو أوم"
        ], 
        correct:  "المقاومة الكلية = 2.4 كيلو أوم"
    },
    {
        question: "خمس مقاومات متساوية متصلة على التوازي قيمة كل منها 6.8 كيلو أوم. احسب المقاومة الكلية.", 
        answers: [
            "المقاومة الكلية = 43 كيلو أوم", 
           "المقاومة الكلية = 34 كيلو أوم",
           "المقاومة الكلية = 1.36 كيلو أوم"
        ], 
        correct:  "المقاومة الكلية = 1.36 كيلو أوم"
    },
    {
        question:"المقاومة الكلية في حالة توصيل مقاومات على التوالي.......", 
        answers: [
            "تكون أكبر من أكبر قيمة مقاومة بالدائرة", 
           "تكون أصغر من أقل قيمة مقاومة بالدائرة",
           "تساوي قيمة أي مقاومة بالدائرة"
        ], 
        correct:  "تكون أكبر من أكبر قيمة مقاومة بالدائرة"
    },
    {
        question:"في حالة توصيل المقاومات على التوالي فإن التيار الكلي المار في الدائرة هو ( نفسه) في جميع أجزاء الدائرة، والجهد الكلي (يتجزأ) على المقاومات.", 
        answers: [
            "عبارة صحيحة", 
           "عبارة خاطئة",
           
        ], 
        correct:   "عبارة صحيحة"
    },
    {
        question:"التيار الكهربي الذي يتغير في القيمة (لحظياً) والاتجاه مع تكرار نفسه دورياً بمرور الزمن.......", 
        answers: [
            "التيار المتردد", 
           "التيار المستمر",
           "التيار النبضي"
        ], 
        correct:  "التيار المتردد"
    },
    {
        question:"الزمن بالثانية والذي يستغرقه دورة/ذبذبة واحدة من موجة الجهد أو التيار......", 
        answers: [
            "الموجه", 
           "التردد",
           "الزمن الدوري"
        ], 
        correct:  "الزمن الدوري"
    },
    {
        question:"عدد الدورات/الذبذبات أو الموجات في الثانية الواحدة......", 
        answers: [
            "الموجه", 
           "التردد",
           "الزمن الدوري"
        ], 
        correct:  "التردد"
    },
    {
        question:"أقصى قيمة يصل إليها الجهد أو التيار وفي حالة الموجة الجيبية المثالية.....", 
        answers: [
            "القيمة الفعالة", 
           "القيمة المتوسطة",
           " القيمة العظمى"
        ], 
        correct:  " القيمة العظمى"
    }
   
    
    // أضف بقية الأسئلة هنا
];

let shuffledQuestions1 = [];
let currentQuestionIndex1 = 0;
let userAnswers1 = [];

// خلط الأسئلة
function shuffleQuestions() {
    shuffledQuestions1 = [...questions];
    shuffledQuestions1.sort(() => Math.random() - 0.5);
    shuffledQuestions1 = shuffledQuestions1.slice(0, 10); // اختيار أول 10 أسئلة فقط
}

// تحميل السؤال الأول عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    shuffleQuestions(); // خلط الأسئلة عند تحميل الصفحة
    loadQuestion();
});


function loadQuestion() {
    const questionContainer = document.getElementById("question-text1");
    const answersContainer = document.getElementById("answers1");

    // تحديث نص السؤال
    const currentQuestion = shuffledQuestions1[currentQuestionIndex1];
    questionContainer.textContent = currentQuestion.question;

    // تحديث خيارات الإجابة
    answersContainer.innerHTML = ""; // مسح الخيارات القديمة
    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
        answersContainer.appendChild(label);
    });

    // إظهار أو إخفاء الأزرار حسب السؤال
    const nextBtn = document.getElementById("next-btn1");
    const submitBtn = document.getElementById("submit-btn1");

    if (currentQuestionIndex1 === shuffledQuestions1.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

function nextQuestion() {
    // التحقق من اختيار المستخدم للإجابة
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("يرجى اختيار إجابة قبل الانتقال للسؤال التالي.");
        return;
    }

    // حفظ الإجابة
    userAnswers1.push(selectedAnswer.value);

    // الانتقال للسؤال التالي
    currentQuestionIndex1++;
    loadQuestion();
}

function submitQuiz() {
    // حفظ الإجابة الأخيرة
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers1.push(selectedAnswer.value);
    }
    

    // حساب النتيجة
    let score = 0;
    userAnswers1.forEach((answer, index) => {
        if (answer === shuffledQuestions1[index].correct) {
            score++;
        }
    });
    const subtitleElement = document.querySelector(".custom-subtitle");
    if (subtitleElement) {
        subtitleElement.style.display = "none"; // إخفاء العنصر
    }
    

    // عرض النتيجة
    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `لقد حصلت على <strong>${score}/${shuffledQuestions1.length}</strong>`;
    if (score === shuffledQuestions1.length) {
        resultContainer.innerHTML += "  <br>رائع! إجاباتك كلها صحيحة!<br> مع تحيات أستاذ علاء فريد واسرة الكهرباء<br>شكر خاص لتوجيه كهرباء الاسماعيلية المهندس محمود جابر والمهندس هشام السيد";
    } else {
        resultContainer.innerHTML += "<br>يمكنك تحسين أدائك في المرة القادمة. <br> مع تحيات أستاذ علاء فريد واسرة الكهرباء<br>شكر خاص لتوجيه كهرباء الاسماعيلية المهندس محمود جابر والمهندس هشام السيد";
    }
    // إخفاء السؤال والأزرار
document.getElementById("quiz-container").style.display = "none";
}
