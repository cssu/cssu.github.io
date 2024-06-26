/**
 * This file contains a modified approach to changing the way frontmatters are parsed
 * by Next.js when importing MDX files directly.
 *
 * A slightly modified version of:
 * https://gist.github.com/
 * sudkumar/70834062f9243558846249f2c2f98902?permalink_comment_id=4419729#gistcomment-4419729
 *
 * This file has to be in JavaScript as it is imported in the next.config.mjs file,
 * and not included in the TypeScript build process.
 *
 */
import matter from 'gray-matter'

import parsedExportAst from './parsedExportAST.mjs'

export default function remarkDefaultExport() {
    return (tree, file) => {
        const { data } = matter(file.value)

        tree.children.unshift({
            type: 'mdxjsEsm',
            value: `export const frontMatter = JSON.parse(\`${JSON.stringify(data)}\`)`,
            data: {
                estree: parsedExportAst(JSON.stringify(data)),
            },
        })
    }
}
