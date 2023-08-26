/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`author`)
) ENGINE = InnoDB AUTO_INCREMENT = 50 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: book_author_map
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `book_author_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 39 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  `wants` int NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `year` int NOT NULL DEFAULT '0',
  `pages` int NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 35 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`author`)
) ENGINE = InnoDB AUTO_INCREMENT = 50 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: book_author_map
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `book_author_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 39 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  `wants` int NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `year` int NOT NULL DEFAULT '0',
  `pages` int NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 35 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: authors
# ------------------------------------------------------------

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: authors
# ------------------------------------------------------------

INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (32, 'a');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (32, 'a');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (17, 'А. Белов');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (20, 'Александр Сераков');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (5, 'Брюс Эккель');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (11, 'Гэри Маклин Холл');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (28, 'Джей Макгаврен');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (12, 'Джеймс Р. Грофф');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (16, 'Джереми Блум');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (15, 'Джон Вудкок');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (29, 'Дрю Нейл');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (10, 'Дэвид Флэнаган');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (9, 'Клиффорд Штайн');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (13, 'Люк Веллинг');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (3, 'М. Вильямс');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (2, 'Марк Саммерфильд');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (26, 'Мартин Фаулер');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (22, 'Пол Дейтел');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (27, 'Прамодкумар Дж. Садаладж');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (24, 'Роберт Мартин');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (8, 'Рональд Ривест');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (14, 'Сергей Мастицкий');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (19, 'Сет Гринберг');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (18, 'Сэмюэл Грингард');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (21, 'Тим Кедлек');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (6, 'Томас Кормен');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (4, 'Уэс Маккинни');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (23, 'Харви Дейтел');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (7, 'Чарльз Лейзерсон');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (25, 'Энтони Грей');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: book_author_map
# ------------------------------------------------------------

INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (17, 'А. Белов');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (20, 'Александр Сераков');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (5, 'Брюс Эккель');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (11, 'Гэри Маклин Холл');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (28, 'Джей Макгаврен');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (12, 'Джеймс Р. Грофф');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (16, 'Джереми Блум');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (15, 'Джон Вудкок');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (29, 'Дрю Нейл');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (10, 'Дэвид Флэнаган');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (9, 'Клиффорд Штайн');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (13, 'Люк Веллинг');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (3, 'М. Вильямс');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (2, 'Марк Саммерфильд');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (26, 'Мартин Фаулер');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (22, 'Пол Дейтел');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (27, 'Прамодкумар Дж. Садаладж');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (24, 'Роберт Мартин');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (8, 'Рональд Ривест');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (14, 'Сергей Мастицкий');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (19, 'Сет Гринберг');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (18, 'Сэмюэл Грингард');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (21, 'Тим Кедлек');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (6, 'Томас Кормен');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (4, 'Уэс Маккинни');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (23, 'Харви Дейтел');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (7, 'Чарльз Лейзерсон');
INSERT INTO
  `authors` (`id`, `author`)
VALUES
  (25, 'Энтони Грей');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: book_author_map
# ------------------------------------------------------------

INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (1, 1, 1);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (2, 2, 2);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (3, 3, 3);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (4, 4, 4);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (5, 5, 5);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (6, 6, 6);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (7, 6, 7);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (8, 6, 8);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (9, 6, 9);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (10, 7, 10);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (11, 8, 11);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (12, 9, 12);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (13, 10, 13);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (14, 11, 14);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (15, 12, 15);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (16, 13, 16);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (17, 14, 17);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (18, 15, 18);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (19, 16, 19);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (20, 17, 20);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (21, 18, 21);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (22, 19, 22);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (23, 19, 23);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (24, 20, 24);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (25, 21, 25);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (26, 22, 26);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (27, 22, 27);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (28, 23, 28);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (29, 24, 29);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (1, 1, 1);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (2, 2, 2);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (3, 3, 3);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (4, 4, 4);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (5, 5, 5);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (6, 6, 6);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (7, 6, 7);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (8, 6, 8);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (9, 6, 9);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (10, 7, 10);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (11, 8, 11);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (12, 9, 12);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (13, 10, 13);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (14, 11, 14);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (15, 12, 15);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (16, 13, 16);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (17, 14, 17);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (18, 15, 18);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (19, 16, 19);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (20, 17, 20);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (21, 18, 21);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (22, 19, 22);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (23, 19, 23);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (24, 20, 24);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (25, 21, 25);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (26, 22, 26);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (27, 22, 27);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (28, 23, 28);
INSERT INTO
  `book_author_map` (`id`, `book_id`, `author_id`)
