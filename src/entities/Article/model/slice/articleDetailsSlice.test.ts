import { DeepPartial } from 'shared/types/common';
import { ArticleDetailsSchema } from 'entities/Article';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { Article, ArticleType } from 'entities/Article/model/types/article';

describe('articleDetailsSlice.test', () => {
    test('should handle fetchArticleById.pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'Some error',
        };
        const newState = articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending('', '1'),
        );

        expect(newState).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('should handle fetchArticleById.fulfilled', () => {
        const article: Article = {
            id: '1',
            title: 'Test title',
            subtitle: 'Test subtitle',
            img: '',
            views: 0,
            createdAt: '2024-01-01',
            type: [ArticleType.IT],
            blocks: [],
        };

        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        const newState = articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '', '1'),
        );

        expect(newState).toEqual({
            isLoading: false,
            data: article,
        });
    });

    test('should handle fetchArticleById.rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        const action = {
            type: fetchArticleById.rejected.type,
            payload: 'Some error',
        };

        const newState = articleDetailsReducer(
            state as ArticleDetailsSchema,
            action,
        );

        expect(newState).toEqual({
            isLoading: false,
            error: 'Some error',
        });
    });
});
