const translations = {
    uk: {
        logo: "Gertyn230",
        about: "Про мене",
        projects: "Проєкти",
        contacts: "Контакти",
        heroTitle: "Створюю майбутнє<br>з кодом та креативом",
        heroSubtitle: "Fullstack розробник з фокусом на сучасні технології та інновації",
        viewProjects: "Переглянути проєкти",
        aboutTitle: "Про мене",
        aboutText: "Молодший спеціаліст з повним циклом розробки - від ідеї до реалізації. Прагну створювати продукти, які вирішують реальні проблеми.",
        skill1Title: "Python",
        skill1Desc: "AI • Боти • Автоматизація",
        skill2Title: "React",
        skill2Desc: "SPA • Динамічні інтерфейси",
        skill3Title: "Бази даних",
        skill3Desc: "SQL • Оптимізація • Безпека",
        projectsTitle: "Останні проєкти",
        project1Title: "AI Модератор чатів",
        project1Desc: "Розумна система модерації з машинним навчанням",
        project2Title: "Корпоративний Task Manager",
        project2Desc: "Система управління проектами для команд",
        contactTitle: "Зв'язок",
        email: "gertn230@gmail.com",
        telegram: "@gertyn230",
        github: "GitHub Профіль",
        namePlaceholder: "Ім'я",
        emailPlaceholder: "Email",
        messagePlaceholder: "Ваше повідомлення",
        sendButton: "Надіслати",
        copyright: "© 2024 Олексій. Всі права захищені"
    },
    en: {
        logo: "Gertyn230",
        about: "About",
        projects: "Projects",
        contacts: "Contact",
        heroTitle: "Building the future<br>with code and creativity",
        heroSubtitle: "Fullstack developer focused on modern technologies and innovations",
        viewProjects: "View Projects",
        aboutTitle: "About Me",
        aboutText: "Junior specialist with full development cycle experience - from idea to implementation. Passionate about creating products that solve real-world problems.",
        skill1Title: "Python",
        skill1Desc: "AI • Bots • Automation",
        skill2Title: "React",
        skill2Desc: "SPA • Dynamic Interfaces",
        skill3Title: "Databases",
        skill3Desc: "SQL • Optimization • Security",
        projectsTitle: "Recent Projects",
        project1Title: "AI Chat Moderator",
        project1Desc: "Smart moderation system with machine learning",
        project2Title: "Corporate Task Manager",
        project2Desc: "Project management system for teams",
        contactTitle: "Contact",
        email: "gertn230@gmail.com",
        telegram: "@gertyn230",
        github: "GitHub Profile",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Your Message",
        sendButton: "Send",
        copyright: "© 2024 Alexey. All rights reserved"
    },
    ru: {
        logo: "Gertyn230",
        about: "Обо мне",
        projects: "Проекты",
        contacts: "Контакты",
        heroTitle: "Создаю будущее<br>с кодом и креативом",
        heroSubtitle: "Fullstack разработчик, специализирующийся на современных технологиях",
        viewProjects: "Посмотреть проекты",
        aboutTitle: "Обо мне",
        aboutText: "Младший специалист с полным циклом разработки - от идеи до реализации. Стремлюсь создавать продукты, решающие реальные проблемы.",
        skill1Title: "Python",
        skill1Desc: "AI • Боты • Автоматизация",
        skill2Title: "React",
        skill2Desc: "SPA • Динамические интерфейсы",
        skill3Title: "Базы данных",
        skill3Desc: "SQL • Оптимизация • Безопасность",
        projectsTitle: "Последние проекты",
        project1Title: "AI Модератор чатов",
        project1Desc: "Умная система модерации с машинным обучением",
        project2Title: "Корпоративный Task Manager",
        project2Desc: "Система управления проектами для команд",
        contactTitle: "Связь",
        email: "gertn230@gmail.com",
        telegram: "@gertyn230",
        github: "Профиль GitHub",
        namePlaceholder: "Имя",
        emailPlaceholder: "Email",
        messagePlaceholder: "Ваше сообщение",
        sendButton: "Отправить",
        copyright: "© 2024 Алексей. Все права защищены"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Оновлення тексту
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.innerHTML = translations[lang][key];
    });

    // Оновлення плейсхолдерів
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = translations[lang][key];
    });

    // Оновлення активної кнопки
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.lang === lang) btn.classList.add('active');
    });

    // Збереження в localStorage
    localStorage.setItem('selectedLang', lang);
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    // Встановлення мови
    const savedLang = localStorage.getItem('selectedLang') || 'uk';
    changeLanguage(savedLang);

    // Обробник кліків для перемикача мов
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });

    // Плавний скрол
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Фікс для відступів секцій
    document.querySelectorAll('section').forEach(section => {
        section.style.paddingTop = '120px';
        section.style.marginTop = '-80px';
    });
});