VALUES
  (29, 24, 29);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    1,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    15,
    1,
    0,
    2003,
    352,
    'Лекции и практикум по программированию на Си++'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    2,
    'Программирование на языке Go!',
    4,
    0,
    0,
    2013,
    550,
    'Практическое руководство по Go, революционно новому языку программирования со встроенной поддержкой параллельного программирования, упрощающему разработку программ для многопроцессорных систем.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    3,
    'Толковый словарь сетевых терминов и аббревиатур',
    1,
    0,
    0,
    2002,
    368,
    'Этот словарь представляет собой наиболее полное и свежее собрание терминов и аббревиатур, которые применяются в области сетевых технологий.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    4,
    'Python for Data Analysis',
    1,
    0,
    0,
    2020,
    540,
    'Все про “Python і аналіз даних”'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    5,
    'Thinking in Java (4th Edition)',
    2,
    0,
    0,
    2016,
    1168,
    '“Философия Java” посвящена именно той теме, которая описана в заглавии.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    6,
    'Introduction to Algorithms',
    3,
    0,
    0,
    2013,
    1328,
    'Книга «Алгоритмы: построение и анализ» удачно объединяет в себе полноту охвата и строгость изложения.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    7,
    'JavaScript Pocket Reference',
    2,
    0,
    0,
    2020,
    320,
    'В книге представлены наиболее важные сведения о синтаксисе языка и показаны примеры его практического применения'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    8,
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    4,
    0,
    0,
    2016,
    432,
    'В этой книге рассматриваются практические вопросы гибкой разработки адаптивного кода с помощью проектных шаблонов и принципов SOLID: единственной ответственности, открытости-закрытости, подстановки Лисков, разделения интерфейса, внедрения зависимостей.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    9,
    'SQL: The Complete Reference',
    2,
    0,
    0,
    2015,
    960,
    'Данная книга включает полное описание синтаксиса соединений SQL!'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    10,
    'PHP and MySQL Web Development',
    2,
    0,
    0,
    2020,
    768,
    'Самое авторитетное руководство по построению веб-приложений на PHP, взаимодействующих с базами MySQL!'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    11,
    'Статистический анализ и визуализация данных с помощью R',
    2,
    0,
    0,
    2015,
    496,
    'Книга адресована студентам, аспирантам, а также молодым и состоявшимся ученым, желающим освоить классические и современные методы анализа данных с использованием языка R.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    12,
    'Computer Coding for Kid',
    2,
    0,
    0,
    2019,
    224,
    'Иллюстрированное руководство по языкам Scratch и Python'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    13,
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    2,
    0,
    0,
    2015,
    336,
    'Легкий для понимания стиль изложения и глубокое содержание книги по Arduino позволят новичкам в области цифровых технологий обрести почву под ногами, а опытным пользователям, увлеченным своим хобби, окунуться в мир Arduino для создания оригинальных устройств'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    14,
    'Программирование микроконтроллеров для начинающих и не только',
    4,
    0,
    0,
    2016,
    352,
    'Новейший самоучитель позволит уверенно пройти путь от уровня, получившего меткое название чайник, до вполне готового специалиста, умеющего самостоятельно разрабатывать готовые работоспособные микроэлектронные устройства.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    15,
    'The Internet of Things',
    4,
    1,
    0,
    2016,
    188,
    'Автор рассказывает, как все будет развиваться в ближайшие годы, и помогает разобраться с преимуществами и угрозами, которые Интернет вещей в себе таит.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    16,
    'Sketching User Experiences: The Workbook',
    2,
    0,
    0,
    2014,
    272,
    'Описаны инструменты, приемы работы и методики создания эскизов.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    17,
    'InDesign CS6',
    2,
    0,
    0,
    2013,
    208,
    ' Описанные в книге примеры и методы помогут вам решать свои собственные задачи, а опыт, накопленный авторами за долгие годы работы с InDesign, станет отличным подспорьем для достижения поставленных целей.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    18,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    4,
    0,
    0,
    2013,
    288,
    'Книга Тима Кедлека, известного специалиста в области веб-дизайна, рассказывает, как грамотно создать сайт с использованием «резиновой верстки» модулей media queries и fluid media, как с самого начала правильно организовать рабочий процесс создания сайта в адаптивном дизайне и как учитывать особенности различных устройств.\r\n'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    19,
    'Android для разработчиков',
    3,
    0,
    0,
    2016,
    512,
    'Добро пожаловать в динамичный мир разработки приложений для смартфонов и планшетов Android с использованием Android Software Development Kit (SDK), языка программирования Javа, а также новой и стремительно развивающейся среды разработки Android Studio.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    20,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    4,
    0,
    0,
    2013,
    464,
    'Эта книга посвящена хорошему программированию.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    21,
    'Swift Pocket Reference: Programming for iOS and OS X',
    4,
    0,
    0,
    2016,
    288,
    'Практичный и удобный справочник дает возможность быстро найти ответы на основные вопросы по разработке и отладке прикладных программ на языке Swift (мультипарадигматический язык программирования, разработан компанией Apple).'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    22,
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    3,
    0,
    0,
    2014,
    192,
    'В этой книге описано краткое, но полное введение в эту быстро развивающуюся технологию. '
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    23,
    'Head First Ruby',
    2,
    0,
    0,
    2016,
    544,
    'Вам интересно, почему буквально все вокруг заговорили о языке Ruby? Спросите себя прямо: Вам нравится работать эффективно? Неужели многочисленные компиляторы, библиотеки, классы, которыми грузят вас другие языки программирования, приближают вас к решению конкретной задачи, восхищению коллег и толпе счастливых заказчиков? Вы хотите, чтобы язык программирования занимался техническими подробностями вместо вас? Тогда бросайте рутинную работу и приступайте к решению конкретных задач, а язык Ruby сделает за вас все остальное.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    24,
    'Practical Vim',
    1,
    0,
    0,
    2016,
    292,
    'Vim – быстрый и эффективный текстовый редактор, способный повысить скорость и эффективность разработки. С помощью более ста рецептов вы быстро освоите основные возможности Vim и сможете заняться решением своих самых необычных задач, связанных с созданием и правкой текста.'
  );

INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    1,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    15,
    1,
    0,
    2003,
    352,
    'Лекции и практикум по программированию на Си++'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    2,
    'Программирование на языке Go!',
    4,
    0,
    0,
    2013,
    550,
    'Практическое руководство по Go, революционно новому языку программирования со встроенной поддержкой параллельного программирования, упрощающему разработку программ для многопроцессорных систем.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    3,
    'Толковый словарь сетевых терминов и аббревиатур',
    1,
    0,
    0,
    2002,
    368,
    'Этот словарь представляет собой наиболее полное и свежее собрание терминов и аббревиатур, которые применяются в области сетевых технологий.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    4,
    'Python for Data Analysis',
    1,
    0,
    0,
    2020,
    540,
    'Все про “Python і аналіз даних”'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    5,
    'Thinking in Java (4th Edition)',
    2,
    0,
    0,
    2016,
    1168,
    '“Философия Java” посвящена именно той теме, которая описана в заглавии.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    6,
    'Introduction to Algorithms',
    3,
    0,
    0,
    2013,
    1328,
    'Книга «Алгоритмы: построение и анализ» удачно объединяет в себе полноту охвата и строгость изложения.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    7,
    'JavaScript Pocket Reference',
    2,
    0,
    0,
    2020,
    320,
    'В книге представлены наиболее важные сведения о синтаксисе языка и показаны примеры его практического применения'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    8,
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    4,
    0,
    0,
    2016,
    432,
    'В этой книге рассматриваются практические вопросы гибкой разработки адаптивного кода с помощью проектных шаблонов и принципов SOLID: единственной ответственности, открытости-закрытости, подстановки Лисков, разделения интерфейса, внедрения зависимостей.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    9,
    'SQL: The Complete Reference',
    2,
    0,
    0,
    2015,
    960,
    'Данная книга включает полное описание синтаксиса соединений SQL!'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    10,
    'PHP and MySQL Web Development',
    2,
    0,
    0,
    2020,
    768,
    'Самое авторитетное руководство по построению веб-приложений на PHP, взаимодействующих с базами MySQL!'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    11,
    'Статистический анализ и визуализация данных с помощью R',
    2,
    0,
    0,
    2015,
    496,
    'Книга адресована студентам, аспирантам, а также молодым и состоявшимся ученым, желающим освоить классические и современные методы анализа данных с использованием языка R.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    12,
    'Computer Coding for Kid',
    2,
    0,
    0,
    2019,
    224,
    'Иллюстрированное руководство по языкам Scratch и Python'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    13,
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    2,
    0,
    0,
    2015,
    336,
    'Легкий для понимания стиль изложения и глубокое содержание книги по Arduino позволят новичкам в области цифровых технологий обрести почву под ногами, а опытным пользователям, увлеченным своим хобби, окунуться в мир Arduino для создания оригинальных устройств'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    14,
    'Программирование микроконтроллеров для начинающих и не только',
    4,
    0,
    0,
    2016,
    352,
    'Новейший самоучитель позволит уверенно пройти путь от уровня, получившего меткое название чайник, до вполне готового специалиста, умеющего самостоятельно разрабатывать готовые работоспособные микроэлектронные устройства.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    15,
    'The Internet of Things',
    4,
    1,
    0,
    2016,
    188,
    'Автор рассказывает, как все будет развиваться в ближайшие годы, и помогает разобраться с преимуществами и угрозами, которые Интернет вещей в себе таит.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    16,
    'Sketching User Experiences: The Workbook',
    2,
    0,
    0,
    2014,
    272,
    'Описаны инструменты, приемы работы и методики создания эскизов.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    17,
    'InDesign CS6',
    2,
    0,
    0,
    2013,
    208,
    ' Описанные в книге примеры и методы помогут вам решать свои собственные задачи, а опыт, накопленный авторами за долгие годы работы с InDesign, станет отличным подспорьем для достижения поставленных целей.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    18,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    4,
    0,
    0,
    2013,
    288,
    'Книга Тима Кедлека, известного специалиста в области веб-дизайна, рассказывает, как грамотно создать сайт с использованием «резиновой верстки» модулей media queries и fluid media, как с самого начала правильно организовать рабочий процесс создания сайта в адаптивном дизайне и как учитывать особенности различных устройств.\r\n'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    19,
    'Android для разработчиков',
    3,
    0,
    0,
    2016,
    512,
    'Добро пожаловать в динамичный мир разработки приложений для смартфонов и планшетов Android с использованием Android Software Development Kit (SDK), языка программирования Javа, а также новой и стремительно развивающейся среды разработки Android Studio.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    20,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    4,
    0,
    0,
    2013,
    464,
    'Эта книга посвящена хорошему программированию.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    21,
    'Swift Pocket Reference: Programming for iOS and OS X',
    4,
    0,
    0,
    2016,
    288,
    'Практичный и удобный справочник дает возможность быстро найти ответы на основные вопросы по разработке и отладке прикладных программ на языке Swift (мультипарадигматический язык программирования, разработан компанией Apple).'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    22,
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    3,
    0,
    0,
    2014,
    192,
    'В этой книге описано краткое, но полное введение в эту быстро развивающуюся технологию. '
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    23,
    'Head First Ruby',
    2,
    0,
    0,
    2016,
    544,
    'Вам интересно, почему буквально все вокруг заговорили о языке Ruby? Спросите себя прямо: Вам нравится работать эффективно? Неужели многочисленные компиляторы, библиотеки, классы, которыми грузят вас другие языки программирования, приближают вас к решению конкретной задачи, восхищению коллег и толпе счастливых заказчиков? Вы хотите, чтобы язык программирования занимался техническими подробностями вместо вас? Тогда бросайте рутинную работу и приступайте к решению конкретных задач, а язык Ruby сделает за вас все остальное.'
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `views`,
    `wants`,
    `is_deleted`,
    `year`,
    `pages`,
    `description`
  )
VALUES
  (
    24,
    'Practical Vim',
    1,
    0,
    0,
    2016,
    292,
    'Vim – быстрый и эффективный текстовый редактор, способный повысить скорость и эффективность разработки. С помощью более ста рецептов вы быстро освоите основные возможности Vim и сможете заняться решением своих самых необычных задач, связанных с созданием и правкой текста.'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
