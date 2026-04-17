import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/Index'

export default defineConfig({
    name: 'default',
    title: 'Agency Website Backend',

    projectId: 'thef51jy',
    dataset: 'production',
    
    basePath: '/studio',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})