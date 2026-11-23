// ==================== 课程数据 ====================
const courseData = {
    'pre-think': {
        name: 'Pre Think - 启蒙级',
        units: [
            {
                id: 1,
                name: 'Unit 1: Hello',
                words: [
                    { word: 'hello', chinese: '你好', emoji: '👋' },
                    { word: 'hi', chinese: '嗨', emoji: '😊' },
                    { word: 'bye', chinese: '再见', emoji: '👋' },
                    { word: 'yes', chinese: '是的', emoji: '✅' },
                    { word: 'no', chinese: '不是', emoji: '❌' }
                ],
                sentences: [
                    'Hello! 你好！',
                    'Hi! 嗨！',
                    'Bye bye! 再见！',
                    'Yes! 是的！',
                    'No! 不是！'
                ],
                story: {
                    title: '小猫咪打招呼',
                    content: 'Hello! I am a cat. 🐱 Hi! I am happy. Yes, I like you! Bye bye, see you!',
                    emoji: '🐱'
                },
                conversations: [
                    { ai: 'Hello! What\'s your name?', type: 'open' },
                    { ai: 'Nice to meet you! Do you like cats?', options: ['Yes', 'No'] },
                    { ai: 'Great! Can you say "Hello" to me?', type: 'repeat', target: 'hello' },
                    { ai: 'Wonderful! Say "Bye bye"!', type: 'repeat', target: 'bye' }
                ]
            },
            {
                id: 2,
                name: 'Unit 2: Colors',
                words: [
                    { word: 'red', chinese: '红色', emoji: '🔴' },
                    { word: 'blue', chinese: '蓝色', emoji: '🔵' },
                    { word: 'yellow', chinese: '黄色', emoji: '🟡' },
                    { word: 'green', chinese: '绿色', emoji: '🟢' }
                ],
                sentences: [
                    'It is red. 它是红色的。',
                    'I like blue. 我喜欢蓝色。',
                    'The sun is yellow. 太阳是黄色的。',
                    'Grass is green. 草是绿色的。'
                ],
                story: {
                    title: '彩虹的颜色',
                    content: 'Look! A rainbow! 🌈 I see red. I see blue. I see yellow. I see green. So beautiful!',
                    emoji: '🌈'
                },
                conversations: [
                    { ai: 'Hello! Do you like colors?', options: ['Yes', 'No'] },
                    { ai: 'What color do you like? Red, blue, or yellow?', options: ['Red', 'Blue', 'Yellow'] },
                    { ai: 'Great choice! Can you say "I like [color]"?', type: 'open' },
                    { ai: 'Perfect! What color is the sky?', options: ['Red', 'Blue', 'Green'] }
                ]
            },
            {
                id: 3,
                name: 'Unit 3: Animals',
                words: [
                    { word: 'cat', chinese: '猫', emoji: '🐱' },
                    { word: 'dog', chinese: '狗', emoji: '🐶' },
                    { word: 'bird', chinese: '鸟', emoji: '🐦' },
                    { word: 'fish', chinese: '鱼', emoji: '🐟' }
                ],
                sentences: [
                    'I see a cat. 我看见一只猫。',
                    'The dog is happy. 狗很开心。',
                    'A bird can fly. 鸟会飞。',
                    'Fish swim in water. 鱼在水里游。'
                ],
                story: {
                    title: '动物园之旅',
                    content: 'Welcome to the zoo! 🎪 Look! A cat! Meow! A dog! Woof! A bird! Tweet! A fish! Splash!',
                    emoji: '🎪'
                },
                conversations: [
                    { ai: 'Hi! Do you like animals?', options: ['Yes', 'No'] },
                    { ai: 'What animal do you like? Cat, dog, or bird?', options: ['Cat', 'Dog', 'Bird'] },
                    { ai: 'Awesome! What does a dog say?', options: ['Meow', 'Woof', 'Tweet'] },
                    { ai: 'Excellent! Can you say "I like dogs"?', type: 'open' }
                ]
            }
        ]
    },
    'think1': {
        name: 'Think 1 - 基础级',
        units: [
            {
                id: 1,
                name: 'Unit 1: My Family',
                words: [
                    { word: 'family', chinese: '家庭', emoji: '👨‍👩‍👧‍👦' },
                    { word: 'mom', chinese: '妈妈', emoji: '👩' },
                    { word: 'dad', chinese: '爸爸', emoji: '👨' },
                    { word: 'sister', chinese: '姐妹', emoji: '👧' },
                    { word: 'brother', chinese: '兄弟', emoji: '👦' }
                ],
                sentences: [
                    'This is my family. 这是我的家庭。',
                    'I love my mom. 我爱我的妈妈。',
                    'My dad is tall. 我的爸爸很高。',
                    'I have a sister. 我有一个姐妹。'
                ],
                story: {
                    title: '我的家人',
                    content: 'I have a happy family! 👨‍👩‍👧‍👦 My mom is kind. My dad is strong. My sister is smart. I love my family!',
                    emoji: '❤️'
                },
                conversations: [
                    { ai: 'Hello! Tell me about your family. Do you have a brother or sister?', options: ['Yes', 'No'] },
                    { ai: 'That\'s nice! Who do you love most in your family?', type: 'open' },
                    { ai: 'Sweet! Can you say "I love my family"?', type: 'repeat', target: 'I love my family' },
                    { ai: 'Perfect! Is your mom kind?', options: ['Yes', 'No'] }
                ]
            }
        ]
    },
    'think2': {
        name: 'Think 2 - 进阶级',
        units: [
            {
                id: 1,
                name: 'Unit 1: Daily Activities',
                words: [
                    { word: 'eat', chinese: '吃', emoji: '🍽️' },
                    { word: 'sleep', chinese: '睡觉', emoji: '😴' },
                    { word: 'play', chinese: '玩', emoji: '⚽' },
                    { word: 'study', chinese: '学习', emoji: '📚' },
                    { word: 'run', chinese: '跑', emoji: '🏃' }
                ],
                sentences: [
                    'I eat breakfast. 我吃早餐。',
                    'I sleep at night. 我晚上睡觉。',
                    'I play with friends. 我和朋友玩。',
                    'I study English. 我学习英语。'
                ],
                story: {
                    title: '我的一天',
                    content: 'Every day is fun! 🌞 I eat, I sleep, I play, I study. I am happy! What do you do every day?',
                    emoji: '🌞'
                },
                conversations: [
                    { ai: 'Hi there! What do you like to do every day?', type: 'open' },
                    { ai: 'Cool! Do you like to play or study?', options: ['Play', 'Study', 'Both'] },
                    { ai: 'Great! When do you sleep? At night or in the morning?', options: ['At night', 'In the morning'] },
                    { ai: 'Perfect! Can you say "I play with friends"?', type: 'open' }
                ]
            }
        ]
    },
    'think3': {
        name: 'Think 3 - 提高级',
        units: [
            {
                id: 1,
                name: 'Unit 1: Hobbies',
                words: [
                    { word: 'hobby', chinese: '爱好', emoji: '🎨' },
                    { word: 'sing', chinese: '唱歌', emoji: '🎤' },
                    { word: 'dance', chinese: '跳舞', emoji: '💃' },
                    { word: 'draw', chinese: '画画', emoji: '🖌️' },
                    { word: 'read', chinese: '阅读', emoji: '📖' }
                ],
                sentences: [
                    'My hobby is singing. 我的爱好是唱歌。',
                    'I like to dance. 我喜欢跳舞。',
                    'I can draw pictures. 我会画画。',
                    'I love reading books. 我喜欢读书。'
                ],
                story: {
                    title: '我的爱好',
                    content: 'I have many hobbies! 🎨 I sing songs. I dance to music. I draw beautiful pictures. I read interesting books. Hobbies make me happy!',
                    emoji: '🎨'
                },
                conversations: [
                    { ai: 'Hello! What is your hobby?', type: 'open' },
                    { ai: 'Wonderful! Do you like singing or dancing?', options: ['Singing', 'Dancing', 'Both'] },
                    { ai: 'Amazing! Can you draw pictures?', options: ['Yes', 'No', 'A little'] },
                    { ai: 'Great! Tell me: What do you like to read?', type: 'open' }
                ]
            }
        ]
    },
    'think4': {
        name: 'Think 4 - 高级',
        units: [
            {
                id: 1,
                name: 'Unit 1: Weather & Seasons',
                words: [
                    { word: 'weather', chinese: '天气', emoji: '🌤️' },
                    { word: 'sunny', chinese: '晴朗的', emoji: '☀️' },
                    { word: 'rainy', chinese: '下雨的', emoji: '🌧️' },
                    { word: 'spring', chinese: '春天', emoji: '🌸' },
                    { word: 'summer', chinese: '夏天', emoji: '🌞' }
                ],
                sentences: [
                    'The weather is sunny today. 今天天气晴朗。',
                    'I like rainy days. 我喜欢下雨天。',
                    'Spring is beautiful. 春天很美。',
                    'Summer is very hot. 夏天很热。'
                ],
                story: {
                    title: '四季的天气',
                    content: 'The weather changes every season! 🌤️ In spring, it\'s warm and sunny. In summer, it\'s hot. I love all seasons!',
                    emoji: '🌤️'
                },
                conversations: [
                    { ai: 'Hi! How is the weather today?', type: 'open' },
                    { ai: 'Do you like sunny days or rainy days?', options: ['Sunny', 'Rainy', 'Both'] },
                    { ai: 'What is your favorite season? Spring, summer, fall, or winter?', options: ['Spring', 'Summer', 'Fall', 'Winter'] },
                    { ai: 'Why do you like that season?', type: 'open' }
                ]
            }
        ]
    },
    'think5': {
        name: 'Think 5 - 精通级',
        units: [
            {
                id: 1,
                name: 'Unit 1: Future Dreams',
                words: [
                    { word: 'dream', chinese: '梦想', emoji: '✨' },
                    { word: 'future', chinese: '未来', emoji: '🔮' },
                    { word: 'become', chinese: '成为', emoji: '🌟' },
                    { word: 'doctor', chinese: '医生', emoji: '👨‍⚕️' },
                    { word: 'teacher', chinese: '教师', emoji: '👨‍🏫' }
                ],
                sentences: [
                    'I have a dream. 我有一个梦想。',
                    'In the future, I want to be a doctor. 将来我想成为医生。',
                    'I will study hard. 我会努力学习。',
                    'My dream is important to me. 我的梦想对我很重要。'
                ],
                story: {
                    title: '我的梦想',
                    content: 'Everyone has a dream! ✨ In the future, I want to become a doctor. I will help people. I will study hard. What is your dream?',
                    emoji: '✨'
                },
                conversations: [
                    { ai: 'Hello! What is your dream for the future?', type: 'open' },
                    { ai: 'That\'s amazing! What do you want to become? A doctor, teacher, or something else?', options: ['Doctor', 'Teacher', 'Artist', 'Other'] },
                    { ai: 'Wonderful! Why do you want to be that?', type: 'open' },
                    { ai: 'Excellent! Will you study hard to achieve your dream?', options: ['Yes', 'Of course', 'Absolutely'] }
                ]
            }
        ]
    }
};

