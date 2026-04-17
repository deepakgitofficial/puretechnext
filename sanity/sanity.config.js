import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './Index'


// import { structureTool } from 'sanity/structure'

export default defineConfig({
    name: 'default',
    title: 'Agency Website Backend',

    projectId: 'thef51jy',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})