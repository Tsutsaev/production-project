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
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true), // Или false, если нужно
        }),
    );
    // Добавляем путь для src в modules
    config.resolve.modules.push(paths.src);

    // Добавляем расширения .ts и .tsx
    config.resolve.extensions.push('.ts', '.tsx');

    // Добавляем алиасы
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    };

    // Обработка правил модулей
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    // Добавляем правила для tsx и svg
    config.module.rules.push(
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
    config.module.rules.push(buildCssLoader(true));

    return config;
};