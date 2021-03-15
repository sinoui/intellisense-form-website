import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Link ({title}) {
    return <a class="nav-link" href={useBaseUrl('docs/')}>{title}</a>
}