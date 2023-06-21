import React from 'react'
import type { FC } from 'react'

export type Layout = 'desktop' | 'mobile'

interface Props {
  layout?: Layout
}

export const Demo: FC<Props> = ({ layout }) => (
  <div>
    {layout === 'mobile' ? 'MOBILE' : 'DESKTOP'}
    <br />
    {layout}
  </div>
)