// ==================== 应用状态 ====================
const app = {
    currentLevel: null,
    currentUnit: null,
    currentStep: 0, // 0: 单词, 1: 句型, 2: 故事, 3: 对话
    chatStep: 0,
    silenceTimer: null,
    isRecording: false,
    recognition: null,
    conversationData: {
        silences: [],
        mistakes: [],
        weakPoints: [],
        responses: []
    },

    // ==================== 初始化 ====================
    init() {
        this.checkReviewTasks();
        this.initSpeechRecognition();
    },

    // ==================== 语音识别初始化 ====================
    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'en-US';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleUserResponse(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopRecording();
            };

            this.recognition.onend = () => {
                this.stopRecording();
            };
        }
    },

    // ==================== 页面导航 ====================
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
        document.getElementById(pageId).classList.remove('hidden');
    },

    goHome() {
        this.showPage('homePage');
        this.currentLevel = null;
        this.currentUnit = null;
        this.currentStep = 0;
    },

    backToUnits() {
        this.showPage('unitPage');
        this.currentUnit = null;
        this.currentStep = 0;
    },

    // ==================== 级别选择 ====================
    selectLevel(levelId) {
        this.currentLevel = levelId;
        const level = courseData[levelId];

        document.getElementById('levelTitle').textContent = level.name;

        const unitGrid = document.getElementById('unitGrid');
        unitGrid.innerHTML = '';

        level.units.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card';
            card.onclick = () => this.selectUnit(unit.id);
            card.innerHTML = `
                <h3>📖 ${unit.name}</h3>
                <p>点击开始学习</p>
            `;
            unitGrid.appendChild(card);
        });

        this.showPage('unitPage');
    },

    // ==================== 单元选择 ====================
    selectUnit(unitId) {
        const level = courseData[this.currentLevel];
        this.currentUnit = level.units.find(u => u.id === unitId);
        this.currentStep = 0;
        this.conversationData = { silences: [], mistakes: [], weakPoints: [], responses: [] };
        this.startLearning();
    },

    // ==================== 开始学习流程 ====================
    startLearning() {
        switch(this.currentStep) {
            case 0:
                this.showWords();
                break;
            case 1:
                this.showSentences();
                break;
            case 2:
                this.showStory();
                break;
            case 3:
                this.startChat();
                break;
            case 4:
                this.showAnalysis();
                break;
        }
    },

    nextStep() {
        this.currentStep++;
        this.startLearning();
    },

    // ==================== 单词学习 ====================
    showWords() {
        const wordList = document.getElementById('wordList');
        wordList.innerHTML = '';

        this.currentUnit.words.forEach(word => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.onclick = () => this.speak(word.word);
            card.innerHTML = `
                <div class="word-image">${word.emoji}</div>
                <div class="word-text">${word.word}</div>
                <div class="word-chinese">${word.chinese}</div>
            `;
            wordList.appendChild(card);
        });

        this.showPage('wordPage');
    },

    // ==================== 句型学习 ====================
    showSentences() {
        const sentenceList = document.getElementById('sentenceList');
        sentenceList.innerHTML = '';

        this.currentUnit.sentences.forEach(sentence => {
            const card = document.createElement('div');
            card.className = 'sentence-card';
            card.onclick = () => this.speak(sentence);
            card.innerHTML = `<p>${sentence}</p>`;
            sentenceList.appendChild(card);
        });

        this.showPage('sentencePage');
    },

    // ==================== 故事展示 ====================
    showStory() {
        const story = this.currentUnit.story;
        const container = document.getElementById('storyContainer');
        container.innerHTML = `
            <div class="story-container">
                <div class="story-title">${story.title}</div>
                <div class="story-image">${story.emoji}</div>
                <div class="story-content" onclick="app.speak('${story.content.replace(/'/g, "\\'")}')">${story.content}</div>
            </div>
        `;

        this.showPage('storyPage');
        this.speak(story.content);
    },

    // ==================== AI对话 ====================
    startChat() {
        this.chatStep = 0;
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';

        this.showPage('chatPage');

        setTimeout(() => {
            this.nextChatMessage();
        }, 1000);
    },

    nextChatMessage() {
        if (this.chatStep >= this.currentUnit.conversations.length) {
            this.nextStep();
            return;
        }

        const conv = this.currentUnit.conversations[this.chatStep];
        this.addMessage(conv.ai, 'ai');
        this.speak(conv.ai);

        this.startSilenceDetection(conv);
    },

    addMessage(text, type) {
        const chatMessages = document.getElementById('chatMessages');
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },

    addOptionMessage(options) {
        const chatMessages = document.getElementById('chatMessages');
        const message = document.createElement('div');
        message.className = 'message options';

        let html = '<p>你可以选择：</p>';
        options.forEach(option => {
            html += `<button class="option-button" onclick="app.handleUserResponse('${option}')">${option}</button>`;
        });

        message.innerHTML = html;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },

    // ==================== 沉默检测 ====================
    startSilenceDetection(conv) {
        clearTimeout(this.silenceTimer);

        this.silenceTimer = setTimeout(() => {
            if (conv.options) {
                this.conversationData.silences.push(conv.ai);
                this.addOptionMessage(conv.options);
                this.speak('Let me help you! You can choose one of these.');
            } else {
                this.conversationData.silences.push(conv.ai);
                this.addMessage('需要帮助吗？试着说出你的想法！', 'ai');
                this.speak('Take your time! Try to say something!');
            }
        }, 5000);
    },

    // ==================== 用户响应处理 ====================
    handleUserResponse(response) {
        clearTimeout(this.silenceTimer);

        this.addMessage(response, 'user');
        this.conversationData.responses.push({
            question: this.currentUnit.conversations[this.chatStep].ai,
            answer: response
        });

        // 鼓励回复
        const encouragements = [
            'Great job! 太棒了！',
            'Excellent! 非常好！',
            'Well done! 做得好！',
            'Perfect! 完美！',
            'Amazing! 真棒！',
            'Wonderful! 太好了！'
        ];

        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

        setTimeout(() => {
            this.addMessage(encouragement, 'ai');
            this.speak(encouragement);

            setTimeout(() => {
                this.chatStep++;
                this.nextChatMessage();
            }, 2000);
        }, 1000);
    },

    // ==================== 录音控制 ====================
    toggleRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
    },

    startRecording() {
        if (!this.recognition) {
            alert('抱歉，你的浏览器不支持语音识别。请使用Chrome浏览器。');
            return;
        }

        this.isRecording = true;
        const btn = document.getElementById('recordBtn');
        btn.textContent = '🎤 正在听...';
        btn.className = 'record-btn listening';

        this.recognition.start();
    },

    stopRecording() {
        this.isRecording = false;
        const btn = document.getElementById('recordBtn');
        btn.textContent = '🎤 点击说话';
        btn.className = 'record-btn start';

        if (this.recognition) {
            this.recognition.stop();
        }
    },

    // ==================== 语音合成 ====================
    speak(text) {
        // 移除中文部分，只朗读英文
        const englishText = text.replace(/[\u4e00-\u9fa5]/g, '').replace(/[。！，]/g, '');

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(englishText);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            speechSynthesis.speak(utterance);
        }
    },

    // ==================== 数据分析 ====================
    showAnalysis() {
        const analysis = this.analyzePerformance();
        const container = document.getElementById('analysisContent');

        let html = '<div class="stat-card">';
        html += '<h3>🎉 本课学习完成！</h3>';
        html += `<p>总对话轮数：${this.conversationData.responses.length}</p>`;
        html += `<p>需要引导次数：${this.conversationData.silences.length}</p>`;
        html += '</div>';

        if (analysis.weakPoints.length > 0) {
            html += '<div class="stat-card">';
            html += '<h3>📌 需要加强的部分 <span class="weakness-badge">需复习</span></h3>';
            analysis.weakPoints.forEach(point => {
                html += `<div class="weakness-item">${point}</div>`;
            });
            html += '</div>';
        }

        if (analysis.strongPoints.length > 0) {
            html += '<div class="stat-card">';
            html += '<h3>✅ 表现优秀的部分 <span class="strength-badge">已掌握</span></h3>';
            analysis.strongPoints.forEach(point => {
                html += `<div class="weakness-item">${point}</div>`;
            });
            html += '</div>';
        }

        container.innerHTML = html;
        this.showPage('analysisPage');

        // 保存学习数据用于复习
        this.saveForReview(analysis);
    },

    analyzePerformance() {
        const weakPoints = [];
        const strongPoints = [];

        // 分析沉默的问题作为薄弱点
        this.conversationData.silences.forEach(silence => {
            weakPoints.push(silence);
        });

        // 其他问题作为优势点
        this.currentUnit.conversations.forEach(conv => {
            if (!this.conversationData.silences.includes(conv.ai)) {
                strongPoints.push(conv.ai);
            }
        });

        return { weakPoints, strongPoints };
    },

    // ==================== 艾宾浩斯记忆复习系统 ====================
    saveForReview(analysis) {
        if (analysis.weakPoints.length === 0) return;

        const now = Date.now();
        const reviewSchedule = {
            levelId: this.currentLevel,
            unitId: this.currentUnit.id,
            unitName: this.currentUnit.name,
            weakPoints: analysis.weakPoints,
            createdAt: now,
            reviews: [
                { day: 0, dueDate: now, completed: false }, // 当天
                { day: 2, dueDate: now + 2 * 24 * 60 * 60 * 1000, completed: false }, // 第2天
                { day: 5, dueDate: now + 5 * 24 * 60 * 60 * 1000, completed: false }, // 第5天
                { day: 7, dueDate: now + 7 * 24 * 60 * 60 * 1000, completed: false }, // 第7天
                { day: 14, dueDate: now + 14 * 24 * 60 * 60 * 1000, completed: false } // 第14天
            ]
        };

        // 保存到本地存储
        let allReviews = JSON.parse(localStorage.getItem('reviewSchedules') || '[]');
        allReviews.push(reviewSchedule);
        localStorage.setItem('reviewSchedules', JSON.stringify(allReviews));
    },

    checkReviewTasks() {
        const allReviews = JSON.parse(localStorage.getItem('reviewSchedules') || '[]');
        const now = Date.now();

        for (let schedule of allReviews) {
            for (let review of schedule.reviews) {
                if (!review.completed && now >= review.dueDate) {
                    this.showReviewModal(schedule, review);
                    return; // 一次只显示一个复习任务
                }
            }
        }
    },

    showReviewModal(schedule, review) {
        const modal = document.getElementById('reviewModal');
        const message = document.getElementById('reviewMessage');

        message.textContent = `你有${schedule.unitName}的复习任务！让我们一起复习${schedule.weakPoints.length}个知识点吧！`;

        modal.classList.add('show');

        // 保存当前复习信息
        this.currentReview = { schedule, review };
    },

    startReview() {
        const modal = document.getElementById('reviewModal');
        modal.classList.remove('show');

        // 加载对应单元进行复习
        this.currentLevel = this.currentReview.schedule.levelId;
        this.selectUnit(this.currentReview.schedule.unitId);

        // 标记复习完成
        this.currentReview.review.completed = true;
        const allReviews = JSON.parse(localStorage.getItem('reviewSchedules') || '[]');
        localStorage.setItem('reviewSchedules', JSON.stringify(allReviews));
    },

    skipReview() {
        const modal = document.getElementById('reviewModal');
        modal.classList.remove('show');
    }
};

// ==================== 初始化应用 ====================
window.addEventListener('DOMContentLoaded', () => {
    app.init();
});
