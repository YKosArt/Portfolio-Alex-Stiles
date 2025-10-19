        // Language data
        const translations = {
            en: {
                projectData: {
                    ecommerce: {
                        title: 'E-Commerce Platform',
                        description: 'A full-featured e-commerce platform designed to provide a seamless shopping experience. The project includes payment gateway integration, inventory management, and an admin dashboard.',
                        features: [
                            'Secure payment integration (Stripe, PayPal)',
                            'Real-time product management',
                            'Order tracking and history',
                            'Admin dashboard with analytics',
                            'Responsive design for all devices',
                            'SEO optimization for better visibility'
                        ]
                    },
                    mobile: {
                        title: 'Task Management Mobile App',
                        description: 'A cross-platform mobile application that helps users efficiently organize and manage their tasks. Real-time synchronization across devices.',
                        features: [
                            'Real-time sync via Firebase',
                            'Offline mode with local storage',
                            'Push notifications for deadlines',
                            'Categories and tags for organization',
                            'Productivity statistics',
                            'Collaborative project work'
                        ]
                    },
                    corporate: {
                        title: 'Corporate Website',
                        description: 'Professional corporate website with modern design and powerful content management system. Multi-language support for international audience.',
                        features: [
                            'Custom WordPress theme',
                            'Multi-language support (6+ languages)',
                            'SEO optimization and fast loading',
                            'Blog with comment system',
                            'Contact forms',
                            'CRM system integration'
                        ]
                    },
                    dashboard: {
                        title: 'Analytics Dashboard',
                        description: 'Interactive analytics dashboard with real-time data visualization. Provides detailed reports and insights for business decisions.',
                        features: [
                            'Data visualization with D3.js',
                            'Real-time data updates',
                            'Report export (PDF, Excel)',
                            'Customizable widgets and charts',
                            'Data filtering and segmentation',
                            'API integration with external sources'
                        ]
                    },
                    design: {
                        title: 'Design System',
                        description: 'Comprehensive UI component library and guidelines to ensure design consistency across company products.',
                        features: [
                            'Library of 50+ components',
                            'Storybook documentation',
                            'Dark and light themes',
                            'Accessibility standards (WCAG 2.1)',
                            'Typography system',
                            'Color palette and spacing scale'
                        ]
                    },
                    game: {
                        title: 'Interactive 3D Game',
                        description: 'Browser-based 3D game with immersive gameplay and multiplayer functionality. Uses WebGL for high performance.',
                        features: [
                            '3D graphics with Three.js',
                            'Multiplayer via WebSocket',
                            'Physics engine',
                            'Achievement system',
                            'Player leaderboard',
                            'Cross-platform support'
                        ]
                    }
                },
                viewText: '👁️ View Details'
            },
            uk: {
                projectData: {
                    ecommerce: {
                        title: 'E-Commerce платформа',
                        description: 'Повнофункціональна платформа електронної комерції, розроблена для надання безперебійного досвіду покупок. Проєкт включає інтеграцію з платіжними системами, управління інвентарем та панель адміністратора.',
                        features: [
                            'Безпечна інтеграція платіжної системи (Stripe, PayPal)',
                            'Управління продуктами в реальному часі',
                            'Відстеження замовлень та історія',
                            'Панель адміністратора з аналітикою',
                            'Адаптивний дизайн для всіх пристроїв',
                            'SEO-оптимізація для кращої видимості'
                        ]
                    },
                    mobile: {
                        title: 'Мобільний додаток для управління задачами',
                        description: 'Кросплатформний мобільний додаток, який допомагає користувачам ефективно організовувати та управляти своїми задачами. Синхронізація в реальному часі між пристроями.',
                        features: [
                            'Синхронізація в реальному часі через Firebase',
                            'Офлайн режим з локальним збереженням',
                            'Push-сповіщення для дедлайнів',
                            'Категорії та теги для організації',
                            'Статистика продуктивності',
                            'Спільна робота над проєктами'
                        ]
                    },
                    corporate: {
                        title: 'Корпоративний веб-сайт',
                        description: 'Професійний корпоративний сайт з сучасним дизайном та потужною системою управління контентом. Багатомовна підтримка для міжнародної аудиторії.',
                        features: [
                            'Customна WordPress тема',
                            'Багатомовна підтримка (6+ мов)',
                            'SEO-оптимізація та швидке завантаження',
                            'Блог з системою коментарів',
                            'Форми зворотнього зв\'язку',
                            'Інтеграція з CRM системами'
                        ]
                    },
                    dashboard: {
                        title: 'Dashboard аналітики',
                        description: 'Інтерактивна панель аналітики з візуалізацією даних в реальному часі. Надає детальні звіти та insights для прийняття бізнес-рішень.',
                        features: [
                            'Візуалізація даних за допомогою D3.js',
                            'Оновлення даних в реальному часі',
                            'Експорт звітів (PDF, Excel)',
                            'Настроювані віджети та графіки',
                            'Фільтрація та сегментація даних',
                            'API інтеграція з зовнішніми джерелами'
                        ]
                    },
                    design: {
                        title: 'Дизайн-система',
                        description: 'Комплексна бібліотека UI компонентів та guidelines для забезпечення консистентності дизайну в продуктах компанії.',
                        features: [
                            'Бібліотека з 50+ компонентів',
                            'Документація в Storybook',
                            'Темна та світла теми',
                            'Accessibility стандарти (WCAG 2.1)',
                            'Типографічна система',
                            'Колірна палітра та spacing scale'
                        ]
                    },
                    game: {
                        title: 'Інтерактивна 3D гра',
                        description: 'Браузерна 3D гра з immersive геймплеєм та мультиплеєр функціональністю. Використовує WebGL для високої продуктивності.',
                        features: [
                            '3D графіка за допомогою Three.js',
                            'Мультиплеєр через WebSocket',
                            'Фізичний движок',
                            'Система досягнень',
                            'Рейтинг гравців',
                            'Кросплатформна підтримка'
                        ]
                    }
                },
                viewText: '👁️ Переглянути'
            }
        };

        let currentLang = 'en';

        // Language switcher
        function switchLanguage(lang) {
            currentLang = lang;
            const langSlider = document.getElementById('langSlider');
            const langButtons = document.querySelectorAll('.lang-btn');
            
            // Update slider position
            if (lang === 'uk') {
                langSlider.classList.add('uk');
            } else {
                langSlider.classList.remove('uk');
            }
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Update page content
            updatePageContent(lang);
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }

        function updatePageContent(lang) {
            // Update all elements with data-en and data-uk attributes
            const translatableElements = document.querySelectorAll('[data-en][data-uk]');
            translatableElements.forEach(element => {
                const translation = element.getAttribute(`data-${lang}`);
                if (translation) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            });
            
            // Update portfolio view text
            const portfolioImages = document.querySelectorAll('.portfolio-image');
            portfolioImages.forEach(img => {
                img.setAttribute('data-view-text', translations[lang].viewText);
            });
        }

        // Navigation
        function toggleMenu() {
            const navCenter = document.getElementById('navCenter');
            const menuToggle = document.getElementById('menuToggle');
            navCenter.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navCenter').classList.remove('active');
                document.getElementById('menuToggle').classList.remove('active');
            });
        });

        // Scroll effect for header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const scrollTop = document.getElementById('scrollTop');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                scrollTop.classList.add('show');
            } else {
                header.classList.remove('scrolled');
                scrollTop.classList.remove('show');
            }
        });

        // Modal functions
        function openModal(projectId) {
            const modal = document.getElementById('modal');
            const data = translations[currentLang].projectData[projectId];
            
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalDescription').textContent = data.description;
            
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal on outside click
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Form handling
        function handleSubmit(event) {
            event.preventDefault();
            
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            
            event.target.reset();
            
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Apply animations on load
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.portfolio-item, .skill-badge');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });