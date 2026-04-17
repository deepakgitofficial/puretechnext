export default {
    name: 'contact',
    title: 'Contact Form Leads',
    type: 'document',
    fields: [
        { name: 'fullName', type: 'string', title: 'Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'mobile', type: 'string', title: 'Mobile' },
        { name: 'message', type: 'text', title: 'Message' },
        { name: 'submittedAt', type: 'datetime', title: 'Received At', options: { default: new Date().toISOString() } }
    ]
}