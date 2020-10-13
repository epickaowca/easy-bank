import React from 'react'
import Benefit from '../components/structures/Benefit'
import Section from '../components/structures/Section'


const benefitsTab = [
    {
        img: 'online',
        title: 'Online Banking',
        content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
        img: 'budgeting',
        title: 'Simple Budgeting',
        content: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
        img: 'onboarding',
        title: 'Fast Onboarding',
        content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
        img: 'api',
        title: 'Open API',
        content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
]

const benefits = benefitsTab.map(item=><Benefit key={item.title} item={item} />)
const content = 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'
const title = 'Why choose Easybank'

const About = ()=>{
    return(
        <Section background='#F3F4F6' title={title} blocks={benefits} content={content} />
    )
}

export default About