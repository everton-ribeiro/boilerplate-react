/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserConfig } from '@commitlint/types';

const ERROR = 2;

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    formatter: '@commitlint/format',
    rules: {
        'type-enum': [
            ERROR,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
};

module.exports = Configuration;
