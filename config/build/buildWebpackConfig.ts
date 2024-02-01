import path from "path";
import { BuidOptions } from "./types/config";
import webpack from 'webpack'
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buidWebpackConfig(options: BuidOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename:'[name][contanthash].js',
            path: paths.build,
            clean: true,
        },
        plugins:buildPlugins(options),
        module: {
            rules: buildLoaders()
          },
          resolve: buildResolvers(),
      }
}