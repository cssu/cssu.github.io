import BA2250MDX, { frontMatter } from '$/ba2250/index.mdx'
import InformationPage from '@/components/InformationPage'
import { getFigureComponent, getImgComponent } from '@/lib/getMDXComponents'

import type { Metadata } from 'next'

const PAGE_URL = 'ba2250'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function BA2250() {
    return (
        <InformationPage metadata={frontMatter}>
            <BA2250MDX
                components={{ ...getImgComponent(PAGE_URL), ...getFigureComponent(PAGE_URL) }}
            />
        </InformationPage>
    )
}
