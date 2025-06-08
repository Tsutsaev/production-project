import { type RuleSetRule } from 'webpack';
import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { type BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true), // Или false, если нужно
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    // Добавляем путь для src в modules
    config!.resolve!.modules!.push(paths.src);

    // Добавляем расширения .ts и .tsx
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // Добавляем алиасы
    config!.resolve!.alias = {
        ...(config!.resolve!.alias || {}),
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    };

    // Обработка правил модулей
    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));

    // Добавляем правила для tsx и svg
    config!.module!.rules.push(
        {
            test: /\.tsx?$/, // Для обработки TypeScript
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.svg$/, // Для обработки SVG
            use: ['@svgr/webpack'],
        },
    );

    // Добавляем CSS loader
    config!.module!.rules.push(buildCssLoader(true));

    return config;
};
