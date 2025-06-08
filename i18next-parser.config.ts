module.exports = {
    locales: ['ru', 'en'], // Укажите ваши языки
    output: 'extractedTranslations/$LOCALE/translation.json', // Путь для файлов перевода
    defaultNamespace: 'translation', // Пространство имен по умолчанию
    useKeysAsDefaultValue: true, // Использовать ключ как значение по умолчанию
    createOldCatalogs: false, // Не создавать резервные копии
    indentation: 2, // Форматирование JSON
    keepRemoved: false, // Удалять неиспользуемые ключи
};
