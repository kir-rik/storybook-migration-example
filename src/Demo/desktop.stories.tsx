import type { Args } from '@storybook/react'

import { Demo } from './'
import type { Layout } from './index'

export interface StoryType {
  (args: { layout?: Layout }): JSX.Element
  args: { layout?: Layout }
  parameters?: Args
}

export default {
  title: 'demo/desktop',
  args: { layout: 'desktop' },
}

export const Story: StoryType = ({ layout }) => <Demo layout={layout} />
Story.args = {}
