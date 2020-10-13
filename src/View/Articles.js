import React from 'react'
import Article from '../components/structures/Article'
import Section from '../components/structures/Section'

const articlesTab = [
    {
        img: 'currency',
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
        img: 'restaurant',
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        img: 'plane',
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        img: 'confetti',
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    },
]

const articles = articlesTab.map(item=><Article key={item.img} item={item}/>)
const title = 'Latest Articles'

const Articles = ()=>{
    return(
        <div>
            <Section background='#FAFAFA' title={title} blocks={articles}/>
        </div>
    )
}


export default Articles