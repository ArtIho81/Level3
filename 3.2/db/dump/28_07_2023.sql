/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  `wants` int NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 53 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `id`,
    `title`,
    `author`,
    `views`,
    `wants`,
    `is_deleted`
  )
VALUES
  (
    1,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    'Андрей Богуславский',
    5,
    1,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `author`,
    `views`,
    `wants`,
    `is_deleted`
  )
VALUES
  (
    2,
    'Программирование на языке Go!',
    'Марк Саммерфильд',
    7,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `author`,
    `views`,
    `wants`,
    `is_deleted`
  )
VALUES
  (
    3,
    'Толковый словарь сетевых терминов и аббревиатур',
    'М. Вильямс',
    2,
    1,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `author`,
    `views`,
    `wants`,
    `is_deleted`
  )
VALUES
  (
    4,
    'Python for Data Analysis',
    'Уэс Маккинни',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `title`,
    `author`,
    `views`,
    `wants`,
    `is_deleted`
  )
VALUES
  (
    5,
    'Thinking in Java (4th Edition)',
    'Брюс Эккель',
    5,
    1,
    0
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
