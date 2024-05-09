/**
 * Модель пользователя
 */
export type User = {
    /**
     * Имя
     */
    name: string;

    /**
     * ID
     */
    uid: string;

    /**
     * Ссылка на аватар
     */
    avatarUrl: string | null;

    /**
     * Почта
     */
    email: string;

    /**
     * ID созданных записей
     */
    createdNoteIds?: string[];

    /**
     * ID записей для чтения
     */
    readingNoteIds?: string[];

    /**
     * ID записей для изменения
     */
    editingNoteIds?: string[];
};
